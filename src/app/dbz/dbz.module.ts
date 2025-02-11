import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MainPageComponent } from "./pages/main-page.component";

 @NgModule({
   imports: [
     CommonModule,
     MainPageComponent
   ],
   exports: [
    CommonModule,
    MainPageComponent
   ]
 })

 export class DbzModule {}
