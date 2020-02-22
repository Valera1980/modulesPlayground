import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './components/news/news.component';
import { ActionsComponent } from './components/actions/actions.component';
import { NewActionsRoutingModule } from './route';



@NgModule({
  declarations: [NewsComponent, ActionsComponent],
  imports: [
    CommonModule,
    SharedModule,
    NewActionsRoutingModule
  ]
})
export class NewsactionsModule { }
