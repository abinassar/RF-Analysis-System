import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';
import { DeviceOrientation, DeviceOrientationCompassHeading } from '@ionic-native/device-orientation/ngx';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';
import { ModalController } from '@ionic/angular';
import { AntennaListComponent } from './components/antenna-list/antenna-list.component';
import { AlertService, SettingsService } from '@shared/services';
import { Antenna, AntennaSelected, Frecuency, FrecuencyMultiplierFactor, LinkSettings, antennasList, defaultLinkSettings, frecuenciesLicensed } from '@shared/models';
import { HomeService } from '../../home.service';
import { LinkSettingsComponent } from '@shared/components/link-settings/link-settings.component';

@Component({
  selector: 'app-power-budget',
  templateUrl: './power-budget.page.html',
  styleUrls: ['./power-budget.page.scss'],
})
export class PowerBudgetPage {

  // We will call this variable on home.page.html file
  data: DeviceOrientationCompassHeading;
  public currentLocation: any = null;

  // Initial Kaaba location that we've got from google maps
  private kaabaLocation: {lat:number,lng:number} = {lat: 21.42276, lng: 39.8256687};

  // Initial Qibla Location
  public qiblaLocation = 0;

  antennaForm: FormGroup;
  fadeMarginForm: FormGroup;
  showForm: boolean = false;
  antennaSelected: Antenna = {
    name: "No Seleccionada",
    txAntennaGain: 0,
    frecuency: [0],
    maxDistanceKm: "",
    imgPath: "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y",
    checked: false
  };
  antennasList: Antenna[] = antennasList;

  modalSelectedFrecuency: Frecuency = {
    frecuencyTitle: 'No seleccionada',
    frecuencyValue: 0,
    bandWidth: ''
  };
  selectedFrecuency: string[] = [];
  frecuencies: Frecuency[] = frecuenciesLicensed;
  settingsForm!: FormGroup;
  showSettingsForm: boolean = false;
  linkDistance: number = 0;
  PEL: number = 0;

  linkFrecuency: number = 0;
  linkFrecuencyMultiplyFactor: FrecuencyMultiplierFactor = FrecuencyMultiplierFactor.GHZ;
  showFrecuencySelector: boolean = false;

  constructor(private deviceOrientation: DeviceOrientation,
              private geolocation: Geolocation,
              private formBuilder: FormBuilder,
              public modalController: ModalController,
              public settingsService: SettingsService,
              private alertService: AlertService,
              private homeService: HomeService) {

    // Watch the device compass heading change
    this.deviceOrientation.watchHeading().subscribe((res: DeviceOrientationCompassHeading) => {
        this.data = res;
        // Change qiblaLocation when currentLocation is not empty 
        if (!!this.currentLocation) {
          const currentQibla = res.magneticHeading - this.getQiblaPosition();
          this.qiblaLocation = currentQibla > 360 ? currentQibla%360 : currentQibla;
        }
      }
    );

    // Watch the device compass heading change
    this.deviceOrientation.watchHeading().subscribe((res: DeviceOrientationCompassHeading) => {
      this.data = res;
    });

    // Watch current location
    this.geolocation.watchPosition().subscribe((res) => {
        this.currentLocation = res;
    });
  }

  calculatePEL() {
    if (this.linkDistance !== 0
        && this.linkFrecuency !== 0
        && this.linkFrecuency > 0) {

      const ghzFrecuency = this.getGhzFrecuency();
      this.PEL = 92.44 + 20 * Math.log10(Math.abs(this.linkDistance)) + 20 * Math.log10(ghzFrecuency);

    } else {

      if (this.linkFrecuency === 0
          || this.linkFrecuency < 0) {
        
        this.alertService
            .presentAlert("Frecuencia", 
                          "Por favor establece una frecuencia válida");

      } else {

        this.alertService
            .presentAlert("Puntos geográficos",
                          "Por favor establece la distancia del enlace");

      }

    }
  }

  // Convert the frecuency selected to GHZ unity

  getGhzFrecuency(): number {

    switch (this.linkFrecuencyMultiplyFactor) {
      case FrecuencyMultiplierFactor.GHZ:

        return (this.linkFrecuency)

        break;

      case FrecuencyMultiplierFactor.HZ:

        return (this.linkFrecuency / 1000000000)

        break;
        
      case FrecuencyMultiplierFactor.MHZ:

        return (this.linkFrecuency / 1000)

        break;        
      default:

        return (this.linkFrecuency * this.linkFrecuencyMultiplyFactor)

        break;
    }

  }

  async ionViewDidEnter() {

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

          let antennaSelectedIndex = this.antennasList.findIndex((antenna) => {
            return antenna.name === this.settingsService.linkSettings.antennaSelected.name
          });
      
          console.log("this.settingsService.linkSettings ", this.settingsService.linkSettings)
      
          if (antennaSelectedIndex !== -1) {
      
            this.antennaSelected.imgPath = this.antennasList[antennaSelectedIndex].imgPath;
            this.antennaSelected.name = this.antennasList[antennaSelectedIndex].name;
      
          }
          
          this.setAntennaForm();
          this.setSettingsForm();
          this.linkFrecuency = this.settingsService.linkSettings.antennaSelected.frecuency;
          this.linkFrecuencyMultiplyFactor = this.settingsService.linkSettings.antennaSelected.frecuencyMultiplyFactor;
          this.PEL = this.settingsService.linkSettings.antennaSelected.freeSpaceLoss;
          this.showFrecuencySelector = true;
          this.showSettingsForm = true;
          this.linkDistance = this.calculateDistance();

        })
        .catch((error) => {
          
          this.settingsService.linkSettings = defaultLinkSettings;
          this.alertService.closeLoading();

          let antennaSelectedIndex = this.antennasList.findIndex((antenna) => {
            return antenna.name === this.settingsService.linkSettings.antennaSelected.name
          });
      
          console.log("this.settingsService.linkSettings ", this.settingsService.linkSettings)
      
          if (antennaSelectedIndex !== -1) {
      
            this.antennaSelected.imgPath = this.antennasList[antennaSelectedIndex].imgPath;
            this.antennaSelected.name = this.antennasList[antennaSelectedIndex].name;
      
          }
          
          this.setAntennaForm();
          this.setSettingsForm();
          this.linkFrecuency = this.settingsService.linkSettings.antennaSelected.frecuency;
          this.linkFrecuencyMultiplyFactor = this.settingsService.linkSettings.antennaSelected.frecuencyMultiplyFactor;
          this.PEL = this.settingsService.linkSettings.antennaSelected.freeSpaceLoss;
          this.showFrecuencySelector = true;
          this.showSettingsForm = true;
          this.linkDistance = this.calculateDistance();

        });

  }

  setSettingsForm() {

    this.settingsForm = this.formBuilder.group({
      initialLat: this.formBuilder.control(this.settingsService.linkSettings.P1.lat === 0 ? null : this.settingsService.linkSettings.P1.lat, Validators.required),
      initialLng: this.formBuilder.control(this.settingsService.linkSettings.P1.lng === 0 ? null : this.settingsService.linkSettings.P1.lng, Validators.required),
      finalLat: this.formBuilder.control(this.settingsService.linkSettings.P2.lat === 0 ? null : this.settingsService.linkSettings.P2.lat, Validators.required),
      finalLng: this.formBuilder.control(this.settingsService.linkSettings.P2.lng === 0 ? null : this.settingsService.linkSettings.P2.lng, Validators.required),
    });

  };

  degreesToRadians(degrees: number): number {
    return degrees * (Math.PI / 180);
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

  calculateDistance(): number {

    if (this.settingsForm.get('initialLat').value
        && this.settingsForm.get('finalLat').value) {

          const lat1 = this.settingsForm.get("initialLat").value
          const lat2 = this.settingsForm.get("finalLat").value
          const lon1 = this.settingsForm.get("initialLng").value
          const lon2 = this.settingsForm.get("finalLng").value

      
          const bearing = this.getBearingRobot(lat1, lon1, lat2, lon2);

          const earthRadius = 6371; // Radio de la Tierra en kilómetros
        
          // Convertir las latitudes y longitudes a radianes
          const lat1Rad = this.degreesToRadians(lat1);
          const lon1Rad = this.degreesToRadians(lon1);
          const lat2Rad = this.degreesToRadians(lat2);
          const lon2Rad = this.degreesToRadians(lon2);
        
          // Calcular la diferencia de longitud y el bearing en radianes
          const lonDiffRad = lon2Rad - lon1Rad;
          const bearingRad = this.degreesToRadians(bearing);
        
          // Calcular la distancia utilizando la fórmula del haversine
          const distance = 2 * earthRadius * Math.asin(
            Math.sqrt(
              Math.sin((lat2Rad - lat1Rad) / 2) ** 2 +
              Math.cos(lat1Rad) * Math.cos(lat2Rad) * Math.sin(lonDiffRad / 2) ** 2
            )
          );
        
          // Calcular la distancia proyectada en el bearing
          const projectedDistance = distance * Math.sin(bearingRad);
        
          this.linkDistance = Math.abs(projectedDistance);

          return Math.abs(projectedDistance);

    } else {

        this.alertService.presentAlert("Por favor establece la latitud y longitud de estudio",
                                       "");
        return Math.abs(this.linkDistance);
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

  async navToAntennaList() {

    const modal = await this.modalController.create({
      component: AntennaListComponent,
      cssClass: 'my-custom-class',
      componentProps: {
        antennaName: this.antennaSelected.name
      }
    });

    modal.onDidDismiss().then((result) => {
      if (result.role !== 'cancel') {
        console.log("result ", result)

        const antennaData: Antenna = result.data;
        this.antennaSelected.imgPath = antennaData.imgPath;
        this.antennaSelected.name = antennaData.name;
        this.antennaSelected.txAntennaGain = antennaData.txAntennaGain;
        // this.settingsForm.get('frecuency').setValue(antennaData.frecuency[0]);
        this.linkFrecuency = antennaData.frecuency[0];
        this.antennaForm.get('txAntennaGain').setValue(antennaData.txAntennaGain);

      }
    });

    await modal.present();

  }

  saveLinkSettings() {

    console.log("this.antennaForm ", this.antennaForm)
    
    if (this.antennaForm.valid) {
      
      this.alertService.showLoading("Guardando datos del enlace...");

      let antennaSettings = {...this.settingsService.linkSettings.antennaSelected};
      antennaSettings.txPower = this.antennaForm.get("txPower").value;
      antennaSettings.txAntennaGain = this.antennaForm.get("txAntennaGain").value;
      antennaSettings.txLoss = this.antennaForm.get("txLoss").value;
      // antennaSettings.freeSpaceLoss = this.antennaForm.get("freeSpaceLoss").value;
      antennaSettings.freeSpaceLoss = this.PEL;
      antennaSettings.miscLoss = this.antennaForm.get("miscLoss").value;
      antennaSettings.rxAntennaGain = this.antennaForm.get("rxAntennaGain").value;
      antennaSettings.rxLoss = this.antennaForm.get("rxLoss").value;
      antennaSettings.rxSensitivity = this.antennaForm.get("rxSensitivity").value;

      const linkSettings: LinkSettings = {
        P1: this.settingsService.linkSettings.P1,
        P2: this.settingsService.linkSettings.P2,
        antennaOneHeight: this.settingsService.linkSettings.antennaOneHeight,
        antennaTwoHeight: this.settingsService.linkSettings.antennaTwoHeight,
        antennaSelected: antennaSettings,
        atmosphericPressure: this.settingsService.linkSettings.atmosphericPressure,
        temperature: this.settingsService.linkSettings.temperature,
        waterDensity: this.settingsService.linkSettings.waterDensity,
        linkName: this.settingsService.linkSettings.linkName,
        selected: true,
        kFactor: this.settingsService.linkSettings.kFactor
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
            this.alertService.presentAlert("Hubo un problema guadrando la configuracion",
                                           "Por favor, intenta mas tarde")
          });

    } else {

      this.antennaForm.markAllAsTouched();
      this.alertService
          .presentAlert("Salvar configuración", 
                        "Por favor completa los datos para poder guardar los datos del enlace");

    }

  }

  frecuencySelectionChanged(frecuency: string[]) {
    this.selectedFrecuency = frecuency;
    this.modalSelectedFrecuency = this.formatData(this.selectedFrecuency);
    this.settingsForm.get("frecuency").setValue(this.modalSelectedFrecuency.frecuencyValue);
  }

  private formatData(data: string[]): Frecuency {
    if (data.length === 1) {
      const frecuency = this.frecuencies.find(frecuency => frecuency.frecuencyTitle === data[0])
      return frecuency;
    } else {
      return null
    }
  
  }

  powerAddition(): number {
    return this.antennaForm.get("txPower").value +
           this.antennaForm.get("txAntennaGain").value +
           this.antennaForm.get("txLoss").value +
          //  this.antennaForm.get("freeSpaceLoss").value +
           this.PEL +
           this.antennaForm.get("miscLoss").value +
           this.antennaForm.get("rxAntennaGain").value +
           this.antennaForm.get("rxLoss").value;
  }

  setAntennaForm() {

    this.antennaForm = this.formBuilder.group({
      txPower: this.formBuilder.control(this.settingsService.linkSettings.antennaSelected.txPower === 0 ? null : this.settingsService.linkSettings.antennaSelected.txPower, Validators.required),
      txAntennaGain: this.formBuilder.control(this.settingsService.linkSettings.antennaSelected.txAntennaGain === 0 ? null : this.settingsService.linkSettings.antennaSelected.txAntennaGain, Validators.required),
      txLoss: this.formBuilder.control(this.settingsService.linkSettings.antennaSelected.txLoss === 0 ? null : this.settingsService.linkSettings.antennaSelected.txLoss, Validators.required),
      // freeSpaceLoss: this.formBuilder.control(this.settingsService.linkSettings.antennaSelected.freeSpaceLoss === 0 ? null : this.settingsService.linkSettings.antennaSelected.freeSpaceLoss, Validators.required),
      miscLoss: this.formBuilder.control(this.settingsService.linkSettings.antennaSelected.miscLoss === 0 ? null : this.settingsService.linkSettings.antennaSelected.miscLoss, Validators.required),
      rxAntennaGain: this.formBuilder.control(this.settingsService.linkSettings.antennaSelected.rxAntennaGain === 0 ? null : this.settingsService.linkSettings.antennaSelected.rxAntennaGain, Validators.required),
      rxLoss: this.formBuilder.control(this.settingsService.linkSettings.antennaSelected.rxLoss === 0 ? null : this.settingsService.linkSettings.antennaSelected.rxLoss, Validators.required),
      rxSensitivity: this.formBuilder.control(this.settingsService.linkSettings.antennaSelected.rxSensitivity === 0 ? null : this.settingsService.linkSettings.antennaSelected.rxSensitivity, Validators.required)
    });

    this.showForm = true;

  }

  getQiblaPosition() {
    // Convert all geopoint degree to radian before jump to furmula
    const currentLocationLat = this.degreeToRadian(this.currentLocation.coords.latitude);
    const currentLocationLng = this.degreeToRadian(this.currentLocation.coords.longitude);
    const kaabaLocationLat = this.degreeToRadian(this.kaabaLocation.lat);
    const kaabaLocationLng = this.degreeToRadian(this.kaabaLocation.lng);

    // Use Basic Spherical Trigonometric Formula
    return this.radianToDegree(
      Math.atan2(
        Math.sin(kaabaLocationLng-currentLocationLng),
        (Math.cos(currentLocationLat) * Math.tan(kaabaLocationLat) - Math.sin(currentLocationLat) * Math.cos(kaabaLocationLng - currentLocationLng))
      )
    );
  }

  /**
   * Convert from Radian to Degree
   * @param radian 
   */
  radianToDegree(radian: number) {
    return radian * 180 / Math.PI;
  }

  /**
   * Convert from Degree to Radian
   * @param degree 
   */
  degreeToRadian(degree: number) {
    return degree * Math.PI / 180;
  }

}

