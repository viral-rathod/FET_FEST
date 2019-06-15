import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutedComponents, AdminRoutingModule } from './admin.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AdminRoutedComponents],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule,
  ]
})
export class AdminModule { }
