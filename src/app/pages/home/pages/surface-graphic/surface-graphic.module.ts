import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SurfaceGraphicPageRoutingModule } from './surface-graphic-routing.module';

import { SurfaceGraphicPage } from './surface-graphic.page';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SurfaceGraphicPageRoutingModule,
    SharedModule
  ],
  declarations: [SurfaceGraphicPage]
})
export class SurfaceGraphicPageModule {}
