import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
<button>{{value}}</button>
  `,
  styles: []
})
export class SquareComponent implements OnInit {

  @Input() value: 'X' | 'O';

  constructor() {

  }

  ngOnInit(): void {
  }

}
