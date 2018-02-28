import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'panel-02',
  templateUrl: './panel-02.component.html'
})
export class Panel02Component implements OnInit {

  @Input() public avatar: string;

  @Input() public notAvailable: boolean;

  @Input() public name: string;

  @Input() public job: string;

  @Input() public quote: string;

  constructor() { }

  ngOnInit() {
  }

}
