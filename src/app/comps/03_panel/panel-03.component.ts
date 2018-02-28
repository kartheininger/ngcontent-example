import {Component, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'panel-03',
  templateUrl: './panel-03.component.html'
})
export class Panel03Component implements OnInit {

  @Input() public name: string;

  @Input() public footer: string;

  constructor() { }

  ngOnInit() {
  }
}
