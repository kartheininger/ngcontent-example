import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'panel-04',
  templateUrl: './panel-04.component.html'
})
export class Panel04Component implements OnInit {

  @Input() public name: string;

  constructor() { }

  ngOnInit() {
  }
}

@Component({
  selector: 'panel-05',
  templateUrl: './panel-05.component.html'
})
export class Panel05Component implements OnInit {

  @Input() public name: string;

  constructor() { }

  ngOnInit() {
  }
}
