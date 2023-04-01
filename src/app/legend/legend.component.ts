import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-legend',
  templateUrl: './legend.component.html',
  styleUrls: ['./legend.component.scss'],
})
export class LegendComponent {
  @Input()
  itemA: boolean = true;
  @Input()
  itemB: boolean = true;
  @Input()
  itemC: boolean = true;
  @Input()
  itemD: boolean = true;
  @Input()
  itemE: boolean = true;
  @Input()
  itemF: boolean = true;
  @Input()
  itemG: boolean = true;
  @Input()
  itemH: boolean = true;

  @Input()
  betResultA: number = 0;
  @Input()
  betResultB: number = 0;
  @Input()
  betResultC: number = 0;
  @Input()
  betResultD: number = 0;
  @Input()
  betResultE: number = 0;
  @Input()
  betResultF: number = 0;
  @Input()
  betResultG: number = 0;
  @Input()
  betResultH: number = 0;
}
