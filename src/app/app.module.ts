import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterModule } from './counter/counter.module';
import { HeroModule } from './heroes/heroes.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppComponent,
    CounterModule,
    HeroModule
  ],
  providers: [],
  declarations: []
})
export class AppModule { }
