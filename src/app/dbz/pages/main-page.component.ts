import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CharacterListComponent } from '../components/characters-list/characters-list.component';
import { AddCharacterComponent } from '../components/add-character/add-character.component';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  imports: [CommonModule, CharacterListComponent, AddCharacterComponent]
})

export class MainPageComponent {}
