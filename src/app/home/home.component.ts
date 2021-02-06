import { Component, OnInit } from '@angular/core';
import { Position } from "../shared/position";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dots : Position[] = [];
  temp: Position;

  constructor() {

  }

  ngOnInit(): void {
    for(let i=0; i<1000; i++){
      this.temp = {left: Math.random()*window.innerWidth, top: Math.random()*window.innerHeight}
      this.dots.push(this.temp);
    }
    this.temp = null;
  }
  


  rgb_to_hsl(r, g, b) {
    r /= 255, g /= 255, b /= 255;

    var max = Math.max(r, g, b),
      min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;

    if (max == min) {
      h = s = 0;
    } else {
      var d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
      }
      h /= 6;
    }

    return [h, s, l];
  }



}
