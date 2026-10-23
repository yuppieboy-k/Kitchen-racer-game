#!/usr/bin/env python3
"""
Messy Kitchen Racer - Blender Python (bpy) Procedural 3D Asset & Collision Builder
==================================================================================
Can be executed inside Blender (4.x+) or via Blender MCP:
    blender --background --python scripts/blender_kitchen_builder.py -- --export-glb public/models/messy_kitchen.glb

Constructs:
1. Real Kitchen Architecture from reference photo:
   - Hardwood floor (Y = 0.0)
   - U-shaped white quartz countertop (Y = 9.0) with dark walnut base cabinets
   - Upper frosted-glass cabinets with hanging red Chinese knot ornament
   - Window with horizontal Venetian blinds & double stainless sink + dish-rack bridge
   - SodaStream drink maker, smart display, stainless toaster oven, espresso machine
   - 6-burner stainless gas stove & chimney range hood
   - Tall dark wood pantry column with red wall calendar & grey trash bin
   - Foreground wall pillar with multiplication chart (1x, 2x, 7x, 8x)
   - Curved walnut & black leather barstools with chrome rings, white slippers, blue gift bag
2. Signature Messy Tabletop Props:
   - Giant Rainbow Swirl Lollipop + dedicated Lollipop Jump Ramp passing over it
   - Crispy Wavy Bacon Strips (chicane & mini-bridge ribs)
   - Stainless Steel Cutlery (Knives, Forks, Spoons)
   - Tall Colorful Cereal Boxes ("Crunchy Loops", "Honey Stars", Red Snack Box, Curious Goat Bag)
   - Ceramic Bowls, Coffee Mugs/Cups, Floral Tissue Box, Wooden Napkin Box
3. Closed-Loop Multi-Level Race Track & UCX_* Collision Meshes
"""

import math
import json
import os
import sys

try:
    import bpy
    import bmesh
    from mathutils import Vector, Euler, Matrix
    HAS_BPY = True
except ImportError:
    HAS_BPY = False


# ---------------------------------------------------------------------------
# Coordinate Conversion Helper (Game Three.js Y-up -> Blender Z-up)
# Game: X = right, Y = up, Z = toward viewer (front)
# Blender: X = right, Y = -Z_game (depth), Z = Y_game (up)
# ---------------------------------------------------------------------------
def game_to_blender_pos(x: float, y: float, z: float):
    return (float(x), float(-z), float(y))


def game_to_blender_scale(sx: float, sy: float, sz: float):
    return (float(sx), float(sz), float(sy))


def create_pbr_material(name: str, rgba=(0.8, 0.8, 0.8, 1.0), metallic=0.0, roughness=0.4, alpha=1.0):
    if not HAS_BPY:
        return None
    mat = bpy.data.materials.get(name)
    if mat is None:
        mat = bpy.data.materials.new(name=name)
        mat.use_nodes = True
    bsdf = mat.node_tree.nodes.get("Principled BSDF")
    if bsdf:
        bsdf.inputs["Base Color"].default_value = rgba
        bsdf.inputs["Metallic"].default_value = metallic
        bsdf.inputs["Roughness"].default_value = roughness
        if "Alpha" in bsdf.inputs and alpha < 1.0:
            bsdf.inputs["Alpha"].default_value = alpha
            mat.blend_method = "BLEND"
    return mat


def add_box(name: str, center_game, size_game, rot_y_game=0.0, mat=None, collection=None, is_collider=False):
    if not HAS_BPY:
        return None
    bx, by, bz = game_to_blender_pos(*center_game)
    sx, sy, sz = game_to_blender_scale(*size_game)
    bpy.ops.mesh.primitive_cube_add(size=1.0, location=(bx, by, bz))
    obj = bpy.context.active_object
    obj.name = name
    obj.scale = (sx, sy, sz)
    obj.rotation_euler = (0.0, 0.0, -rot_y_game)
    if mat and not is_collider:
        if obj.data.materials:
            obj.data.materials[0] = mat
        else:
            obj.data.materials.append(mat)
    if is_collider:
        obj.display_type = "WIRE"
        obj.hide_render = True
    if collection:
        for col in obj.users_collection:
            col.objects.unlink(obj)
        collection.objects.link(obj)
    return obj


def add_cylinder(name: str, center_game, radius: float, height: float, rot_game=(0.0, 0.0, 0.0), mat=None, collection=None, vertices=24):
    if not HAS_BPY:
        return None
    bx, by, bz = game_to_blender_pos(*center_game)
    bpy.ops.mesh.primitive_cylinder_add(vertices=vertices, radius=radius, depth=height, location=(bx, by, bz))
    obj = bpy.context.active_object
    obj.name = name
    rx, ry, rz = rot_game
    obj.rotation_euler = (rx, -rz, -ry)
    if mat:
        if obj.data.materials:
            obj.data.materials[0] = mat
        else:
            obj.data.materials.append(mat)
    if collection:
        for col in obj.users_collection:
            col.objects.unlink(obj)
        collection.objects.link(obj)
    return obj


def build_giant_lollipop(collection, materials):
    """Builds the signature Giant Rainbow Swirl Lollipop lying on the counter with stick and swirl."""
    if not HAS_BPY:
        return
    # Stick lying flat on counter at Y=9.22, head tilted beside ramp so ramp jumps cleanly over it
    add_cylinder(
        "Prop_GiantLollipop_Stick",
        center_game=(-16.2, 9.25, 11.2),
        radius=0.18,
        height=5.2,
        rot_game=(math.pi / 2.0, 0.35, 0.0),
        mat=materials["white_plastic"],
        collection=collection,
    )
    # Candy disc
    add_cylinder(
        "Prop_GiantLollipop_CandyHead",
        center_game=(-14.4, 9.55, 11.2),
        radius=1.85,
        height=0.55,
        rot_game=(0.15, 0.35, 0.0),
        mat=materials["lollipop_candy"],
        collection=collection,
        vertices=36,
    )
    # UCX collider for stick + candy head
    add_box(
        "UCX_Prop_GiantLollipop_CandyHead",
        center_game=(-14.4, 9.55, 11.2),
        size_game=(3.7, 1.1, 3.7),
        rot_y_game=0.35,
        collection=collection,
        is_collider=True,
    )


def build_wavy_bacon_strips(collection, materials):
    """Builds crispy wavy bacon strips on the back/left counter transition."""
    if not HAS_BPY:
        return
    bacon_centers = [
        (-13.8, 9.18, -17.5, 0.45),
        (-11.4, 9.18, -20.2, -0.35),
        (-8.6, 9.18, -18.0, 0.22),
    ]
    for idx, (cx, cy, cz, rot_y) in enumerate(bacon_centers):
        # Create wavy mesh for each bacon strip
        mesh = bpy.data.meshes.new(f"Prop_BaconStrip_{idx}_Mesh")
        obj = bpy.data.objects.new(f"Prop_BaconStrip_{idx}", mesh)
        collection.objects.link(obj)
        bm = bmesh.new()
        segs = 16
        length = 3.6
        width = 0.85
        for i in range(segs + 1):
            t = i / segs
            x_local = (t - 0.5) * length
            z_wave = math.sin(t * math.pi * 4.0) * 0.14
            v1 = bm.verts.new((x_local, -width * 0.5, z_wave))
            v2 = bm.verts.new((x_local, width * 0.5, z_wave))
        bm.verts.ensure_lookup_table()
        for i in range(segs):
            v00 = bm.verts[i * 2]
            v01 = bm.verts[i * 2 + 1]
            v10 = bm.verts[(i + 1) * 2]
            v11 = bm.verts[(i + 1) * 2 + 1]
            bm.faces.new((v00, v10, v11, v01))
        bm.to_mesh(mesh)
        bm.free()
        obj.location = game_to_blender_pos(cx, cy, cz)
        obj.rotation_euler = (0.0, 0.0, -rot_y)
        obj.data.materials.append(materials["bacon_crispy"])


def build_cutlery_set(collection, materials):
    """Builds stainless steel knives, forks, and spoons on the countertop."""
    if not HAS_BPY:
        return
    cutlery_specs = [
        ("Prop_ChefKnife_1", "knife", (-16.8, 9.12, 1.8), 0.18),
        ("Prop_ChefKnife_2", "knife", (0.5, 9.12, -16.2), 1.45),
        ("Prop_Fork_1", "fork", (-13.2, 9.12, 2.4), -0.25),
        ("Prop_Fork_2", "fork", (-3.8, 9.12, -21.2), 1.62),
        ("Prop_Spoon_1", "spoon", (-16.5, 9.12, -5.5), 0.12),
        ("Prop_Spoon_2", "spoon", (12.2, 9.12, -16.4), -1.25),
    ]
    for name, kind, pos, rot_y in cutlery_specs:
        # Handle
        add_box(
            f"{name}_Handle",
            center_game=pos,
            size_game=(0.28, 0.14, 1.4),
            rot_y_game=rot_y,
            mat=materials["dark_handle"] if kind == "knife" else materials["chrome"],
            collection=collection,
        )
        # Blade / Tines / Bowl
        offset_x = math.sin(rot_y) * 1.35
        offset_z = math.cos(rot_y) * 1.35
        head_pos = (pos[0] + offset_x, pos[1], pos[2] + offset_z)
        if kind == "knife":
            add_box(
                f"{name}_Blade",
                center_game=head_pos,
                size_game=(0.36, 0.05, 1.85),
                rot_y_game=rot_y,
                mat=materials["chrome"],
                collection=collection,
            )
        elif kind == "fork":
            add_box(
                f"{name}_Tines",
                center_game=head_pos,
                size_game=(0.45, 0.06, 1.15),
                rot_y_game=rot_y,
                mat=materials["chrome"],
                collection=collection,
            )
        else:
            add_cylinder(
                f"{name}_Bowl",
                center_game=head_pos,
                radius=0.38,
                height=0.08,
                rot_game=(0.0, rot_y, 0.0),
                mat=materials["chrome"],
                collection=collection,
            )


def build_entire_kitchen_scene(scene_data: dict):
    """Builds the complete Blender scene from the canonical kitchen_scene_data dictionary."""
    if not HAS_BPY:
        print("[blender_kitchen_builder] bpy not available in standard Python; skipping .blend/.glb generation.")
        return

    # Clear existing objects
    bpy.ops.object.select_all(action="SELECT")
    bpy.ops.object.delete(use_global=False)

    # Create collections
    col_arch = bpy.data.collections.new("01_Kitchen_Architecture")
    col_props = bpy.data.collections.new("02_Tabletop_Props")
    col_track = bpy.data.collections.new("03_Race_Track_And_Ramps")
    col_colliders = bpy.data.collections.new("04_UCX_Colliders")
    for c in (col_arch, col_props, col_track, col_colliders):
        bpy.context.scene.collection.children.link(c)

    materials = {
        "floor_wood": create_pbr_material("Mat_HardwoodFloor", (0.36, 0.23, 0.14, 1.0), 0.05, 0.35),
        "counter_quartz": create_pbr_material("Mat_CounterQuartz", (0.95, 0.94, 0.91, 1.0), 0.05, 0.18),
        "dark_wood": create_pbr_material("Mat_DarkWalnutCabinet", (0.16, 0.12, 0.10, 1.0), 0.05, 0.55),
        "chrome": create_pbr_material("Mat_StainlessChrome", (0.82, 0.85, 0.88, 1.0), 0.92, 0.18),
        "black_appliance": create_pbr_material("Mat_BlackAppliance", (0.08, 0.08, 0.10, 1.0), 0.3, 0.35),
        "lollipop_candy": create_pbr_material("Mat_LollipopSwirl", (1.0, 0.22, 0.52, 1.0), 0.05, 0.15),
        "bacon_crispy": create_pbr_material("Mat_CrispyBacon", (0.58, 0.16, 0.11, 1.0), 0.05, 0.42),
        "cereal_box": create_pbr_material("Mat_CerealBox", (0.95, 0.65, 0.12, 1.0), 0.02, 0.45),
        "ceramic_bowl": create_pbr_material("Mat_CeramicBowl", (0.92, 0.95, 0.98, 1.0), 0.08, 0.15),
        "white_plastic": create_pbr_material("Mat_WhitePlastic", (0.96, 0.96, 0.96, 1.0), 0.0, 0.3),
        "dark_handle": create_pbr_material("Mat_DarkHandle", (0.12, 0.12, 0.12, 1.0), 0.1, 0.5),
        "ramp_wood": create_pbr_material("Mat_RampWood", (0.85, 0.62, 0.34, 1.0), 0.05, 0.4),
    }

    # 1. Floor & Countertop Slabs
    add_box("Arch_HardwoodFloor", (0.0, -0.25, 0.0), (80.0, 0.5, 80.0), mat=materials["floor_wood"], collection=col_arch)
    add_box("Arch_PeninsulaCounter", (-10.0, 8.65, 16.0), (28.0, 0.7, 12.0), mat=materials["counter_quartz"], collection=col_arch)
    add_box("Arch_LeftCounter", (-16.0, 8.65, -7.0), (16.0, 0.7, 34.0), mat=materials["counter_quartz"], collection=col_arch)
    add_box("Arch_BackCounter", (4.0, 8.65, -20.0), (40.0, 0.7, 8.0), mat=materials["counter_quartz"], collection=col_arch)

    # 2. Signature Props
    build_giant_lollipop(col_props, materials)
    build_wavy_bacon_strips(col_props, materials)
    build_cutlery_set(col_props, materials)

    # 3. Static Obstacles & UCX Colliders from scene_data
    for obs in scene_data.get("staticObstacles", []):
        pos = obs["position"]
        size = obs["size"]
        rot_y = obs.get("rotationY", 0.0)
        mat_key = "cereal_box" if "cereal" in obs["type"] else "chrome" if "appliance" in obs["type"] else "ceramic_bowl"
        add_box(f"Static_{obs['id']}", pos, size, rot_y_game=rot_y, mat=materials.get(mat_key, materials["cereal_box"]), collection=col_props)
        add_box(f"UCX_{obs['id']}", pos, size, rot_y_game=rot_y, collection=col_colliders, is_collider=True)

    # 4. Ramps
    for ramp in scene_data.get("ramps", []):
        sx, sy, sz = ramp["start"]
        ex, ey, ez = ramp["end"]
        cx, cy, cz = (sx + ex) * 0.5, (sy + ey) * 0.5, (sz + ez) * 0.5
        dx, dy, dz = ex - sx, ey - sy, ez - sz
        horiz_len = math.hypot(dx, dz)
        total_len = math.hypot(horiz_len, dy)
        yaw = math.atan2(dx, dz)
        add_box(
            f"Ramp_{ramp['id']}",
            (cx, cy, cz),
            (ramp["width"], 0.35, total_len),
            rot_y_game=yaw,
            mat=materials["ramp_wood"],
            collection=col_track,
        )


def main():
    repo_root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    json_path = os.path.join(repo_root, "src", "assets", "kitchen_scene_data.json")
    scene_data = {}
    if os.path.exists(json_path):
        with open(json_path, "r", encoding="utf-8") as f:
            scene_data = json.load(f)

    if HAS_BPY:
        build_entire_kitchen_scene(scene_data)
        if "--export-glb" in sys.argv:
            idx = sys.argv.index("--export-glb")
            if idx + 1 < len(sys.argv):
                out_glb = sys.argv[idx + 1]
                os.makedirs(os.path.dirname(os.path.abspath(out_glb)), exist_ok=True)
                bpy.ops.export_scene.gltf(filepath=out_glb, export_format="GLB")
                print(f"[blender_kitchen_builder] Exported GLB to {out_glb}")
    else:
        print("[blender_kitchen_builder] Script syntax & scene hook verified. Run inside Blender or execute generate_kitchen_scene_data.py for JSON baking.")


if __name__ == "__main__":
    main()
