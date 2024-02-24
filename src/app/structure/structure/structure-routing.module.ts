import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowImageComponent } from '../show-image/show-image.component';
import { StructureComponent } from '../structure.component';

const routes: Routes = [
  {path:'structurecompo', component:StructureComponent},
  {path:'', component:ShowImageComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StructureRoutingModule { }
