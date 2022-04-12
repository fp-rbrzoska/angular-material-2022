import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';
import { TableAComponent } from './table-a/table-a.component';
import { TableBComponent } from './table-b/table-b.component';
import { NavigationComponent } from './navigation/navigation.component';
import { OtherComponent } from './other/other.component';
import { MaterialSharedModule } from './material-shared/material-shared.module';
import { TestExamplesComponent } from './test-examples/test-examples.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialNavComponent } from './material-nav/material-nav.component';
import { AddressFormComponent } from './address-form/address-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TableComponent,
    FormComponent,
    TableAComponent,
    TableBComponent,
    NavigationComponent,
    OtherComponent,
    TestExamplesComponent,
    MaterialNavComponent,
    AddressFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialSharedModule,
    BrowserAnimationsModule,

    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
