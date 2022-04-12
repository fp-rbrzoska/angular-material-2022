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
    TestExamplesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialSharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
