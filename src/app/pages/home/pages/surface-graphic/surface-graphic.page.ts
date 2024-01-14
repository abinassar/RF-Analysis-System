import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GeoPoint } from '@shared/models';
import { LocationService } from '@shared/services';
import { PlotlyService } from 'angular-plotly.js';
import * as PlotlyJS from 'plotly.js-dist-min';

@Component({
  selector: 'app-surface-graphic',
  templateUrl: './surface-graphic.page.html',
  styleUrls: ['./surface-graphic.page.scss'],
})
export class SurfaceGraphicPage implements OnInit {

  @ViewChild('plotContainer') plotContainer: ElementRef;
  public plotData: any[];

  data = [];

  layout = {
    margin: { t: 0 },
    scene: {
      camera: {
        eye: { x: 1.25, y: 1.25, z: 1.25 },
      },
    },
  };
  showSurface: boolean = false;

  constructor(private plotlyService: PlotlyService,
              private locationService: LocationService) { }

  ngOnInit() {

    let startPoint: GeoPoint = {
        "lat": 2.7791,
        "lng": -65.8955
    }
    
    let endPoint: GeoPoint = {
        "lat": 3.7285,
        "lng": -64.6766
    }

    this.locationService
        .getSurfaceData(startPoint, endPoint)
        .subscribe((response) => {

          let surfaceArrays = [];

          response.surfaceCoordinates.forEach((surfaceData) => {

            let surfaceZPoints = [];

            surfaceData.surfacePoints.coordinates.forEach((pointCoord) => {
              
              surfaceZPoints.push(pointCoord.z)

            });

            surfaceArrays.push(surfaceZPoints)

          });
      
          this.showSurface = true;
          surfaceArrays.push({type: 'scatter3d'})
          console.log("surfaceArrays ", surfaceArrays)

          PlotlyJS.newPlot('chart', [{
            z: surfaceArrays,
            type: 'surface'
          }]);
      
      
        });

  }

  getData() {
      var arr = [];
      for(let i=0;i<40;i++)
          arr.push(Array(40).fill(undefined).map(() => Math.random() * 256))
      //console.log(arr);
      arr.push({type: 'scatter3d'});
      console.log("arr ", arr)
      return arr;
    }

  testButton () {

      PlotlyJS.newPlot('chart', [{
        z: this.getData(),
        type: 'surface'
      }]);
    }

    // this.data = [
    //   {
    //     x: xCoordinates,
    //     y: yCoordinates,
    //     z: zCoordinates,
    //     type: 'surface',
    //     mode: 'markers',
    //     marker: {
    //       size: 12,
    //       color: 'rgb(140, 140, 190)',
    //     },
    //   },
    // ];
    // const plotConfig = {
    //   responsive: true,
    // };      

}
