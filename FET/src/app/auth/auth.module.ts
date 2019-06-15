import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthRoutedComponents, AuthRoutingModule } from './auth.routing';

@NgModule({
  declarations: [AuthRoutedComponents],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule, ReactiveFormsModule,
  ]
})
export class AuthModule { }
