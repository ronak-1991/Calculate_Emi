import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';

import { CoreRoutingModule } from './core-routing.module';
import { ContactComponent } from './contact/contact.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    ContactComponent,
    CalculatorComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    FormsModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CoreModule { }
