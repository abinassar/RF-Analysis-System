import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';
import { LoadingController, ModalController } from '@ionic/angular';
import { Frecuency, GeoPoint, LinkSettings, defaultLinkSettings, defaultPoints, frecuenciesLicensed, frecuencyUnit } from '@shared/models';
import { AlertService, LocationService, SettingsService } from '@shared/services';
import { HomeService } from 'src/app/pages/home/home.service';
import jwt_decode from 'jwt-decode';
import { LinkSettingsComponent } from '@shared/components/link-settings/link-settings.component';

@Component({
  selector: 'app-atenuation-graph',
  templateUrl: './atenuation-graph.component.html',
  styleUrls: ['./atenuation-graph.component.scss'],
})
export class AtenuationGraphComponent {

  atenuationData: any;
  atenuationDataX: number[] = [];
  atenuationDataY: number[] = [];
  atenuationGraph: boolean = false;
  showMap: boolean = false;
  frecuenciesUnits: frecuencyUnit[] = [
    frecuencyUnit.HZ,
    frecuencyUnit.MHZ,
    frecuencyUnit.GHZ
  ];
  atenuationForm: FormGroup;
  atmosphericForm: FormGroup;
  showForm: boolean = false;
  atenuationByFrecuency: number = 0;
  P1: GeoPoint;
  P2: GeoPoint;
  modalSelectedFrecuency: Frecuency = {
    frecuencyTitle: 'No seleccionada',
    frecuencyValue: 0,
    bandWidth: ''
  };
  selectedFrecuency: string[] = [];
  frecuencies: Frecuency[] = frecuenciesLicensed;

  constructor(private locationService: LocationService,
              private loadingCtrl: LoadingController,
              public homeService: HomeService,
              private alertService: AlertService,
              public settingsService: SettingsService,
              private formBuilder: FormBuilder,
              private screenOrientation: ScreenOrientation,
              private router: Router,
              private modalController: ModalController) { }

  async ionViewDidEnter() {

    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);

    // await this.homeService.getUserLinks();

    this.alertService.showLoading("Obteniendo datos del enlace...");
    
    this.settingsService
        .getUserLinks(this.homeService.getUserId)
        .then((response: any) => {

          const linksSettings: LinkSettings[] = response.linkSettings;

          this.alertService.closeLoading();

          if (JSON.stringify(this.settingsService.linkSettings) === JSON.stringify(defaultLinkSettings)) {

            this.settingsService.linkSettingsList = linksSettings;
            
            let settingSelectedIndex = linksSettings.findIndex((linkSetting) => {
              return linkSetting.selected === true
            });
  
            
            this.settingsService.linkSettings = linksSettings[settingSelectedIndex];

          }
          this.P1 = {...this.settingsService.linkSettings.P1};
          this.P2 = {...this.settingsService.linkSettings.P2};
          
          this.getLocationData();
          this.showMap = true;     
          this.setForms();   


        })
        .catch((error) => {
          
          this.settingsService.linkSettings = defaultLinkSettings;
          this.alertService.closeLoading();
          this.P1 = {...this.settingsService.linkSettings.P1};
          this.P2 = {...this.settingsService.linkSettings.P2};
          
          this.getLocationData();
          this.showMap = true;     
          this.setForms();   

        });  

  }

  frecuencySelectionChanged(frecuency: string[]) {
    this.selectedFrecuency = frecuency;
    this.modalSelectedFrecuency = this.formatData(this.selectedFrecuency);
    this.atenuationForm.get("frecuency").setValue(this.modalSelectedFrecuency.frecuencyValue);
  }

  private formatData(data: string[]): Frecuency {
    if (data.length === 1) {
      const frecuency = this.frecuencies.find(frecuency => frecuency.frecuencyTitle === data[0])
      return frecuency;
    } else {
      return null
    }
  
  }

  setForms() {

    this.atenuationForm = this.formBuilder.group({
      frecuency: this.formBuilder.control(this.settingsService.linkSettings.antennaSelected.frecuency === 0 ? null : this.settingsService.linkSettings.antennaSelected.frecuency, Validators.required),
      frecuencyUnit: this.formBuilder.control(frecuencyUnit.GHZ, Validators.required),
    });

    this.atmosphericForm = this.formBuilder.group({
      atmosphericPressure: this.formBuilder.control(this.settingsService.linkSettings.atmosphericPressure === 0 ? null : this.settingsService.linkSettings.atmosphericPressure, Validators.required),
      temperature: this.formBuilder.control(this.settingsService.linkSettings.temperature === 0 ? null : this.settingsService.linkSettings.temperature, Validators.required)
    });

    this.showForm = true;

  }

  showFullScreenMap() {
    this.showMap = false;
    setTimeout(() => {
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
      this.router.navigate([`/home/map`]);
    }, 100);
  }

  async changeSelectedLink() {
    const modal = await this.modalController.create({
      component: LinkSettingsComponent,
      cssClass: 'my-custom-class',
      componentProps: {
        linkSettings: this.settingsService.linkSettings,
        linkSettingsList: this.settingsService.linkSettingsList
      }
    });

    modal.onDidDismiss().then((result) => {
      if (result.role !== 'cancel') {
        this.settingsService.linkSettings = result.data;
        this.homeService.getUserLinks();
        this.homeService.refreshMap.next();
      }
    });

    await modal.present();
  }

  saveLinkSettings() {

    if (this.atmosphericForm.valid) {

      this.alertService.showLoading("Guardando datos del enlace...")
      
      const linkSettings: LinkSettings = {
        P1: this.settingsService.linkSettings.P1,
        P2: this.settingsService.linkSettings.P2,
        antennaOneHeight: this.settingsService.linkSettings.antennaOneHeight,
        antennaTwoHeight: this.settingsService.linkSettings.antennaTwoHeight,
        antennaSelected: this.settingsService.linkSettings.antennaSelected,
        atmosphericPressure: this.atmosphericForm.get("atmosphericPressure").value,
        temperature: this.atmosphericForm.get("temperature").value,
        waterDensity: this.settingsService.linkSettings.waterDensity,
        linkName: this.settingsService.linkSettings.linkName,
        selected: true
      }

      const linksList: LinkSettings[] = this.settingsService.linkSettingsList.slice();
      let linkIndex = linksList.findIndex((link) => {
        return link.linkName === linkSettings.linkName
      });
      linksList[linkIndex] = linkSettings;

      this.settingsService
          .SetUserLinkSettingsData(this.homeService.getUserId, linksList)
          .subscribe((response) => {

            this.alertService.closeLoading();
            this.alertService.presentToast("bottom","Configuracion guardada!");

          },
          (error) => {
            this.alertService.closeLoading();
            this.alertService.presentAlert("Hubo un problema guardando la configuracion",
                                           "Por favor, intenta mas tarde")
          });

    } else {

      this.atmosphericForm.markAllAsTouched();
      this.alertService
          .presentAlert("Salvar configuración", 
                        "Por favor completa los datos de temperature y presión para poder guardar los datos del enlace");

    }

  }

  showForms() {
    console.log("atmosphericForm ", this.atmosphericForm)
    console.log("atenuationForm ", this.atenuationForm)
  }

  // Convert the frecuency selected to GHZ unity

  calcFrecuency(frecuency: number, unit: frecuencyUnit): number {

    let frecuencyResult = frecuency;

    if (unit === frecuencyUnit.MHZ) {
      frecuencyResult = frecuencyResult / 1000;
    } else if (unit === frecuencyUnit.HZ) {
      frecuencyResult = frecuencyResult / 1000000000;
    }

    return frecuencyResult;

  }

  getAtenuation() {

    if (this.atenuationForm.valid
        && this.atmosphericForm.valid) {

      let frecuency = this.calcFrecuency((this.atenuationForm.get("frecuency").value/1000), 
                                         this.atenuationForm.get("frecuencyUnit").value);
      
      this.locationService
          .getSpecificAtenuation(this.settingsService.atmosphericPressure, 
                                 this.settingsService.temperature,
                                 frecuency)
          .subscribe((response) => {
            this.atenuationByFrecuency = response.atenuationValue;
          })

    } else {
      this.atmosphericForm.markAllAsTouched();
      this.atenuationForm.markAllAsTouched();
    }
  }

  async getLocationData() {

    if (this.settingsService.linkSettings.P1 !== defaultPoints) {

      this.generateAtenuationGraph();

    } else {

      this.atenuationGraph = false;

      this.alertService
          .presentAlert("Gráfica de atenuación", 
                        "Por favor selecciona al menos un punto en el mapa para mostrar la gráfica");

    }

  }

  async generateAtenuationGraph() {

    this.P1 = {...this.settingsService.linkSettings.P1};
    this.P2 = {...this.settingsService.linkSettings.P2};

    if (this.settingsService.linkSettings.P1.lat === 0
        && this.settingsService.linkSettings.P2.lat === 0) {
      
    } else {

      const loadingAtmosData = await this.loadingCtrl.create({
        message: 'Obteniendo datos atmosféricos...'
      });

      await loadingAtmosData.present();

      this.locationService
          .getLocationData(this.settingsService.linkSettings.P1.lat.toString(),
                            this.settingsService.linkSettings.P1.lng.toString())
          .subscribe((response) => {

            console.log("weather response ", JSON.stringify(response))

            // Convert temperature from kelvin unity to centigrade unity

            this.settingsService.locationName = response.name;
            this.settingsService.temperature = Number((response.main.temp - 273.15).toString().substring(0, 10));
            this.settingsService.atmosphericPressure = response.main.pressure;
            this.atmosphericForm.get("temperature").setValue(this.settingsService.temperature);
            this.atmosphericForm.get("atmosphericPressure").setValue(this.settingsService.atmosphericPressure);
            
            setTimeout(() => {
              
              this.createAtenuationGraph();

            }, 300);

          })
    }
  }

  showFullScreenGraphic() {
    localStorage.setItem("graphic-data", JSON.stringify(this.atenuationData.data));
    localStorage.setItem("graphic-layout", JSON.stringify(this.atenuationData.layout));
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
    this.router.navigate([`/home/graphic`]);
  }

  async createAtenuationGraph() {
    
    this.locationService
        .getAtenuation(this.settingsService.atmosphericPressure, 
                       this.settingsService.temperature)
        .subscribe((response) => {

          let atenuationPoints = response.atenuationsPoints;

          for (let index = 0; index < atenuationPoints.length; index++) {
            this.atenuationDataY.push(atenuationPoints[index].atenuation);
            this.atenuationDataX.push(atenuationPoints[index].frecuency)
          }

          this.atenuationData = {
            data: [
              { x: this.atenuationDataX,
                y: this.atenuationDataY,
                mode: 'lines+markers', // El modo de la serie de datos es "lines" y "markers"
                line: {              // Establecemos la configuracion de la linea
                  shape: 'spline', // Configuramos la forma como "spline"
                  color: '#7f7f7f', // Establecemos el color de la linea
                  width: 1,
                  opacity: 0.5
                }
              },
            ],
            layout: { 
              // title: 'Atenuación en Aire Seco',
              yaxis: {
                // showline: false,
                // showgrid: false,
                type: 'log',
                // title: 'Atenuación específica (dB/Km)'
              },
              xaxis: {
                // showline: false,
                // showgrid: false,
                type: 'log',
                // title: 'Frecuencia (Ghz)'
              },
              margin: {
                l: 40,
                r: 20,
                t: 20,
                b: 20
              }
            }
          };

          this.atenuationGraph = true;
          this.loadingCtrl.dismiss();

        });

  }

}
