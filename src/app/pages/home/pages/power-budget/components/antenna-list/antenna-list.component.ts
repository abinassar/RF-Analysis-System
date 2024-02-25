import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ModalController, NavParams } from '@ionic/angular';
import { Antenna, LinkSettings, RxSensitivity, antennasList } from '@shared/models';
import { AlertService, SettingsService } from '@shared/services';
import { HomeService } from 'src/app/pages/home/home.service';

@Component({
  selector: 'app-antenna-list',
  templateUrl: './antenna-list.component.html',
  styleUrls: ['./antenna-list.component.scss'],
})
export class AntennaListComponent implements OnInit {

  @Input() antennaSelectedName: string;

  antennaSelectedIndex: number = 0;
  antennasList: Antenna[] = antennasList;
  antennaSettingsForm: FormGroup;
  antennaSelected: FormArray;
  antennaName: string;
  antennaData: Antenna;

  constructor(private modalCtrl: ModalController,
              private formBuilder: FormBuilder,
              private alertService: AlertService,
              private settingsService: SettingsService,
              private navParams: NavParams,
              private homeService: HomeService) { }

  ngOnInit() {

    this.antennaName = this.navParams.get('antennaName');
    this.antennaData = this.navParams.get('antennaSelected');

    this.antennaSettingsForm = this.formBuilder.group({
      antennaSelected: this.formBuilder.array([])
    })

    this.antennaSelected = this.antennaSettingsForm
                               .get('antennaSelected') as FormArray;

    this.antennasList.forEach((antenna) => {
      const antennaGroup = this.formBuilder.group({
        checked: [antenna.checked]
      });

      this.antennaSelected.push(antennaGroup);
    });
      
    let antennaSelectedIndex = this.antennasList.findIndex((antenna) => {
      return antenna.name === this.antennaName
    });

    if (antennaSelectedIndex !== -1) {

      console.log("antennaSelectedIndex ", antennaSelectedIndex)

      this.antennaSelected.at(antennaSelectedIndex).get("checked").setValue(true);
      this.antennaSelectedIndex = antennaSelectedIndex;

      if (this.antennaData.antennaChannelSelected !== '') {
        this.antennasList[this.antennaSelectedIndex].rxSensitivitySelected.antennaChannel = this.antennaData.rxSensitivitySelected.antennaChannel;
      }

      if (this.antennaData.antennaModulationSelected !== '') {
        this.antennasList[this.antennaSelectedIndex].rxSensitivitySelected.antennaModulation = this.antennaData.rxSensitivitySelected.antennaModulation;
      }

      this.antennasList[this.antennaSelectedIndex].rxSensitivitySelected.rxSensitivity = this.antennaData.rxSensitivitySelected.rxSensitivity;
      
    } else {

      this.antennaSelected.at(0).get("checked").setValue(true);
      this.antennaSelectedIndex = 0;

    }

  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {

    console.log("this.antennaSelectedIndex ", this.antennaSelectedIndex)
    console.log("this.antennasList[this.antennaSelectedIndex] ", this.antennasList[this.antennaSelectedIndex])

    this.alertService.showLoading("Guardando datos del enlace...");

    let antennaSelected: Antenna = this.antennasList[this.antennaSelectedIndex];
    let antennaSelectedToSave = this.settingsService.linkSettings.antennaSelected;

    // Add features selected by the user in the select antenna list

    if (antennaSelected.rxSensitivitySelected.rxSensitivity !== 0) {
      antennaSelectedToSave.rxSensitivity = antennaSelected.rxSensitivitySelected.rxSensitivity;
      antennaSelectedToSave.antennaModulation = antennaSelected.rxSensitivitySelected.antennaModulation;
      antennaSelectedToSave.antennaChannel = antennaSelected.rxSensitivitySelected.antennaChannel;
    }

    antennaSelectedToSave.name = this.antennasList[this.antennaSelectedIndex].name;

    const linkSettings: LinkSettings = {
      P1: this.settingsService.linkSettings.P1,
      P2: this.settingsService.linkSettings.P2,
      antennaOneHeight: this.settingsService.linkSettings.antennaOneHeight,
      antennaTwoHeight: this.settingsService.linkSettings.antennaTwoHeight,
      antennaSelected: antennaSelectedToSave,
      atmosphericPressure: this.settingsService.linkSettings.atmosphericPressure,
      temperature: this.settingsService.linkSettings.temperature,
      waterDensity: this.settingsService.linkSettings.waterDensity,
      linkName: this.settingsService.linkSettings.linkName,
      selected: true,
      kFactor: this.settingsService.linkSettings.kFactor
    }

    this.settingsService
        .SetUserLinkSettingsData(this.homeService.getUserId, [linkSettings])
        .subscribe((response) => {

          this.alertService.closeLoading();
          this.alertService.presentToast("bottom","Configuracion guardada!");
          return this.modalCtrl.dismiss(antennaSelected);

        },
        (error) => {
          this.alertService.closeLoading();
          this.alertService.presentAlert("Hubo un problema guadrando la configuracion",
                                         "Por favor, intenta mas tarde")
                           .then(() => {
                            return this.modalCtrl.dismiss();
                           })
        });

  }

  onModulationChange(event, antennaIndex: number) {

    console.log("modulation ", event)

    const modulationSelected = event.detail.value;
    this.setRxSensitivity(antennaIndex, '', modulationSelected);
  }

  onChannelChange(event, antennaIndex: number) {
    console.log("channel ", event)

    const channelSelected = event.detail.value;
    this.setRxSensitivity(antennaIndex, channelSelected, '');

  }

  setRxSensitivity(antennaIndex: number,
                   antennaChannel: string = '',
                   antennaModulation: string = '') {

    if (antennaChannel !== '') {
      this.antennasList[antennaIndex].rxSensitivitySelected.antennaChannel = antennaChannel;
    }

    if (antennaModulation !== '') {
      this.antennasList[antennaIndex].rxSensitivitySelected.antennaModulation = antennaModulation;
    }

    if (this.antennasList[antennaIndex].rxSensitivitySelected.antennaChannel !== ''
        && this.antennasList[antennaIndex].rxSensitivitySelected.antennaModulation !== '') {

      const rxSensitivityCombination = this.antennasList[antennaIndex].rxSensitivityCombinations.find((combination) => {
        return combination.antennaChannel === this.antennasList[antennaIndex].rxSensitivitySelected.antennaChannel
               && combination.antennaModulation === this.antennasList[antennaIndex].rxSensitivitySelected.antennaModulation
      });

      this.antennasList[antennaIndex].rxSensitivitySelected = rxSensitivityCombination;
      
    }

  }

  changedAntenna($event, index) {    
    this.antennaSelected.at(this.antennaSelectedIndex).get("checked").setValue(false);
    this.antennaSelectedIndex = index;
  }

}
