import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'panel-01',
  templateUrl: './panel-01.component.html'
})
export class Panel01Component implements OnInit {

  @Input() public avatar: string;

  @Input() public notAvailable: boolean;

  @Input() public name: string;

  @Input() public job: string;

  @Input() public quote: string;

  constructor() { }

  ngOnInit() {
  }

}
