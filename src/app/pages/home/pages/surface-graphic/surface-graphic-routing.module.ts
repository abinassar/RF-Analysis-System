import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SurfaceGraphicPage } from './surface-graphic.page';

const routes: Routes = [
  {
    path: '',
    component: SurfaceGraphicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SurfaceGraphicPageRoutingModule {}
