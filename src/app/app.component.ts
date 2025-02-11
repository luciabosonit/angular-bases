import { Component } from '@angular/core';
import { CounterModule } from "./counter/counter.module";
import { HeroModule } from './heroes/heroes.module';
import { DbzModule } from './dbz/dbz.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css',
  imports: [CounterModule, HeroModule, DbzModule]
})
export class AppComponent {
  public title: string = 'Mi primera app de Angular';
}
