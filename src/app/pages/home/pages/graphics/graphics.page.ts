import { Component, OnDestroy, ViewChild } from '@angular/core';
import { SettingsService } from '@shared/services/settings.service';
import { GeoPoint } from '@shared/models/geographic';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Frecuency, frecuenciesLicensed, frecuencyUnit } from '@shared/models/frecuency';
import { HomeService } from '../../home.service';
import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';
import { AlertService, DataService } from '@shared/services';
import { AntennaSelected, LinkSettings, defaultLinkSettings } from '@shared/models';
import jwt_decode from 'jwt-decode';
import { LinkSettingsComponent } from '@shared/components/link-settings/link-settings.component';
import { IonModal, ModalController } from '@ionic/angular';
import { LinkFrecuenciesComponent } from '@shared/components/link-frecuencies/link-frecuencies.component';
import { Item } from '@shared/models/types';

@Component({
  selector: 'app-graphics',
  templateUrl: './graphics.page.html',
  styleUrls: ['./graphics.page.scss'],
})
export class GraphicsPage implements OnDestroy {

  anthenaOneHeight: number = 5;
  anthenaTwoHeight: number = 3;

  initialPoint: GeoPoint;
  finalPoint: GeoPoint;

  antennaSettingsObservable = this.settingsService
                                  .setLinkSettings$
                                  .subscribe((settings) => {

      this.anthenaOneHeight = settings.anthenaOneHigh;
      this.anthenaTwoHeight = settings.anthenaTwoHigh;

  });

  updateGeoPointsObservable = this.settingsService
                                  .updateGeoPoints$
                                  .subscribe(() => {

                                    this.settingsForm.get("initialLat").setValue(this.settingsService.linkSettings.P1.lat);
                                    this.settingsForm.get("initialLng").setValue(this.settingsService.linkSettings.P1.lng);
                                    this.settingsForm.get("finalLat").setValue(this.settingsService.linkSettings.P2.lat);
                                    this.settingsForm.get("finalLng").setValue(this.settingsService.linkSettings.P2.lng);
                                  
                                  });

  settingsForm: FormGroup;
  showForm: boolean = false;
  frecuencyUnit: frecuencyUnit = frecuencyUnit.GHZ;
  frecuenciesUnits: frecuencyUnit[] = [
    frecuencyUnit.HZ,
    frecuencyUnit.MHZ,
    frecuencyUnit.GHZ
  ];
  showMap: boolean = true;
  P1: GeoPoint;
  P2: GeoPoint;
  
  modalSelectedFrecuency: Frecuency = {
    frecuencyTitle: 'No seleccionada',
    frecuencyValue: 0,
    bandWidth: ''
  };
  selectedFrecuency: string[] = [];
  frecuencies: Frecuency[] = frecuenciesLicensed;

  constructor( public settingsService: SettingsService,
               private router: Router,
               private formBuilder: FormBuilder,
               private homeService: HomeService,
               private screenOrientation: ScreenOrientation,
               private alertService: AlertService,
               private modalController: ModalController ) {}

  async ionViewDidEnter() {

    // this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);

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

          this.P1 = this.settingsService.linkSettings.P1;
          this.P2 = this.settingsService.linkSettings.P2;
          
          this.setSettingsForm();
          this.showForm = true;
          this.showMap = true;

        })
        .catch((error) => {
          
          this.settingsService.linkSettings = defaultLinkSettings;
          this.alertService.closeLoading();

          this.P1 = this.settingsService.linkSettings.P1;
          this.P2 = this.settingsService.linkSettings.P2;
          
          this.setSettingsForm();
          this.showForm = true;
          this.showMap = true;
        });

  }

  private formatData(data: string[]): Frecuency {
    if (data.length === 1) {
      const frecuency = this.frecuencies.find(frecuency => frecuency.frecuencyTitle === data[0])
      return frecuency;
    } else {
      return null
    }
  
  }
  
  frecuencySelectionChanged(frecuency: string[]) {
    this.selectedFrecuency = frecuency;
    this.modalSelectedFrecuency = this.formatData(this.selectedFrecuency);
    this.settingsForm.get("frecuency").setValue(this.modalSelectedFrecuency.frecuencyValue);
  }

  getP1(point: GeoPoint) {
    this.settingsService.linkSettings.P1 = point;
    this.settingsForm.get('initialLat').setValue(point.lat);
    this.settingsForm.get('initialLng').setValue(point.lng);
  }

  getP2(point: GeoPoint) {
    this.settingsService.linkSettings.P2 = point;
    this.settingsForm.get('finalLat').setValue(point.lat);
    this.settingsForm.get('finalLng').setValue(point.lng);
  }

  saveLinkSettings() {

    if (this.settingsForm.valid) {
      
      this.alertService.showLoading("Guardando datos del enlace...");

      const antennaSelected: AntennaSelected = {...this.settingsService.linkSettings.antennaSelected}

      antennaSelected.frecuency = this.settingsForm.get("frecuency").value;
      
      const linkSettings: LinkSettings = {
        P1: {
          lat: this.settingsForm.get("initialLat").value,
          lng: this.settingsForm.get("initialLng").value
        },
        P2: {
          lat: this.settingsForm.get("finalLat").value,
          lng: this.settingsForm.get("finalLng").value
        },
        antennaOneHeight: this.settingsForm.get("antennaInitialHeight").value,
        antennaTwoHeight: this.settingsForm.get("antennaFinalHeight").value,
        antennaSelected: antennaSelected,
        atmosphericPressure: this.settingsService.linkSettings.atmosphericPressure,
        temperature: this.settingsService.linkSettings.temperature,
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

      this.settingsForm.markAllAsTouched();
      this.alertService
          .presentAlert("Salvar configuración", 
                        "Por favor completa los datos para poder guardar los datos del enlace");

    }

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
  
  showFullScreenMap() {
    this.showMap = false;
    setTimeout(() => {
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
      this.router.navigate([`/home/map`]);
    }, 100);
  }

  getDestinationLatLong(lat1: number, lon1: number, bearing: number, distance: number): [number, number] {
    const R = 6371; // radio de la Tierra en km
    const d = distance / 1000; // distancia en km
    const lat1Rad = lat1 * Math.PI / 180; // latitud en radianes
    const lon1Rad = lon1 * Math.PI / 180; // longitud en radianes
    const bearingRad = bearing * Math.PI / 180; // dirección en radianes
  
    const lat2Rad = Math.asin(Math.sin(lat1Rad) * Math.cos(d/R) + Math.cos(lat1Rad) * Math.sin(d/R) * Math.cos(bearingRad));
    const lon2Rad = lon1Rad + Math.atan2(Math.sin(bearingRad) * Math.sin(d/R) * Math.cos(lat1Rad), Math.cos(d/R) - Math.sin(lat1Rad) * Math.sin(lat2Rad));
  
    const lat2 = lat2Rad * 180 / Math.PI; // latitud en grados
    const lon2 = lon2Rad * 180 / Math.PI; // longitud en grados
  
    return [lat2, lon2];
  }

  getBearingOriginal(lat1: number, 
              lon1: number, 
              lat2: number, 
              lon2: number): number {

    let lat1Radian = lat1 * (Math.PI)/180;
    let lat2Radian = lat2 * (Math.PI)/180;
    let lon1Radian = lon1 * (Math.PI)/180;
    let lon2Radian = lon2 * (Math.PI)/180;

    const y = Math.sin(lon2Radian-lon1Radian) * Math.cos(lat2Radian);
    const x = Math.cos(lat1Radian)*Math.sin(lat2Radian) -
              Math.sin(lat1Radian)*Math.cos(lat2Radian)*Math.cos(lon2Radian-lon1Radian);
    const θ = Math.atan2(y, x);
    const bearing = (θ*180/Math.PI + 360) % 360; // in degrees

    return bearing

  }

  getBearingRobot(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const lat1Rad = lat1 * Math.PI / 180; // latitud del punto A en radianes
    const lat2Rad = lat2 * Math.PI / 180; // latitud del punto B en radianes
    const dLon = (lon2 - lon1) * Math.PI / 180; // diferencia de longitud en radianes
  
    const y = Math.sin(dLon) * Math.cos(lat2Rad);
    const x = Math.cos(lat1Rad) * Math.sin(lat2Rad) - Math.sin(lat1Rad) * Math.cos(lat2Rad) * Math.cos(dLon);
  
    const bearingRad = Math.atan2(y, x); // bearing en radianes
    const bearingDeg = bearingRad * 180 / Math.PI; // bearing en grados
  
    return (bearingDeg + 360) % 360; // ajuste de la dirección a un rango de 0 a 360 grados
  }

  setSettingsForm() {

    this.settingsForm = this.formBuilder.group({
      initialLat: this.formBuilder.control(this.P1.lat === 0 ? null : this.P1.lat, Validators.required),
      initialLng: this.formBuilder.control(this.P1.lng === 0 ? null : this.P1.lng, Validators.required),
      finalLat: this.formBuilder.control(this.P2.lat === 0 ? null : this.P2.lat, Validators.required),
      finalLng: this.formBuilder.control(this.P2.lng === 0 ? null : this.P2.lng, Validators.required),
      frecuency: this.formBuilder.control(this.settingsService.linkSettings.antennaSelected.frecuency === 0 ? null : this.settingsService.linkSettings.antennaSelected.frecuency, Validators.required),
      antennaInitialHeight: this.formBuilder.control(this.settingsService.linkSettings.antennaOneHeight === 0 ? null : this.settingsService.linkSettings.antennaOneHeight, Validators.required),
      antennaFinalHeight: this.formBuilder.control(this.settingsService.linkSettings.antennaTwoHeight === 0 ? null : this.settingsService.linkSettings.antennaTwoHeight, Validators.required)
    });

  }

  navToProfileGraph() {
    this.showMap = false;
    setTimeout(() => {      
      this.router.navigate([`/home/graphics/elevation-profile`]);
    }, 100);
  }

  navToAtenuationGraph() {

    this.showMap = false;

    setTimeout(() => {
      this.router.navigate(['/home/graphics/atenuation-graph']);
    }, 100);

  }

  navToAtenuationVaporGraph() {

    this.showMap = false;

    setTimeout(() => {      
      this.router.navigate(['/home/graphics/atenuation-water-vapor-graph']);
    }, 100);

  }

  ngOnDestroy(): void {
      this.antennaSettingsObservable.unsubscribe();
      this.updateGeoPointsObservable.unsubscribe();
  }

}

