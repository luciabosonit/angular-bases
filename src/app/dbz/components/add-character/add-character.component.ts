import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Character } from '../../interfaces/character.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css',
  imports: [CommonModule, FormsModule]
})

export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0
  }

  emitCharacter (): void {
    console.log(this.character);

    if (this.character.name.length === 0){ return; }

    this.onNewCharacter.emit(this.character);

    this.character = {name: '', power: 0};

  }

}
