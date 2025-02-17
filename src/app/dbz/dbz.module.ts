import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MainPageComponent } from "./pages/main-page.component";
import { FormsModule } from "@angular/forms";

 @NgModule({
   imports: [
     CommonModule,
     MainPageComponent,
     FormsModule
   ],
   exports: [
    MainPageComponent
   ]
 })

 export class DbzModule {}
