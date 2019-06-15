import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule, AppRoutedComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './shared/shared.module';
import { AddDonateComponent } from './donate/add-donate/add-donate.component';

@NgModule({
  declarations: [
    AppComponent,
    AppRoutedComponents,
    AddDonateComponent
  ], 
  imports: [
    BrowserModule,
    FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
  SharedModule,
  AppRoutingModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AddDonateComponent]
})
export class AppModule { }
