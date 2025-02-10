import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
  imports: [CommonModule]
})
export class ListComponent {

  public heroNames: string[] = ["Spiderman", "Ironman", "Gamora", "Groot", "Deadpool", "Thor"];
  public deletedHeroe?: string = "";

  removeLastHero(): void {
    this.deletedHeroe = this.heroNames.pop();
  }

}
