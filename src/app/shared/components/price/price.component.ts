import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PriceComponent implements OnInit {
  @Input() price: string;
  constructor() { }

  ngOnInit(): void {
    console.log('I am init')
  }

}
