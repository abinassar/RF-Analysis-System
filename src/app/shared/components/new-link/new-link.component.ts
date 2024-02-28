import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';
import { ModalController, NavParams } from '@ionic/angular';
import { Antenna, FrecuencyMultiplierFactor, GeoPoint, defaultLinkSettings, LinkSettings, antennaChannelsCambiumNetwork670, antennaModulationsCambiumNetwork670, antennaRxSensitivityCambiumNetwork670, antennasList, rxSensitivityCombinationsCambiumNetwork670, defaultPoints } from '@shared/models';
import { AlertService, SettingsService } from '@shared/services';
import { HomeService } from 'src/app/pages/home/home.service';
import { AntennaListComponent } from 'src/app/pages/home/pages/power-budget/components/antenna-list/antenna-list.component';

@Component({
  selector: 'app-new-link',
  templateUrl: './new-link.component.html',
  styleUrls: ['./new-link.component.scss'],
})
export class NewLinkComponent  implements OnInit {

  showMap: boolean = true;
  P1: GeoPoint = defaultPoints;
  P2: GeoPoint = defaultPoints;
  linkFrecuency: number = 0;
  linkFrecuencyMultiplyFactor: FrecuencyMultiplierFactor = FrecuencyMultiplierFactor.GHZ;

  newLinkForm: FormGroup = this.formBuilder.group({
    name: this.formBuilder.control('', Validators.required),
    initialLat: this.formBuilder.control(0),
    initialLng: this.formBuilder.control(0),
    finalLat: this.formBuilder.control(0),
    finalLng: this.formBuilder.control(0),
    antennaInitialHeight: this.formBuilder.control(0),
    antennaFinalHeight: this.formBuilder.control(0),
    txAntennaGain: this.formBuilder.control(0),
    antennaChannel: this.formBuilder.control(''),
    antennaModulation: this.formBuilder.control(''),
    rxSensitivity: this.formBuilder.control(0)
  });

  antennaSelected: Antenna = {
    name: "No Seleccionada",
    txAntennaGain: 0,
    frecuency: [0],
    maxDistanceKm: "",
    imgPath: "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y",
    checked: false,
    antennaChannels: antennaChannelsCambiumNetwork670,
    antennaModulations: antennaModulationsCambiumNetwork670,
    rxSensitivityCombinations: rxSensitivityCombinationsCambiumNetwork670,
    rxSensitivitySelected: antennaRxSensitivityCambiumNetwork670,
    antennaChannelSelected: antennaChannelsCambiumNetwork670[0],
    antennaModulationSelected: antennaModulationsCambiumNetwork670[0]
  };
  antennasList: Antenna[] = antennasList;
  linkSettingsList: LinkSettings[];

  constructor(private modalCtrl: ModalController,
              private screenOrientation: ScreenOrientation,
              private router: Router,
              private navParams: NavParams,
              private alertService: AlertService,
              private settingsService: SettingsService,
              private homeService: HomeService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.linkSettingsList = this.navParams.get('linkSettingsList');
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {}

  showFullScreenMap() {
    this.showMap = false;
    setTimeout(() => {
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
      this.router.navigate([`/home/map`]);
    }, 100);
  }

  getP1(point: GeoPoint) {
    this.newLinkForm.get('initialLat').setValue(point.lat);
    this.newLinkForm.get('initialLng').setValue(point.lng);
  }

  getP2(point: GeoPoint) {
    this.newLinkForm.get('finalLat').setValue(point.lat);
    this.newLinkForm.get('finalLng').setValue(point.lng);
  }

  async navToAntennaList() {

    const modal = await this.modalCtrl.create({
      component: AntennaListComponent,
      cssClass: 'my-custom-class',
      componentProps: {
        antennaName: this.antennaSelected.name,
        antennaSelected: this.antennaSelected,
        skipSaveAntenna: true
      }
    });

    modal.onDidDismiss().then((result) => {
      if (result.role !== 'cancel') {
        console.log("result ", result)

        const antennaData: Antenna = result.data;
        this.antennaSelected.imgPath = antennaData.imgPath;
        this.antennaSelected.name = antennaData.name;
        this.antennaSelected.txAntennaGain = antennaData.txAntennaGain;

        this.newLinkForm.get('txAntennaGain').setValue(antennaData.txAntennaGain);
        this.newLinkForm.get('antennaChannel').setValue(antennaData.rxSensitivitySelected.antennaChannel);
        this.newLinkForm.get('antennaModulation').setValue(antennaData.rxSensitivitySelected.antennaModulation);
        this.newLinkForm.get('rxSensitivity').setValue(antennaData.rxSensitivitySelected.rxSensitivity);
    
        
        this.linkFrecuency = antennaData.frecuency[0];

      }
    });

    await modal.present();

  }

  createLink() {

    if (this.newLinkForm.valid
        && this.linkFrecuency >= 0) {
      
      let newLinkSettings: LinkSettings = {...defaultLinkSettings};
      const linksList = this.linkSettingsList.slice();

      console.log("linksList ", linksList)
      console.log("newLinkSettings ", newLinkSettings)
      console.log("this.newLinkForm ", this.newLinkForm)

      linksList.forEach((link) => link.selected = false);

      // Set the new link attributes

      newLinkSettings.linkName = this.newLinkForm.get("name").value;
      newLinkSettings.P1.lat = this.newLinkForm.get("initialLat").value;
      newLinkSettings.P1.lng = this.newLinkForm.get("initialLng").value;
      newLinkSettings.P2.lat = this.newLinkForm.get("finalLat").value;
      newLinkSettings.P2.lng = this.newLinkForm.get("finalLng").value;
      newLinkSettings.antennaOneHeight = this.newLinkForm.get("antennaInitialHeight").value;
      newLinkSettings.antennaTwoHeight = this.newLinkForm.get("antennaFinalHeight").value;
      newLinkSettings.antennaSelected.antennaModulation = this.newLinkForm.get("antennaModulation").value;
      newLinkSettings.antennaSelected.txAntennaGain = this.newLinkForm.get("txAntennaGain").value;
      newLinkSettings.antennaSelected.rxSensitivity = this.newLinkForm.get("rxSensitivity").value;
      newLinkSettings.antennaSelected.frecuency = this.linkFrecuency;
      newLinkSettings.antennaSelected.frecuencyMultiplyFactor = this.linkFrecuencyMultiplyFactor;
      newLinkSettings.selected = true;

      console.log("newLinkSettings ", newLinkSettings)

      linksList.push(newLinkSettings);

      console.log("linksList ", linksList)

      this.alertService.showLoading("Creando enlace...");
      
      this.settingsService
          .SetUserLinkSettingsData(this.homeService.getUserId, linksList)
          .subscribe((response) => {
  
            this.alertService.closeLoading();
            this.settingsService.linkSettingsList = linksList;
            this.alertService.presentToast("bottom","Enlace creado exitosamente!");
            return this.modalCtrl.dismiss(newLinkSettings);
  
          },
          (error) => {
            this.alertService.closeLoading();
            this.alertService.presentAlert("Hubo un problema el enlace",
                                           "Por favor, intenta mas tarde")
          });
  
      return;

      // newLinkSettings.linkName = this.newLinkForm.get("name").value;
      // newLinkSettings.selected = false;

      // console.log("newLinkSettings ", newLinkSettings)
  
      // linksList.push(newLinkSettings);

      // console.log("linksList ", linksList)

      // const linkGroup = this.formBuilder.group({
      //   checked: false
      // });

      // this.linksArray.push(linkGroup);

      // this.linkSettingsList.push(newLinkSettings);

      // // Saving link

      // this.alertService.showLoading("Guardando configuración de enlaces...");

      // console.log("this.linkSettingsList ", this.linkSettingsList)
      // return
    
      // this.settingsService
      //     .SetUserLinkSettingsData(this.homeService.getUserId, this.linkSettingsList)
      //     .subscribe((response) => {
  
      //       this.alertService.closeLoading();
      //       this.alertService.presentToast("bottom","Configuracion guardada!");
      //       return this.modalCtrl.dismiss(this.linkSettingsList[this.linkSelectedIndex]);
  
      //     },
      //     (error) => {
      //       this.alertService.closeLoading();
      //       this.alertService.presentAlert("Hubo un problema guardando la configuracion",
      //                                      "Por favor, intenta mas tarde")
      //     });
  
    } else {

      if (this.linkFrecuency < 0) {
        
        this.alertService
            .presentAlert("Frecuencia", 
                          "Por favor establece una frecuencia mayor o igual a cero");

      } else {

        this.alertService
            .presentAlert("Datos Requeridos",
                          "Por favor rellena los datos requeridos");

      }

      this.newLinkForm.markAllAsTouched();
    }

  }

}
