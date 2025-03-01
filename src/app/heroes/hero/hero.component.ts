import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
  imports: [CommonModule]
})
export class HeroComponent {

  public name: string = "ironman";
  public age: number = 45;

  get capitalizedName (): string {
    return this.name.toUpperCase();
  }

  getHeroDescription (): string {
    return `${ this.name } - ${ this.age }`;
  }

  changeName (): void {

    this.name = "Spiderman";

  }

  changeAge (): void {

    this.age = 17;

  }

  resetForm (): void {

    this.name = "ironman";
    this.age = 45;

  }

}
