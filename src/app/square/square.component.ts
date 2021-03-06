import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
        <button>{{value}}</button>
  `,
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {

  @Input() value: 'X' | 'O';

  constructor() {

  }

  ngOnInit(): void {
  }

}
