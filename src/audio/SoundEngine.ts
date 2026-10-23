export class SoundEngine {
  private ctx: AudioContext | null = null;
  private oscSaw: OscillatorNode | null = null;
  private oscSub: OscillatorNode | null = null;
  private engineFilter: BiquadFilterNode | null = null;
  private engineGain: GainNode | null = null;

  private screechGain: GainNode | null = null;
  public isMuted = false;
  private isInitialized = false;

  public initOnUserGesture(): void {
    if (this.isInitialized) {
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume().catch(() => {});
      }
      return;
    }

    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();

      // F1 V8/V10 Synthesizer
      this.oscSaw = this.ctx.createOscillator();
      this.oscSaw.type = 'sawtooth';
      this.oscSaw.frequency.value = 95;

      this.oscSub = this.ctx.createOscillator();
      this.oscSub.type = 'triangle';
      this.oscSub.frequency.value = 47.5;

      this.engineFilter = this.ctx.createBiquadFilter();
      this.engineFilter.type = 'bandpass';
      this.engineFilter.frequency.value = 380;
      this.engineFilter.Q.value = 2.4;

      this.engineGain = this.ctx.createGain();
      this.engineGain.gain.value = 0.0;

      this.oscSaw.connect(this.engineFilter);
      this.oscSub.connect(this.engineFilter);
      this.engineFilter.connect(this.engineGain);
      this.engineGain.connect(this.ctx.destination);

      this.oscSaw.start();
      this.oscSub.start();

      // Drift Tire Screech White Noise Generator
      const bufferSize = this.ctx.sampleRate * 1.5;
      const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }

      const whiteNoise = this.ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      whiteNoise.loop = true;

      const screechFilter = this.ctx.createBiquadFilter();
      screechFilter.type = 'bandpass';
      screechFilter.frequency.value = 1650;
      screechFilter.Q.value = 6.5;

      this.screechGain = this.ctx.createGain();
      this.screechGain.gain.value = 0.0;

      whiteNoise.connect(screechFilter);
      screechFilter.connect(this.screechGain);
      this.screechGain.connect(this.ctx.destination);
      whiteNoise.start();

      this.isInitialized = true;
    } catch {
      // Ignore if Web Audio API is blocked
    }
  }

  public toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    if (this.isMuted && this.engineGain && this.screechGain && this.ctx) {
      this.engineGain.gain.setTargetAtTime(0, this.ctx.currentTime, 0.04);
      this.screechGain.gain.setTargetAtTime(0, this.ctx.currentTime, 0.04);
    }
    return this.isMuted;
  }

  public updateEngine(speed: number, maxSpeed: number, isDrifting: boolean, isBoosting: boolean): void {
    if (!this.isInitialized || !this.ctx || !this.oscSaw || !this.oscSub || !this.engineFilter || !this.engineGain || !this.screechGain) {
      return;
    }
    if (this.isMuted) {
      return;
    }

    const now = this.ctx.currentTime;
    const normSpeed = Math.min(1.25, Math.abs(speed) / maxSpeed);
    const gearMod = (normSpeed * 6) % 1;
    const baseFreq = 75 + normSpeed * 185 + gearMod * 55 + (isBoosting ? 65 : 0);

    this.oscSaw.frequency.setTargetAtTime(baseFreq, now, 0.04);
    this.oscSub.frequency.setTargetAtTime(baseFreq * 0.5, now, 0.04);
    this.engineFilter.frequency.setTargetAtTime(280 + normSpeed * 1400, now, 0.05);

    const targetVol = 0.035 + Math.min(0.085, normSpeed * 0.075);
    this.engineGain.gain.setTargetAtTime(targetVol, now, 0.05);

    const screechVol = isDrifting && Math.abs(speed) > 6 ? 0.045 : 0.0;
    this.screechGain.gain.setTargetAtTime(screechVol, now, 0.05);
  }

  public playBoostWhoosh(): void {
    if (!this.isInitialized || !this.ctx || this.isMuted) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(140, now);
    osc.frequency.exponentialRampToValueAtTime(520, now + 0.35);

    gain.gain.setValueAtTime(0.11, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.42);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.43);
  }

  public playCollisionClatter(isMetallic = false): void {
    if (!this.isInitialized || !this.ctx || this.isMuted) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = isMetallic ? 'triangle' : 'sine';
    const startFreq = isMetallic ? 780 + Math.random() * 350 : 180 + Math.random() * 90;
    osc.frequency.setValueAtTime(startFreq, now);
    osc.frequency.exponentialRampToValueAtTime(55, now + 0.16);

    gain.gain.setValueAtTime(0.12, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.17);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.18);
  }

  public playChime(isLapComplete = false): void {
    if (!this.isInitialized || !this.ctx || this.isMuted) return;
    const now = this.ctx.currentTime;
    const notes = isLapComplete ? [523.25, 659.25, 783.99, 1046.5] : [587.33, 880];
    notes.forEach((freq, idx) => {
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + idx * 0.08);
      gain.gain.setValueAtTime(0.09, now + idx * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.22);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now + idx * 0.08);
      osc.stop(now + idx * 0.08 + 0.24);
    });
  }
}
