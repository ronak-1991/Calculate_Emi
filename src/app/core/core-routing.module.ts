import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"Calculator",component:CalculatorComponent},
  {path:"Contact_us",component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
