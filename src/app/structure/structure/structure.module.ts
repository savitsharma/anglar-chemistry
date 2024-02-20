import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StructureComponent } from '../structure.component';

import { StructureRoutingModule } from './structure-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ShowImageComponent } from '../show-image/show-image.component';


@NgModule({
  declarations: [
    StructureComponent,
    ShowImageComponent
  ],
  imports: [
    CommonModule,
    StructureRoutingModule,
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    SharedModule,
  ],
  // exports: [StructureComponent]
})
export class StructureModule { }
