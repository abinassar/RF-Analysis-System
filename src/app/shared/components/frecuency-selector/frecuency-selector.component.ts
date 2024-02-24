import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Frecuency, FrecuencyMultiplierFactor, FrecuencyOption, frecuenciesLicensed, FrecuencyUnit } from '@shared/models';

@Component({
  selector: 'app-frecuency-selector',
  templateUrl: './frecuency-selector.component.html',
  styleUrls: ['./frecuency-selector.component.scss'],
})
export class FrecuencySelectorComponent  implements OnInit {

  frecuencies: Frecuency[] = frecuenciesLicensed;
  modalSelectedFrecuency: Frecuency = {
    frecuencyTitle: 'No seleccionada',
    frecuencyValue: 0,
    bandWidth: ''
  };
  selectedFrecuency: string[] = [];

  @Input() frecuency: number = 0;
  @Output() frecuencyChange = new EventEmitter<number>();
  @Input() frecuencyMultFactor: FrecuencyMultiplierFactor = null;
  @Output() frecuencyMultFactorChange = new EventEmitter<number>();

  frecuencyForm: FormGroup;
  frecuenciesUnits: FrecuencyOption[] = [
    {
      frecuencyUnit: FrecuencyUnit.HZ,
      multiplierFactor: FrecuencyMultiplierFactor.HZ
    },
    {
      frecuencyUnit: FrecuencyUnit.MHZ,
      multiplierFactor: FrecuencyMultiplierFactor.MHZ
    },
    {
      frecuencyUnit: FrecuencyUnit.GHZ,
      multiplierFactor: FrecuencyMultiplierFactor.GHZ
    }
  ];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.frecuencyForm = this.formBuilder.group({
      frecuency: this.formBuilder.control(this.frecuency === 0 ? null : this.frecuency, Validators.required),
      frecuencyMultFactor: this.formBuilder.control(!this.frecuencyMultFactor ? FrecuencyMultiplierFactor.GHZ : this.frecuencyMultFactor, Validators.required),
    });

    this.frecuencyForm
        .get('frecuency')
        .valueChanges
        .subscribe((frecuency: number) => {
          this.frecuencyChange.emit(frecuency);
        });

    this.frecuencyForm
        .get('frecuencyMultFactor')
        .valueChanges
        .subscribe((frecuencyMultFactor: number) => {
          this.frecuencyMultFactorChange.emit(frecuencyMultFactor);
        });

  }

  show() {
    console.log("this.frecuencyForm ", this.frecuencyForm)
  }

  onSelectionChange($event: any) {

    console.log("Changed frecuency unit" , $event)

  }

  frecuencySelectionChanged(frecuency: string[]) {
    console.log("frecuency ", frecuency)
    this.selectedFrecuency = frecuency;
    // this.modalSelectedFrecuency = this.formatData(this.selectedFrecuency);
    // this.settingsForm.get("frecuency").setValue(this.modalSelectedFrecuency.frecuencyValue);
  }

}
