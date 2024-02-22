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
  defaultTraceData: any[] = [];
  defaultData: any[] = [];
  layout: any;
  show3dGraph: boolean = false;

  @Input() inputData;
  @Input() inputLayout;
  @Input() insideComponent: boolean = false;
  @Input() startPoint: GeoPoint;
  @Input() endPoint: GeoPoint;
  @Input() showElevationProfileFilters: boolean = false;
  @Output() showFullScreenGraphic = new EventEmitter<void>();

  constructor(private screenOrientation: ScreenOrientation,
              private locationService: LocationService,
              private alertService: AlertService) { }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    
    if (changes) {

      this.data = changes['inputData'].currentValue;

      if (this.showElevationProfileFilters) {

        this.setElevationProfileFilters(changes);

      }

      this.layout = changes['inputLayout'].currentValue;

    }

  }

  setElevationProfileFilters(changes: SimpleChanges) {

    const defaultData = changes['inputData'].currentValue;
    const defaultTraceData = changes['inputData'].currentValue.filter((data) => data.name !== 'Puntos de elevacion');
    const firstFresnelTraceData = changes['inputData'].currentValue.filter((data) => data.name !== 'Puntos de elevacion');

    // TODO: Improve this buttons
    let filterButtons = [];

    this.defaultTraceData.forEach((layout) => {

      let fresnel60PercentPoints

    })

    this.defaultData = changes['inputData'].currentValue;
    this.defaultTraceData = changes['inputData'].currentValue.filter((data) => data.name !== 'Puntos de elevacion');

  }

  showTrace(traceName: string) {
    let dataFiltered = this.defaultData.filter((trace) => trace.name === traceName || trace.name === 'Puntos de elevacion');
    this.data = dataFiltered;
  }

  showAllTraces() {
    this.data = this.defaultData.slice();
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
