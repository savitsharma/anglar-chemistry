import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import { MainCategoriesComponent } from './main-categories/main-categories.component';
import { SubCategoriesComponent } from './sub-categories/sub-categories.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import {DialogModule} from '@angular/cdk/dialog';
// import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap/modal/modal.module';
// import { MatDialog } from '@angular/material/dialog';

// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    CategoriesComponent,
    MainCategoriesComponent,
    SubCategoriesComponent,
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    SharedModule,
    DialogModule,
    // NgbModalModule,
    // MatDialog,
    // NgbModule,
  ]
})
export class CategoriesModule { }
