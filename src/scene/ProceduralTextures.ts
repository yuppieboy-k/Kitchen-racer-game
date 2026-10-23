import * as THREE from 'three';

export class ProceduralTextures {
  /**
   * Generates the colorful 1x-12x Multiplication Table Poster seen on the right foreground wall pillar in the photo.
   */
  public static createMultiplicationChartTexture(): THREE.CanvasTexture {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 640;
    const ctx = canvas.getContext('2d')!;

    // White poster board background
    ctx.fillStyle = '#fcfbf7';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Header banner
    ctx.fillStyle = '#1e293b';
    ctx.fillRect(20, 18, 472, 48);
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 26px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('MULTIPLICATION TABLE 1x - 12x', 256, 50);

    const colors = [
      '#ef5350', '#ec407a', '#ab47bc', '#7e57c2',
      '#5c6bc0', '#42a5f5', '#26c6da', '#26a69a',
      '#66bb6a', '#9ccc65', '#ffca28', '#ffa726'
    ];

    const cols = 3;
    const rows = 4;
    const padX = 22;
    const padY = 80;
    const cellW = (canvas.width - padX * 2 - 16) / cols;
    const cellH = (canvas.height - padY - 24) / rows;

    for (let i = 0; i < 12; i++) {
      const c = i % cols;
      const r = Math.floor(i / cols);
      const x = padX + c * (cellW + 8);
      const y = padY + r * (cellH + 6);

      // Colored box
      ctx.fillStyle = colors[i];
      ctx.fillRect(x, y, cellW, cellH - 4);

      ctx.fillStyle = 'rgba(255,255,255,0.92)';
      ctx.fillRect(x + 4, y + 22, cellW - 8, cellH - 30);

      // Title
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 14px monospace';
      ctx.textAlign = 'center';
      ctx.fillText(`${i + 1} TIMES`, x + cellW / 2, y + 16);

      // Multiplication lines
      ctx.fillStyle = '#1e293b';
      ctx.font = 'bold 9px monospace';
      for (let m = 1; m <= 8; m++) {
        ctx.fillText(`${i + 1} x ${m} = ${(i + 1) * m}`, x + cellW / 2, y + 34 + (m - 1) * 11);
      }
    }

    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }

  /**
   * Generates the Red & Gold Hanging Wall Calendar seen on the dark walnut pantry enclosure.
   */
  public static createRedCalendarTexture(): THREE.CanvasTexture {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 384;
    const ctx = canvas.getContext('2d')!;

    // Crimson red backing
    ctx.fillStyle = '#b71c1c';
    ctx.fillRect(0, 0, 256, 384);

    // Gold decorative border
    ctx.strokeStyle = '#ffd54f';
    ctx.lineWidth = 6;
    ctx.strokeRect(10, 10, 236, 364);

    // Top gold medallion
    ctx.fillStyle = '#ffd54f';
    ctx.beginPath();
    ctx.arc(128, 76, 40, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#b71c1c';
    ctx.font = 'bold 34px serif';
    ctx.textAlign = 'center';
    ctx.fillText('福', 128, 88);

    // White calendar tear-off pad
    ctx.fillStyle = '#fffdf9';
    ctx.fillRect(24, 145, 208, 210);

    ctx.fillStyle = '#c62828';
    ctx.fillRect(24, 145, 208, 36);
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 18px sans-serif';
    ctx.fillText('OCTOBER 2026', 128, 169);

    // Grid of days
    ctx.fillStyle = '#334155';
    ctx.font = 'bold 13px monospace';
    for (let r = 0; r < 5; r++) {
      for (let c = 0; c < 7; c++) {
        const day = r * 7 + c + 1;
        if (day <= 31) {
          ctx.fillStyle = c === 0 || c === 6 ? '#d32f2f' : '#1e293b';
          ctx.fillText(String(day), 42 + c * 28, 208 + r * 30);
        }
      }
    }

    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }

  /**
   * Generates the Smart Kitchen Display screen UI on the left counter corner.
   */
  public static createSmartDisplayTexture(): THREE.CanvasTexture {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 192;
    const ctx = canvas.getContext('2d')!;

    const grad = ctx.createLinearGradient(0, 0, 256, 192);
    grad.addColorStop(0, '#0f172a');
    grad.addColorStop(1, '#1e3a8a');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 256, 192);

    ctx.fillStyle = '#38bdf8';
    ctx.font = 'bold 16px sans-serif';
    ctx.fillText('KITCHEN HUB • 22°C', 20, 34);

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 42px monospace';
    ctx.fillText('09:42', 20, 88);

    ctx.fillStyle = '#facc15';
    ctx.font = 'bold 14px sans-serif';
    ctx.fillText('⚡ F1 COUNTERTOP GP LIVE', 20, 128);

    ctx.fillStyle = 'rgba(255,255,255,0.15)';
    ctx.fillRect(20, 144, 216, 28);
    ctx.fillStyle = '#4ade80';
    ctx.font = '12px monospace';
    ctx.fillText('TRACK TEMP: OPTIMAL', 30, 162);

    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }

  /**
   * Generates a high-contrast checkered pattern for the Start/Finish line and gantry.
   */
  public static createCheckeredTexture(squaresX = 12, squaresY = 2): THREE.CanvasTexture {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 128;
    const ctx = canvas.getContext('2d')!;

    const sw = canvas.width / squaresX;
    const sh = canvas.height / squaresY;

    for (let y = 0; y < squaresY; y++) {
      for (let x = 0; x < squaresX; x++) {
        ctx.fillStyle = (x + y) % 2 === 0 ? '#ffffff' : '#11151c';
        ctx.fillRect(x * sw, y * sh, sw, sh);
      }
    }

    const tex = new THREE.CanvasTexture(canvas);
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }

  /**
   * Generates glowing yellow/cyan boost chevron arrows for jump ramps.
   */
  public static createBoostChevronTexture(): THREE.CanvasTexture {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext('2d')!;

    ctx.fillStyle = '#1e293b';
    ctx.fillRect(0, 0, 256, 256);

    // Side safety stripes
    ctx.fillStyle = '#f59e0b';
    ctx.fillRect(0, 0, 18, 256);
    ctx.fillRect(238, 0, 18, 256);

    // Glowing chevrons pointing forward (-Y in UV)
    const colors = ['#00e5ff', '#ffd13b', '#ff2a3c'];
    for (let i = 0; i < 3; i++) {
      const yOffset = 35 + i * 75;
      ctx.strokeStyle = colors[i % colors.length];
      ctx.lineWidth = 18;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.beginPath();
      ctx.moveTo(52, yOffset + 45);
      ctx.lineTo(128, yOffset);
      ctx.lineTo(204, yOffset + 45);
      ctx.stroke();
    }

    const tex = new THREE.CanvasTexture(canvas);
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }
}
