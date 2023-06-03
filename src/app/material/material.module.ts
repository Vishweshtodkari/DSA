import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';


const componentModule = [
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule
];

@NgModule({
  imports: [
    componentModule
  ],
  exports:[
    componentModule
  ]
})
export class MaterialModule { }
