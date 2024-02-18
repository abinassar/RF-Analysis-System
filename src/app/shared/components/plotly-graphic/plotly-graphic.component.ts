import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';
import { GeoPoint } from '@shared/models';
import { AlertService, LocationService } from '@shared/services';
import * as PlotlyJS from 'plotly.js-dist-min';

@Component({
  selector: 'app-plotly-graphic',
  templateUrl: './plotly-graphic.component.html',
  styleUrls: ['./plotly-graphic.component.scss'],
})
export class PlotlyGraphicComponent implements OnInit, OnChanges {

  data: any[];
  layout: any;
  show3dGraph: boolean = false;

  @Input() inputData;
  @Input() inputLayout;
  @Input() insideComponent: boolean = false;
  @Input() startPoint: GeoPoint;
  @Input() endPoint: GeoPoint;
  @Output() showFullScreenGraphic = new EventEmitter<void>();

  constructor(private screenOrientation: ScreenOrientation,
              private locationService: LocationService,
              private alertService: AlertService) { }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    
    if (changes) {

      this.data = changes['inputData'].currentValue;
      this.layout = changes['inputLayout'].currentValue;

      console.log("this.data ", this.data)
      
    }

  }

  deleteTrace() {
    this.data.pop();
  }

  landscapeOrientation() {

    if (this.insideComponent) {

      this.showFullScreenGraphic.emit();
      
    } else {

      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);

    }

  }

  portraitOrientation() {
    if (!this.insideComponent) {
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    }
  }

  generate2dChart() {
    this.show3dGraph = false;
  }

  generate3dChart() {

    this.alertService.showLoading('Generando gráfico 3D...');

    // let startPoint: GeoPoint = {
    //     "lat": 2.7791,
    //     "lng": -65.8955
    // }
    
    // let endPoint: GeoPoint = {
    //     "lat": 3.7285,
    //     "lng": -64.6766
    // }

    this.show3dGraph = true;

    this.locationService
        .getSurfaceData(this.startPoint, this.endPoint)
        .subscribe((response) => {

          let surfaceArrays = [];

          response.surfaceCoordinates.forEach((surfaceData) => {

            let surfaceZPoints = [];

            surfaceData.surfacePoints.coordinates.forEach((pointCoord) => {
              
              surfaceZPoints.push(pointCoord.z)

            });

            surfaceArrays.push(surfaceZPoints)

          });
      
          surfaceArrays.push({type: 'scatter3d'})
          console.log("surfaceArrays ", surfaceArrays)

          PlotlyJS.newPlot('3d-chart', [{
            z: surfaceArrays,
            type: 'surface'
          }]);   
          
          this.alertService.closeLoading();
      
        }, (error) => {
          this.show3dGraph = false;
          this.alertService.closeLoading();
          this.alertService.presentAlert('Error', 'Error generando grafico 3D')
        });

  }
  
}
