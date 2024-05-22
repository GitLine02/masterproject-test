import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {BehaviorSubject} from "rxjs";
import {AsyncPipe, NgForOf} from "@angular/common";
import {TouchCardComponent} from "./touch-card/touch-card.component";
import {GraphicTestComponent} from "./graphic-test/graphic-test.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, AsyncPipe, TouchCardComponent, GraphicTestComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Masterproject';

  touches: BehaviorSubject<Touch[]> = new BehaviorSubject<Touch[]>([])


  handleTouch($event: TouchEvent) {
    const mappedTouches: Touch[] =[]
    for (let i = 0; i < $event.touches.length; i++) {
      mappedTouches.push($event.touches.item(i)!)
    }
    this.touches.next(mappedTouches)
  }
}
