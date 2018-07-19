import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { NewComponent } from './new/new.component';
import { DeleteComponent } from './delete/delete.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'products/new', component: NewComponent},
  {path: 'products/edit/:id', component: EditComponent},
  {path: 'products/delete/:id', component: DeleteComponent},
  {path: 'edit', pathMatch: 'full', redirectTo:'products'},
  {path: 'products', component: ListComponent},
  {path:'home', pathMatch: 'full', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
