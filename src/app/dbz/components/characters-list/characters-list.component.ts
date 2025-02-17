import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dbz-character-list',
  templateUrl: `./characters-list.component.html`,
  styleUrl: './characters-list.component.css',
  imports: [CommonModule]
})

export class CharacterListComponent {

  @Input()
  public charactersList: Character[] = [

      {
        name: "Trunk",
        power: 10
      }

    ];

  @Output()

    public onDelete: EventEmitter<string> = new EventEmitter();

    onDeleteCharacter(id?: string): void {

      if (!id) return;

      console.log(id);

      this.onDelete.emit(id);

    }

 }
