import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'structure',
    pathMatch: 'full',
  },

  { path: 'categories', loadChildren: () => import('./categories/categories.module').then(m => m.CategoriesModule) }, 
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  {path: 'structure',loadChildren: () => import('./structure/structure/structure.module').then(m =>m.StructureModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
