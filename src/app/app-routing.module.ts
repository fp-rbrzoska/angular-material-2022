import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { OtherComponent } from './other/other.component';
import { TableAComponent } from './table-a/table-a.component';
import { TableBComponent } from './table-b/table-b.component';
import { TableComponent } from './table/table.component';
import { TestExamplesComponent } from './test-examples/test-examples.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: 'form', component: FormComponent},
  { path: 'table', component: TableComponent},
  { path: 'table/a', component: TableAComponent},
  { path: 'table/b', component: TableBComponent},
  { path: 'other', component: OtherComponent},
  { path: 'examples', component: TestExamplesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
