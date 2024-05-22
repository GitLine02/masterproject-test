import {AfterViewInit, Component, ElementRef, OnDestroy, ViewChild} from '@angular/core';

@Component({
  selector: 'app-graphic-test',
  standalone: true,
  imports: [],
  templateUrl: './graphic-test.component.html',
  styleUrl: './graphic-test.component.css'
})
export class GraphicTestComponent implements AfterViewInit, OnDestroy {
  @ViewChild('canvasContainer') canvasContainer!: ElementRef<HTMLDivElement>;
  @ViewChild('canvas') canvas!: ElementRef<HTMLCanvasElement>;

  private ctx!: CanvasRenderingContext2D | null;
  private image = new Image();
  private touchPoints: { x: number, y: number }[] = [];
  private maxTouches = 3; // Maximale Anzahl der angezeigten Bilder

  ngAfterViewInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.setupCanvas();
    this.addEventListeners();
    this.loadImage();
  }

  ngOnDestroy(): void {
    this.removeEventListeners();
  }

  private setupCanvas(): void {
    const canvas = this.canvas.nativeElement;
    const canvasContainer = this.canvasContainer.nativeElement;

    canvas.width = canvasContainer.clientWidth;
    canvas.height = canvasContainer.clientHeight;
  }

  private loadImage(): void {
    this.image.src = 'assets/NyanCat.png'; // Pfad zu deinem Bild
  }

  private addEventListeners(): void {
    const canvas = this.canvas.nativeElement;

    canvas.addEventListener('touchstart', this.displayImage.bind(this));
  }

  private removeEventListeners(): void {
    const canvas = this.canvas.nativeElement;

    canvas.removeEventListener('touchstart', this.displayImage.bind(this));
  }

  private displayImage(event: TouchEvent): void {
    event.preventDefault();

    const ctx = this.ctx;
    if (ctx && this.image.complete) {
      const touch = event.touches[0];
      const x = touch.clientX - this.canvas.nativeElement.getBoundingClientRect().left;
      const y = touch.clientY - this.canvas.nativeElement.getBoundingClientRect().top;

      // Füge den neuen Touch-Punkt hinzu
      this.touchPoints.push({ x, y });

      // Wenn die maximale Anzahl erreicht ist, entferne den ältesten Punkt
      if (this.touchPoints.length > this.maxTouches) {
        this.touchPoints.shift();
      }

      // Leere das Canvas und zeichne alle verbleibenden Bilder neu
      ctx.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
      for (const point of this.touchPoints) {
        ctx.drawImage(this.image, point.x - this.image.width / 2, point.y - this.image.height / 2);
      }
    }
  }
}
