import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NewsactionsModule } from './newsactions/newsactions.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NewsactionsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
