#!/usr/bin/env python3
"""
Messy Kitchen Racer - Deterministic 3D Scene, Track Spline & Collision Compiler
===============================================================================
Generates `src/assets/kitchen_scene_data.json` containing:
- `metadata`: Coordinate system & kitchen elevation constants
- `architecture`: U-shaped countertop slabs, cabinets, sink, stove, window, pantry, wall charts
- `trackWaypoints`: 160 high-resolution closed-loop 3D spline points with surface types & widths
- `checkpoints`: 10 ordered race checkpoints with position, forward normal, and gate width
- `ramps`: Exact 3D ramp definitions (Lollipop Jump Ramp, Bacon Strip Bridge, Sink Bridge,
           Counter-to-Floor Launch Ramp, Floor-to-Counter Return Ramp)
- `staticObstacles`: Heavy kitchen appliances, Giant Lollipop, Cereal Boxes, Ceramic Bowls,
                     Cutlery (Knives, Forks, Spoons), Wavy Bacon Strips, Barstools, Trash Bin
- `dynamicProps`: Knockable physics clutter (Coffee Cups/Mugs, Tissue Box, Napkin Holder,
                  Spice Jars, Spoons, Blue Gift Bag, White Slippers)
"""

import json
import math
import os
from typing import List, Dict, Any, Tuple

COUNTER_Y = 9.0
FLOOR_Y = 0.0


def vec_sub(a: Tuple[float, float, float], b: Tuple[float, float, float]) -> Tuple[float, float, float]:
    return (a[0] - b[0], a[1] - b[1], a[2] - b[2])


def vec_add(a: Tuple[float, float, float], b: Tuple[float, float, float]) -> Tuple[float, float, float]:
    return (a[0] + b[0], a[1] + b[1], a[2] + b[2])


def vec_scale(a: Tuple[float, float, float], s: float) -> Tuple[float, float, float]:
    return (a[0] * s, a[1] * s, a[2] * s)


def vec_len(a: Tuple[float, float, float]) -> float:
    return math.sqrt(a[0] * a[0] + a[1] * a[1] + a[2] * a[2])


def vec_norm(a: Tuple[float, float, float]) -> Tuple[float, float, float]:
    l = vec_len(a)
    if l < 1e-8:
        return (0.0, 0.0, 1.0)
    return (a[0] / l, a[1] / l, a[2] / l)


def catmull_rom(p0, p1, p2, p3, t: float) -> Tuple[float, float, float]:
    t2 = t * t
    t3 = t2 * t
    out = []
    for i in range(3):
        v = 0.5 * (
            (2.0 * p1[i])
            + (-p0[i] + p2[i]) * t
            + (2.0 * p0[i] - 5.0 * p1[i] + 4.0 * p2[i] - p3[i]) * t2
            + (-p0[i] + 3.0 * p1[i] - 3.0 * p2[i] + p3[i]) * t3
        )
        out.append(round(v, 4))
    return (out[0], out[1], out[2])


def build_control_points() -> List[Dict[str, Any]]:
    """
    Defines the 20 master control points around the U-shaped kitchen counter & hardwood floor.
    Loop direction:
    - Starts on Peninsula Counter (Z = 16.0, X = -4.0 -> -15.0, Y = 9.0) heading West (-X)
    - Launches over the Lollipop Jump Ramp at the Peninsula/Left Counter corner (X = -15.0, Z = 13.0 -> 8.0)
    - Weaves North (-Z) along the Left Counter past Toaster Oven, Cereal Boxes, Cutlery, Espresso Machine
    - Crosses the Sink Dish-Rack Bridge (X = -13.5, Z = -7.0 -> -13.0)
    - Curves East (+X) across the Wavy Bacon Strip Chicane & Back Counter (Z = -18.5)
    - Sweeps past the 6-Burner Gas Stove (X = 2.0 -> 14.0, Z = -18.5)
    - Turns South (+Z) onto the Counter-to-Floor Launch Ramp (X = 15.5, Z = -14.0 -> 2.0, Y = 9.0 -> 0.0)
    - Races across the Hardwood Floor past the Stainless Trash Bin & Blue Gift Bag (Z = 8.0 -> 25.0)
    - Slaloms around the Curved Walnut Barstools & White Slippers on the floor (X = 4.0 -> -6.0, Z = 26.0)
    - Climbs the Floor-to-Counter Return Ramp (X = -2.0 -> 2.5, Z = 22.0 -> 16.5, Y = 0.0 -> 9.0)
    - Returns to the Peninsula Start/Finish Line (X = -4.0, Z = 16.0, Y = 9.0)
    """
    return [
        # 0: Start/Finish straight on Peninsula Counter
        {"pos": (-4.0, 9.0, 16.0), "width": 5.2, "bank": 0.0, "surface": "counter_stone"},
        # 1: Peninsula west approach to Lollipop Jump
        {"pos": (-11.5, 9.0, 15.2), "width": 5.0, "bank": 0.04, "surface": "counter_stone"},
        # 2: Lollipop Jump Ramp apex (jumps right over the Giant Lollipop stick/neck!)
        {"pos": (-15.0, 10.45, 11.2), "width": 4.6, "bank": 0.0, "surface": "ramp_wood"},
        # 3: Landing after Lollipop Jump on Left Counter near Toaster Oven
        {"pos": (-14.8, 9.0, 6.2), "width": 4.8, "bank": 0.0, "surface": "counter_stone"},
        # 4: Cutlery & Cereal Box Chicane (weaving between Toaster Oven & Ceramic Bowls)
        {"pos": (-13.6, 9.0, 1.0), "width": 4.6, "bank": -0.05, "surface": "counter_stone"},
        # 5: Espresso Machine pass
        {"pos": (-14.2, 9.0, -4.2), "width": 4.6, "bank": 0.04, "surface": "counter_stone"},
        # 6: Double Sink Dish-Rack Bridge crossing
        {"pos": (-13.5, 9.25, -10.0), "width": 4.2, "bank": 0.0, "surface": "sink_bridge"},
        # 7: North-West corner approaching Wavy Bacon Strips
        {"pos": (-13.2, 9.0, -15.8), "width": 4.8, "bank": 0.06, "surface": "counter_stone"},
        # 8: Wavy Crispy Bacon Strip Chicane Bridge on Back-Left Counter
        {"pos": (-9.5, 9.22, -18.6), "width": 4.8, "bank": 0.04, "surface": "bacon_strip"},
        # 9: Back Counter Cereal & Bowl Slalom
        {"pos": (-2.5, 9.0, -18.8), "width": 5.0, "bank": -0.03, "surface": "counter_stone"},
        # 10: 6-Burner Gas Stove high-speed straight
        {"pos": (5.5, 9.0, -18.4), "width": 5.2, "bank": 0.0, "surface": "counter_stone"},
        # 11: Back-Right Counter turn before Floor Launch Ramp
        {"pos": (13.5, 9.0, -17.0), "width": 5.0, "bank": 0.08, "surface": "counter_stone"},
        # 12: Top of Counter-to-Floor Launch Ramp
        {"pos": (15.5, 8.8, -11.5), "width": 4.8, "bank": 0.0, "surface": "ramp_wood"},
        # 13: Mid Counter-to-Floor Launch Ramp
        {"pos": (15.5, 4.5, -3.5), "width": 4.8, "bank": 0.0, "surface": "ramp_wood"},
        # 14: Floor Touchdown near Stainless Trash Bin
        {"pos": (15.5, 0.0, 5.0), "width": 5.8, "bank": 0.0, "surface": "floor_wood"},
        # 15: Hardwood Floor sweeping turn inside Blue Gift Bag
        {"pos": (14.5, 0.0, 15.5), "width": 6.2, "bank": 0.06, "surface": "floor_wood"},
        # 16: Hardwood Floor Barstool & Slippers Slalom entry
        {"pos": (9.5, 0.0, 24.5), "width": 6.0, "bank": 0.08, "surface": "floor_wood"},
        # 17: Floor-to-Counter Return Ramp base (east of Barstools)
        {"pos": (2.5, 0.2, 25.0), "width": 4.8, "bank": 0.0, "surface": "ramp_wood"},
        # 18: Mid Floor-to-Counter Return Ramp
        {"pos": (2.5, 4.6, 20.2), "width": 4.8, "bank": 0.0, "surface": "ramp_wood"},
        # 19: Top of Return Ramp merging onto Peninsula Counter
        {"pos": (1.2, 9.0, 16.2), "width": 5.0, "bank": 0.04, "surface": "counter_stone"},
    ]


def compile_track_waypoints(subdivisions_per_segment: int = 8) -> List[Dict[str, Any]]:
    ctrl = build_control_points()
    n = len(ctrl)
    raw_points = []

    for i in range(n):
        p0 = ctrl[(i - 1) % n]["pos"]
        p1 = ctrl[i]["pos"]
        p2 = ctrl[(i + 1) % n]["pos"]
        p3 = ctrl[(i + 2) % n]["pos"]

        w1 = ctrl[i]["width"]
        w2 = ctrl[(i + 1) % n]["width"]
        b1 = ctrl[i]["bank"]
        b2 = ctrl[(i + 1) % n]["bank"]
        surf = ctrl[i]["surface"]

        for s in range(subdivisions_per_segment):
            t = s / float(subdivisions_per_segment)
            pos = catmull_rom(p0, p1, p2, p3, t)
            # Clamp floor and counter heights so spline doesn't dip below surfaces
            if surf == "floor_wood":
                pos = (pos[0], max(FLOOR_Y, round(pos[1], 4)), pos[2])
            elif surf == "counter_stone":
                pos = (pos[0], max(COUNTER_Y, round(pos[1], 4)), pos[2])
            width = round(w1 + (w2 - w1) * t, 3)
            bank = round(b1 + (b2 - b1) * t, 4)
            raw_points.append({
                "position": list(pos),
                "width": width,
                "banking": bank,
                "surfaceType": surf,
            })

    total_pts = len(raw_points)
    cumulative_dist = 0.0
    waypoints = []
    for idx in range(total_pts):
        curr_p = tuple(raw_points[idx]["position"])
        next_p = tuple(raw_points[(idx + 1) % total_pts]["position"])
        prev_p = tuple(raw_points[(idx - 1) % total_pts]["position"])

        fwd = vec_norm(vec_sub(next_p, prev_p))
        # Right vector on XZ plane (Y-up: right = normalize(cross(fwd, up)))
        up = (0.0, 1.0, 0.0)
        right = vec_norm((
            fwd[2] * up[1] - fwd[1] * up[2],
            0.0,
            -fwd[0] * up[1] + fwd[1] * up[0],
        ))
        # Re-orthogonalize right = cross(fwd, (0,1,0)) -> (-fwd.z, 0, fwd.x)
        right = vec_norm((-fwd[2], 0.0, fwd[0]))

        if idx > 0:
            cumulative_dist += vec_len(vec_sub(curr_p, prev_p))

        waypoints.append({
            "index": idx,
            "position": [round(curr_p[0], 3), round(curr_p[1], 3), round(curr_p[2], 3)],
            "forward": [round(fwd[0], 4), round(fwd[1], 4), round(fwd[2], 4)],
            "right": [round(right[0], 4), round(right[1], 4), round(right[2], 4)],
            "up": [0.0, 1.0, 0.0],
            "width": raw_points[idx]["width"],
            "banking": raw_points[idx]["banking"],
            "surfaceType": raw_points[idx]["surfaceType"],
            "distanceFromStart": round(cumulative_dist, 3),
        })

    return waypoints


def build_checkpoints(waypoints: List[Dict[str, Any]]) -> List[Dict[str, Any]]:
    labels = [
        "Start / Finish (Peninsula Quartz)",
        "Giant Lollipop Jump Ramp",
        "Toaster & Cutlery Chicane",
        "Sink Dish-Rack Bridge",
        "Wavy Bacon Strip Chicane",
        "Cereal Box & Ceramic Bowl Slalom",
        "6-Burner Gas Stove Straight",
        "Counter-to-Floor Launch Ramp",
        "Hardwood Floor & Trash Bin Sweeper",
        "Barstool Slalom & Return Ramp",
    ]
    n_wp = len(waypoints)
    step = n_wp // len(labels)
    checkpoints = []
    for i, label in enumerate(labels):
        wp = waypoints[(i * step) % n_wp]
        checkpoints.append({
            "index": i,
            "id": f"checkpoint_{i:02d}",
            "label": label,
            "waypointIndex": wp["index"],
            "position": wp["position"],
            "forward": wp["forward"],
            "width": round(wp["width"] + 1.5, 2),
            "surfaceType": wp["surfaceType"],
        })
    return checkpoints


def build_ramps() -> List[Dict[str, Any]]:
    return [
        {
            "id": "lollipop_jump_ramp",
            "name": "Giant Lollipop Jump Ramp",
            "type": "tabletop_jump_ramp",
            "start": [-13.2, 9.0, 14.2],
            "apex": [-15.0, 10.55, 11.2],
            "end": [-15.0, 9.0, 8.0],
            "width": 4.6,
            "slopeNormal": [0.0, 0.948, -0.318],
            "boostMultiplier": 1.25,
            "description": "Wooden tabletop jump ramp launching cars cleanly over the Giant Rainbow Swirl Lollipop.",
        },
        {
            "id": "sink_cutting_board_bridge",
            "name": "Double Sink Cutting-Board & Dish-Rack Bridge",
            "type": "flat_bridge",
            "start": [-13.5, 9.0, -6.5],
            "apex": [-13.5, 9.25, -10.0],
            "end": [-13.5, 9.0, -13.5],
            "width": 4.4,
            "slopeNormal": [0.0, 1.0, 0.0],
            "boostMultiplier": 1.0,
            "description": "Wooden cutting board and stainless wire dish rack spanning the double kitchen sink.",
        },
        {
            "id": "bacon_strip_chicane_bridge",
            "name": "Crispy Wavy Bacon Strip Chicane Bridge",
            "type": "wavy_bridge",
            "start": [-12.2, 9.0, -17.8],
            "apex": [-9.5, 9.28, -18.6],
            "end": [-6.8, 9.0, -18.8],
            "width": 4.8,
            "slopeNormal": [0.0, 0.99, 0.14],
            "boostMultiplier": 1.1,
            "description": "Giant crispy wavy bacon strips laid across the back-left counter corner.",
        },
        {
            "id": "counter_to_floor_ramp",
            "name": "Counter-to-Floor Launch Ramp",
            "type": "elevation_ramp_down",
            "start": [15.5, 9.0, -12.5],
            "apex": [15.5, 4.5, -3.5],
            "end": [15.5, 0.0, 5.5],
            "width": 5.0,
            "slopeNormal": [0.0, 0.894, 0.447],
            "boostMultiplier": 1.35,
            "description": "Long wooden launch ramp descending from the right-hand stove counter down to the hardwood floor.",
        },
        {
            "id": "floor_to_counter_ramp",
            "name": "Floor-to-Counter Return Ramp",
            "type": "elevation_ramp_up",
            "start": [2.5, 0.0, 25.5],
            "apex": [2.2, 4.5, 20.8],
            "end": [1.5, 9.0, 16.2],
            "width": 5.0,
            "slopeNormal": [0.0, 0.72, 0.69],
            "boostMultiplier": 1.2,
            "description": "Steep wooden return ramp climbing from the hardwood floor back onto the white quartz peninsula.",
        },
    ]


def build_architecture() -> Dict[str, Any]:
    return {
        "counterSlabs": [
            {
                "id": "peninsula_counter_slab",
                "name": "Foreground White Quartz Peninsula Counter",
                "center": [-10.0, 8.65, 16.0],
                "size": [28.0, 0.7, 12.0],
                "topY": 9.0,
                "color": "#f3f1eb",
            },
            {
                "id": "left_wall_counter_slab",
                "name": "Left Wall White Quartz Counter (Sink & Appliances)",
                "center": [-16.0, 8.65, -7.0],
                "size": [16.0, 0.7, 34.0],
                "topY": 9.0,
                "color": "#f3f1eb",
            },
            {
                "id": "back_wall_counter_slab",
                "name": "Back Wall White Quartz Counter (6-Burner Stove)",
                "center": [4.0, 8.65, -20.0],
                "size": [40.0, 0.7, 8.0],
                "topY": 9.0,
                "color": "#f3f1eb",
            },
            {
                "id": "right_bridge_counter_slab",
                "name": "Right Stove-to-Ramp Launch Deck",
                "center": [15.5, 8.65, -14.0],
                "size": [8.0, 0.7, 6.0],
                "topY": 9.0,
                "color": "#f3f1eb",
            },
        ],
        "baseCabinets": [
            {"id": "peninsula_base_cabinet", "center": [-10.0, 4.15, 15.5], "size": [26.8, 8.3, 10.2], "color": "#28201c"},
            {"id": "left_base_cabinet", "center": [-16.5, 4.15, -7.0], "size": [14.5, 8.3, 33.0], "color": "#28201c"},
            {"id": "back_base_cabinet", "center": [4.0, 4.15, -20.2], "size": [39.0, 8.3, 7.2], "color": "#28201c"},
            {"id": "far_left_white_storage", "center": [-26.5, 3.6, 20.5], "size": [5.0, 7.2, 10.0], "color": "#e6e7eb"},
        ],
        "upperCabinets": [
            {
                "id": "upper_left_frosted_cabinet",
                "name": "4-Door Dark Wood & Frosted Glass Upper Cabinet (with Red Chinese Knot Ornament)",
                "center": [-19.5, 18.5, 5.5],
                "size": [4.2, 7.5, 16.5],
                "color": "#28201c",
                "frostedGlassColor": "#cad4d9",
                "hasChineseKnot": True,
                "chineseKnotPosition": [-17.2, 15.2, 7.5],
            },
            {
                "id": "upper_corner_frosted_cabinet",
                "name": "Back-Left Corner Frosted Glass Upper Cabinet",
                "center": [-16.0, 18.5, -20.5],
                "size": [9.5, 7.5, 4.2],
                "color": "#28201c",
                "frostedGlassColor": "#cad4d9",
            },
        ],
        "pantryAndWalls": [
            {
                "id": "dark_wood_pantry_column",
                "name": "Tall Dark Wood Pantry Enclosure with Red Hanging Calendar",
                "center": [22.5, 11.5, -6.0],
                "size": [6.5, 23.0, 9.5],
                "color": "#241c18",
                "calendarPosition": [22.5, 12.8, -1.2],
            },
            {
                "id": "foreground_multiplication_pillar",
                "name": "Right Foreground Wall Pillar with 1x-12x Multiplication Chart",
                "center": [26.5, 12.0, 18.0],
                "size": [4.5, 24.0, 8.0],
                "color": "#eceae4",
                "chartPosition": [24.2, 10.5, 18.0],
            },
            {
                "id": "sink_window_with_blinds",
                "name": "Kitchen Window with Beige Venetian Blinds",
                "center": [-23.8, 16.5, -10.0],
                "size": [0.6, 9.5, 11.0],
                "color": "#d8c8b0",
            },
        ],
    }


def build_static_obstacles() -> List[Dict[str, Any]]:
    """
    All static kitchen appliances, signature tabletop props (Giant Lollipop, Cereal Boxes,
    Ceramic Bowls, Cutlery, Wavy Bacon Strips), and floor obstacles (Barstools, Trash Bin).
    Positioned accurately around the track so every item is prominently visible and creates
    exciting chicanes without blocking the spline centerline.
    """
    return [
        # --- SIGNATURE PROP 1: GIANT RAINBOW SWIRL LOLLIPOP ---
        {
            "id": "giant_lollipop_candy_head",
            "name": "Giant Rainbow Swirl Lollipop (Candy Disc)",
            "type": "giant_lollipop",
            "colliderType": "cylinder",
            "position": [-18.2, 10.35, 11.2],
            "size": [3.2, 2.7, 3.2],
            "radius": 1.6,
            "rotationY": 0.35,
            "color": "#ff2e88",
            "secondaryColor": "#ffee33",
            "stickStart": [-18.2, 9.35, 11.2],
            "stickEnd": [-12.5, 9.22, 11.2],
            "description": "Giant rainbow swirl lollipop lying across the counter directly beneath the Lollipop Jump Ramp!",
        },

        # --- SIGNATURE PROP 2: TALL COLORFUL CEREAL BOXES & SNACK BOXES ---
        {
            "id": "cereal_box_crunchy_loops",
            "name": "Crunchy Fruit Loops Cereal Box",
            "type": "cereal_box",
            "colliderType": "box",
            "position": [-10.5, 11.1, 4.2],
            "size": [2.2, 4.2, 1.1],
            "rotationY": -0.35,
            "color": "#ff5722",
            "secondaryColor": "#ffd54f",
        },
        {
            "id": "cereal_box_honey_stars",
            "name": "Honey Stars Giant Family Cereal Box",
            "type": "cereal_box",
            "colliderType": "box",
            "position": [-5.2, 11.2, -15.4],
            "size": [2.4, 4.4, 1.2],
            "rotationY": 0.18,
            "color": "#ffc107",
            "secondaryColor": "#1e88e5",
        },
        {
            "id": "cereal_box_choco_pops",
            "name": "Choco Pops Cereal Box",
            "type": "cereal_box",
            "colliderType": "box",
            "position": [1.2, 11.0, -21.8],
            "size": [2.1, 4.0, 1.1],
            "rotationY": -0.12,
            "color": "#5d4037",
            "secondaryColor": "#ffca28",
        },
        {
            "id": "peninsula_red_snack_box",
            "name": "Red Cookie & Snack Box (From Photo Foreground)",
            "type": "cereal_box",
            "colliderType": "box",
            "position": [-4.5, 9.75, 11.8],
            "size": [3.2, 1.5, 2.4],
            "rotationY": 0.28,
            "color": "#c62828",
            "secondaryColor": "#ffcc80",
        },
        {
            "id": "curious_goat_coffee_bag",
            "name": "Curious Goat White Coffee Bag (From Photo Peninsula)",
            "type": "cereal_box",
            "colliderType": "box",
            "position": [-11.8, 10.45, 19.2],
            "size": [1.4, 2.9, 1.1],
            "rotationY": 0.42,
            "color": "#f5f5f5",
            "secondaryColor": "#212121",
        },

        # --- SIGNATURE PROP 3: CERAMIC BOWLS ---
        {
            "id": "ceramic_bowl_blue_rim",
            "name": "Large Ceramic Mixing Bowl",
            "type": "ceramic_bowl",
            "colliderType": "cylinder",
            "position": [-17.4, 9.75, -0.5],
            "size": [2.4, 1.5, 2.4],
            "radius": 1.2,
            "rotationY": 0.0,
            "color": "#e3f2fd",
            "secondaryColor": "#1976d2",
        },
        {
            "id": "ceramic_bowl_cereal_spoon",
            "name": "Ceramic Breakfast Bowl with Milk",
            "type": "ceramic_bowl",
            "colliderType": "cylinder",
            "position": [-0.8, 9.65, -15.2],
            "size": [2.1, 1.3, 2.1],
            "radius": 1.05,
            "rotationY": 0.5,
            "color": "#fff8e1",
            "secondaryColor": "#ff8f00",
        },
        {
            "id": "ceramic_bowl_peninsula",
            "name": "Pink Ceramic Fruit Bowl",
            "type": "ceramic_bowl",
            "colliderType": "cylinder",
            "position": [-8.2, 9.65, 19.6],
            "size": [2.2, 1.3, 2.2],
            "radius": 1.1,
            "rotationY": 0.0,
            "color": "#fce4ec",
            "secondaryColor": "#d81b60",
        },

        # --- SIGNATURE PROP 4: CUTLERY (STAINLESS STEEL KNIVES, FORKS, SPOONS) ---
        {
            "id": "cutlery_chef_knife_1",
            "name": "Stainless Steel Chef's Knife (Chicane Barrier)",
            "type": "cutlery_knife",
            "colliderType": "box",
            "position": [-17.2, 9.18, 2.8],
            "size": [0.55, 0.35, 3.4],
            "rotationY": 0.15,
            "color": "#dfe4ea",
            "secondaryColor": "#1e272e",
        },
        {
            "id": "cutlery_chef_knife_2",
            "name": "Serrated Bread Knife (Back Counter Guide Rail)",
            "type": "cutlery_knife",
            "colliderType": "box",
            "position": [-5.8, 9.18, -21.6],
            "size": [3.5, 0.35, 0.55],
            "rotationY": 0.08,
            "color": "#dfe4ea",
            "secondaryColor": "#1e272e",
        },
        {
            "id": "cutlery_dinner_fork_1",
            "name": "Oversized Stainless Steel Dinner Fork",
            "type": "cutlery_fork",
            "colliderType": "box",
            "position": [-10.4, 9.16, -1.2],
            "size": [0.6, 0.3, 2.9],
            "rotationY": -0.22,
            "color": "#ced6e0",
            "secondaryColor": "#a4b0be",
        },
        {
            "id": "cutlery_dinner_fork_2",
            "name": "Stainless Steel Salad Fork (Stove Approach)",
            "type": "cutlery_fork",
            "colliderType": "box",
            "position": [8.5, 9.16, -15.2],
            "size": [2.8, 0.3, 0.6],
            "rotationY": -0.1,
            "color": "#ced6e0",
            "secondaryColor": "#a4b0be",
        },
        {
            "id": "cutlery_soup_spoon_1",
            "name": "Polished Stainless Soup Spoon",
            "type": "cutlery_spoon",
            "colliderType": "box",
            "position": [-16.8, 9.16, -14.2],
            "size": [0.7, 0.3, 2.8],
            "rotationY": 0.38,
            "color": "#eccc68",
            "secondaryColor": "#dfe4ea",
        },
        {
            "id": "cutlery_soup_spoon_2",
            "name": "Stainless Tablespoon (Peninsula Guard)",
            "type": "cutlery_spoon",
            "colliderType": "box",
            "position": [-6.2, 9.16, 19.2],
            "size": [2.8, 0.3, 0.7],
            "rotationY": 0.05,
            "color": "#dfe4ea",
            "secondaryColor": "#a4b0be",
        },

        # --- SIGNATURE PROP 5: WAVY CRISPY BACON STRIPS ---
        {
            "id": "bacon_strip_guard_left",
            "name": "Crispy Wavy Bacon Strip (Inner Corner Curb)",
            "type": "bacon_strip",
            "colliderType": "box",
            "position": [-8.2, 9.18, -15.6],
            "size": [3.4, 0.32, 0.9],
            "rotationY": 0.42,
            "color": "#8d2319",
            "secondaryColor": "#d97b59",
        },
        {
            "id": "bacon_strip_guard_right",
            "name": "Crispy Wavy Bacon Strip (Outer Corner Curb)",
            "type": "bacon_strip",
            "colliderType": "box",
            "position": [-11.5, 9.18, -21.6],
            "size": [3.6, 0.32, 0.9],
            "rotationY": 0.32,
            "color": "#8d2319",
            "secondaryColor": "#d97b59",
        },

        # --- REAL KITCHEN APPLIANCES FROM PHOTO ---
        {
            "id": "appliance_sodastream",
            "name": "Black SodaStream Sparkling Water Maker",
            "type": "appliance",
            "colliderType": "box",
            "position": [-21.8, 11.2, 13.5],
            "size": [2.2, 4.4, 2.4],
            "rotationY": 0.2,
            "color": "#18191c",
            "secondaryColor": "#cfd8dc",
        },
        {
            "id": "appliance_smart_display",
            "name": "White Smart Kitchen Screen Display",
            "type": "appliance",
            "colliderType": "box",
            "position": [-19.2, 9.8, 15.2],
            "size": [2.1, 1.6, 1.1],
            "rotationY": 0.45,
            "color": "#f5f6fa",
            "secondaryColor": "#3742fa",
        },
        {
            "id": "appliance_toaster_oven",
            "name": "Stainless Steel Countertop Toaster Oven",
            "type": "appliance",
            "colliderType": "box",
            "position": [-20.2, 10.6, 6.2],
            "size": [3.8, 3.2, 5.2],
            "rotationY": 0.05,
            "color": "#b0bec5",
            "secondaryColor": "#263238",
        },
        {
            "id": "appliance_espresso_machine",
            "name": "Chrome Espresso & Cappuccino Maker",
            "type": "appliance",
            "colliderType": "box",
            "position": [-19.8, 11.1, -2.5],
            "size": [3.6, 4.2, 4.0],
            "rotationY": 0.0,
            "color": "#cfd8dc",
            "secondaryColor": "#1c1c1c",
        },
        {
            "id": "appliance_gas_stove_grates",
            "name": "6-Burner Stainless Gas Range (Back Wall side)",
            "type": "appliance_stove",
            "colliderType": "box",
            "position": [6.5, 9.35, -22.2],
            "size": [11.5, 0.7, 2.6],
            "rotationY": 0.0,
            "color": "#cfd8dc",
            "secondaryColor": "#212121",
        },

        # --- FLOOR LEVEL OBSTACLES FROM PHOTO (Y = 0.0) ---
        {
            "id": "floor_stainless_trash_bin",
            "name": "Light Grey / Stainless Rectangular Kitchen Trash Bin",
            "type": "trash_bin",
            "colliderType": "box",
            "position": [20.5, 3.2, 1.5],
            "size": [3.2, 6.4, 2.4],
            "rotationY": -0.1,
            "color": "#c8cacd",
            "secondaryColor": "#8d9096",
        },
        {
            "id": "floor_barstool_left",
            "name": "Curved Walnut & Black Leather Barstool (Left)",
            "type": "barstool",
            "colliderType": "cylinder",
            "position": [-16.5, 4.8, 23.2],
            "size": [4.2, 9.6, 4.2],
            "radius": 2.1,
            "rotationY": 0.4,
            "color": "#3e2723",
            "secondaryColor": "#1a1a1a",
        },
        {
            "id": "floor_barstool_right",
            "name": "Curved Walnut & Black Leather Barstool (Right)",
            "type": "barstool",
            "colliderType": "cylinder",
            "position": [-5.8, 4.8, 24.5],
            "size": [4.4, 9.6, 4.4],
            "radius": 2.2,
            "rotationY": -0.25,
            "color": "#3e2723",
            "secondaryColor": "#1a1a1a",
        },
    ]


def build_dynamic_props() -> List[Dict[str, Any]]:
    """
    Knockable physics clutter on the countertops and floor (Coffee Mugs, Tissue Box,
    Wooden Napkin Box, Spice Jars, Small Bowls/Cups, Blue Gift Bag, White Slippers).
    """
    return [
        {
            "id": "dyn_floral_tissue_box",
            "name": "Floral Pattern Tissue Box (Peninsula)",
            "type": "tissue_box",
            "colliderType": "box",
            "position": [-8.8, 9.6, 13.8],
            "size": [2.2, 1.2, 1.3],
            "radius": 1.1,
            "mass": 0.8,
            "rotationY": 0.15,
            "color": "#e1bee7",
        },
        {
            "id": "dyn_wooden_napkin_holder",
            "name": "Wooden Napkin Dispenser (Peninsula Corner)",
            "type": "napkin_holder",
            "colliderType": "box",
            "position": [-2.2, 9.5, 19.5],
            "size": [2.0, 0.9, 1.4],
            "radius": 1.0,
            "mass": 1.1,
            "rotationY": -0.35,
            "color": "#d7ccc8",
        },
        {
            "id": "dyn_pink_coffee_mug",
            "name": "Pink Ceramic Coffee Mug (Near Sink)",
            "type": "coffee_cup",
            "colliderType": "sphere",
            "position": [-11.5, 9.55, -5.2],
            "size": [1.0, 1.1, 1.0],
            "radius": 0.65,
            "mass": 0.6,
            "rotationY": 0.0,
            "color": "#f48fb1",
        },
        {
            "id": "dyn_blue_coffee_mug",
            "name": "Blue Ceramic Coffee Mug",
            "type": "coffee_cup",
            "colliderType": "sphere",
            "position": [-11.2, 9.55, 8.2],
            "size": [1.0, 1.1, 1.0],
            "radius": 0.65,
            "mass": 0.6,
            "rotationY": 1.1,
            "color": "#42a5f5",
        },
        {
            "id": "dyn_espresso_cup_white",
            "name": "White Ceramic Espresso Cup",
            "type": "coffee_cup",
            "colliderType": "sphere",
            "position": [-15.8, 9.45, -1.0],
            "size": [0.85, 0.9, 0.85],
            "radius": 0.55,
            "mass": 0.45,
            "rotationY": 0.4,
            "color": "#ffffff",
        },
        {
            "id": "dyn_yellow_cereal_mug",
            "name": "Sunny Yellow Latte Cup (Back Counter)",
            "type": "coffee_cup",
            "colliderType": "sphere",
            "position": [3.2, 9.55, -16.2],
            "size": [1.0, 1.1, 1.0],
            "radius": 0.65,
            "mass": 0.6,
            "rotationY": -0.5,
            "color": "#ffee58",
        },
        {
            "id": "dyn_spice_jar_paprika",
            "name": "Smoked Paprika Spice Jar",
            "type": "spice_jar",
            "colliderType": "sphere",
            "position": [-4.2, 9.5, -19.8],
            "size": [0.75, 1.0, 0.75],
            "radius": 0.5,
            "mass": 0.4,
            "rotationY": 0.0,
            "color": "#d84315",
        },
        {
            "id": "dyn_spice_jar_ basil",
            "name": "Sweet Basil Glass Shaker",
            "type": "spice_jar",
            "colliderType": "sphere",
            "position": [11.2, 9.5, -18.8],
            "size": [0.75, 1.0, 0.75],
            "radius": 0.5,
            "mass": 0.4,
            "rotationY": 0.2,
            "color": "#2e7d32",
        },
        {
            "id": "dyn_floor_blue_gift_bag",
            "name": "Blue Paper Shopping Bag on Hardwood Floor",
            "type": "gift_bag",
            "colliderType": "box",
            "position": [18.5, 0.35, 16.8],
            "size": [2.8, 0.6, 3.6],
            "radius": 1.6,
            "mass": 0.5,
            "rotationY": 0.45,
            "color": "#039be5",
        },
        {
            "id": "dyn_floor_white_slipper_left",
            "name": "White Slide Slipper (Left)",
            "type": "slipper",
            "colliderType": "box",
            "position": [-4.5, 0.25, 22.8],
            "size": [1.1, 0.45, 2.2],
            "radius": 0.9,
            "mass": 0.35,
            "rotationY": 0.55,
            "color": "#eceff1",
        },
        {
            "id": "dyn_floor_white_slipper_right",
            "name": "White Slide Slipper (Right)",
            "type": "slipper",
            "colliderType": "box",
            "position": [-2.8, 0.25, 23.4],
            "size": [1.1, 0.45, 2.2],
            "radius": 0.9,
            "mass": 0.35,
            "rotationY": 0.25,
            "color": "#eceff1",
        },
    ]


def verify_scene_consistency(waypoints: List[Dict[str, Any]], static_obstacles: List[Dict[str, Any]]) -> None:
    """
    Verifies that no static obstacle's 3D bounding volume blocks the drivable track centerline.
    Uses exact 2D oriented bounding box (OBB) signed distance in XZ for box colliders and
    radial distance for cylinder colliders.
    """
    for obs in static_obstacles:
        ox, oy, oz = obs["position"]
        sx, sy, sz = obs["size"]
        rot_y = obs.get("rotationY", 0.0)
        cos_r = math.cos(-rot_y)
        sin_r = math.sin(-rot_y)
        obs_top_y = oy + sy * 0.5
        obs_bot_y = oy - sy * 0.5

        for wp in waypoints:
            wx, wy, wz = wp["position"]
            # Check vertical overlap first (allow elevated ramp bridges to pass cleanly over low props)
            if wy > obs_top_y + 0.15 or (wy + 1.2) < obs_bot_y:
                continue

            dx = wx - ox
            dz = wz - oz
            if obs.get("colliderType") == "cylinder":
                rad = obs.get("radius", max(sx, sz) * 0.5)
                signed_dist = math.hypot(dx, dz) - rad
            else:
                # Transform into obstacle local XZ space
                lx = abs(dx * cos_r - dz * sin_r) - (sx * 0.5)
                lz = abs(dx * sin_r + dz * cos_r) - (sz * 0.5)
                outside_x = max(lx, 0.0)
                outside_z = max(lz, 0.0)
                signed_dist = math.hypot(outside_x, outside_z) + min(max(lx, lz), 0.0)

            if signed_dist < 0.85:
                raise ValueError(
                    f"Collision overlap detected between static obstacle '{obs['id']}' at ({ox}, {oy}, {oz}) "
                    f"and track waypoint #{wp['index']} at ({wx}, {wy}, {wz}): clearance={signed_dist:.2f} < 0.85"
                )


def main():
    waypoints = compile_track_waypoints(subdivisions_per_segment=8)
    checkpoints = build_checkpoints(waypoints)
    ramps = build_ramps()
    architecture = build_architecture()
    static_obstacles = build_static_obstacles()
    dynamic_props = build_dynamic_props()

    verify_scene_consistency(waypoints, static_obstacles)

    scene_data = {
        "metadata": {
            "title": "Messy Kitchen Racer - 3D Scene & Collision Data",
            "version": "1.0.0",
            "coordinateSystem": "Three.js Y-Up Right-Handed (X: Right, Y: Up, Z: South/Foreground)",
            "counterHeight": COUNTER_Y,
            "floorHeight": FLOOR_Y,
            "totalTrackLength": waypoints[-1]["distanceFromStart"],
            "waypointCount": len(waypoints),
            "checkpointCount": len(checkpoints),
        },
        "startGrid": {
            "position": [-4.0, 9.15, 16.0],
            "forward": [-1.0, 0.0, 0.0],
            "rotationY": -math.pi / 2.0,
            "rowSpacing": 2.2,
            "lateralSpacing": 1.8,
        },
        "architecture": architecture,
        "trackWaypoints": waypoints,
        "checkpoints": checkpoints,
        "ramps": ramps,
        "staticObstacles": static_obstacles,
        "dynamicProps": dynamic_props,
    }

    repo_root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    out_path = os.path.join(repo_root, "src", "assets", "kitchen_scene_data.json")
    os.makedirs(os.path.dirname(out_path), exist_ok=True)
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(scene_data, f, indent=2)

    print(f"[generate_kitchen_scene_data] Successfully generated {out_path}")
    print(f"  - Waypoints: {len(waypoints)} (Track length: {scene_data['metadata']['totalTrackLength']:.1f} units)")
    print(f"  - Checkpoints: {len(checkpoints)}")
    print(f"  - Ramps: {len(ramps)}")
    print(f"  - Static Obstacles: {len(static_obstacles)}")
    print(f"  - Dynamic Props: {len(dynamic_props)}")


if __name__ == "__main__":
    main()
