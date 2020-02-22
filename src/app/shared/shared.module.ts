import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriceComponent } from './components/price/price.component';



@NgModule({
  declarations: [PriceComponent],
  imports: [
    CommonModule
  ],
  exports:[ PriceComponent ]
})
export class SharedModule { }
