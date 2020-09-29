import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
  <p>
    square works!
    {{randomNumber}}
  </p>
  `,
  styles: []
})
export class SquareComponent implements OnInit {


  randomNumber = Math.random();

  constructor() {
    setInterval(() => {
      this.randomNumber = Math.random();
    }, 1000);
  }

  ngOnInit(): void {
  }

}
