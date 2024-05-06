import {Component, Input, input} from '@angular/core';

@Component({
  selector: 'app-touch-card',
  standalone: true,
  imports: [],
  templateUrl: './touch-card.component.html',
  styleUrl: './touch-card.component.css'
})
export class TouchCardComponent {
  @Input()
  touch?:Touch
}
