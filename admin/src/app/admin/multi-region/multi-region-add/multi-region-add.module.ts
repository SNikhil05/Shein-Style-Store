import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MultiRegionAddPage } from './multi-region-add.page';
import { GoogleMapsModule } from '@angular/google-maps'

const routes: Routes = [
  {
    path: '',
    component: MultiRegionAddPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    GoogleMapsModule
  ],
  declarations: [MultiRegionAddPage]
})
export class MultiRegionAddPageModule {}
