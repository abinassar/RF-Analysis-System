import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';
import { ModalController } from '@ionic/angular';
import { Antenna, FrecuencyMultiplierFactor, GeoPoint, antennaChannelsCambiumNetwork670, antennaModulationsCambiumNetwork670, antennaRxSensitivityCambiumNetwork670, antennasList, rxSensitivityCombinationsCambiumNetwork670 } from '@shared/models';
import { AntennaListComponent } from 'src/app/pages/home/pages/power-budget/components/antenna-list/antenna-list.component';

@Component({
  selector: 'app-new-link',
  templateUrl: './new-link.component.html',
  styleUrls: ['./new-link.component.scss'],
})
export class NewLinkComponent  implements OnInit {

  showMap: boolean = true;
  P1: GeoPoint;
  P2: GeoPoint;
  linkFrecuency: number = 0;
  linkFrecuencyMultiplyFactor: FrecuencyMultiplierFactor = FrecuencyMultiplierFactor.GHZ;

  newLinkForm: FormGroup = this.formBuilder.group({
    name: this.formBuilder.control('', Validators.required),
    initialLat: this.formBuilder.control(0, Validators.required),
    initialLng: this.formBuilder.control(0, Validators.required),
    finalLat: this.formBuilder.control(0, Validators.required),
    finalLng: this.formBuilder.control(0, Validators.required),
    antennaInitialHeight: this.formBuilder.control(0, Validators.required),
    antennaFinalHeight: this.formBuilder.control(0, Validators.required),
    txAntennaGain: this.formBuilder.control(0, Validators.required),
    antennaChannel: this.formBuilder.control('', Validators.required),
    antennaModulation: this.formBuilder.control('', Validators.required),
    rxSensitivity: this.formBuilder.control(0, Validators.required)
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


  constructor(private modalCtrl: ModalController,
              private screenOrientation: ScreenOrientation,
              private router: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit() {}

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
    
        
        // if (antennaData.rxSensitivitySelected.rxSensitivity !== 0) {
        //   this.settingsForm.get('rxSensitivity').setValue(antennaData.rxSensitivitySelected.rxSensitivity);
        // }

        this.linkFrecuency = antennaData.frecuency[0];
        // this.antennaForm.get('txAntennaGain').setValue(antennaData.txAntennaGain);

      }
    });

    await modal.present();

  }

}
