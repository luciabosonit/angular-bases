import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterModule } from './counter/counter.module';
import { HeroModule } from './heroes/heroes.module';
import { DbzModule } from './dbz/dbz.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppComponent,
    CounterModule,
    HeroModule,
    DbzModule
  ],
  providers: [],
  declarations: []
})
export class AppModule { }
