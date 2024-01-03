import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { GlobalMapComponent } from './components/global-map/global-map.component';
import { TruncatePipe } from './pipes';
import { OptionsModalComponent } from './components/options-modal/options-modal.component';
import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';
import { LinkSettingsComponent } from './components/link-settings/link-settings.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PlotlyModule } from 'angular-plotly.js';
import * as PlotlyJS from 'plotly.js-dist-min';
import { PlotlyGraphicComponent } from './components/plotly-graphic/plotly-graphic.component';
import { LinkFrecuenciesComponent } from './components/link-frecuencies/link-frecuencies.component';
PlotlyModule.plotlyjs = PlotlyJS;

@NgModule({
  declarations: [
    GlobalMapComponent,
    TruncatePipe,
    OptionsModalComponent,
    LinkSettingsComponent,
    PlotlyGraphicComponent,
    LinkFrecuenciesComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    PlotlyModule,
    FormsModule
  ],
  exports: [
    GlobalMapComponent,
    TruncatePipe,
    OptionsModalComponent,
    PlotlyGraphicComponent,
    LinkFrecuenciesComponent
  ],
  providers: [
    ScreenOrientation
  ]
})
export class SharedModule { }
