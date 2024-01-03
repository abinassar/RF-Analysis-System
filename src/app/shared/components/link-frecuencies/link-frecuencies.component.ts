// import { Component } from '@angular/core';
// import { ModalController } from '@ionic/angular';

// @Component({
//   selector: 'app-link-frecuencies',
//   templateUrl: './link-frecuencies.component.html',
//   styleUrls: ['./link-frecuencies.component.scss'],
// })
// export class LinkFrecuenciesComponent {
  
//   items = [
//     {
//       frecuencyTitle: '71500MHz',
//       frecuencyValue: 71500,
//       bandWidth: '250MHz'
//     },
//     {
//       frecuencyTitle: '80000MHz',
//       frecuencyValue: 80000,
//       bandWidth: '350MHz'
//     },
//     // Agrega más elementos según sea necesario
//   ];

//   selectedItem: any; // Variable para almacenar el elemento seleccionado

//   constructor(private modalController: ModalController) {}

//   onSelectItem(item: any) {
//     this.selectedItem = item;
//   }

//   closeModal() {
//     this.modalController.dismiss(this.selectedItem);
//   }
// }

import { Component, Input, Output, EventEmitter } from '@angular/core';
import type { OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Frecuency } from '@shared/models';
import { Item } from '@shared/models/types';

@Component({
  selector: 'app-link-frecuencies',
  templateUrl: './link-frecuencies.component.html',
  styleUrls: ['./link-frecuencies.component.scss'],
})
export class LinkFrecuenciesComponent {
  @Input() items: Frecuency[] = [];
  @Input() selectedItems: string[] = [];
  @Input() title = 'Select Items';

  @Output() selectionCancel = new EventEmitter<void>();
  @Output() selectionChange = new EventEmitter<string[]>();
  
  filteredItems: Frecuency[] = [];
  workingSelectedValues: string[] = [];

  constructor(private modalController: ModalController) {}
  
  ngOnInit() {
    this.filteredItems = [...this.items];
    this.workingSelectedValues = [...this.selectedItems];
  }
  
  trackItems(index: number, item: Frecuency) {
    return item.frecuencyTitle;
  }
  
  cancelChanges() {
    this.selectionCancel.emit();
  }
  
  confirmChanges() {
    this.selectionChange.emit(this.workingSelectedValues);
    this.modalController.dismiss();
  }
  
  searchbarInput(ev) {
    this.filterList(ev.target.value);
  }
  
  /**
   * Update the rendered view with
   * the provided search query. If no
   * query is provided, all data
   * will be rendered.
   */
  filterList(searchQuery: string | undefined) {
    /**
     * If no search query is defined,
     * return all options.
     */
    if (searchQuery === undefined) {
      this.filteredItems = [...this.items];
    } else {
      /**
       * Otherwise, normalize the search
       * query and check to see which items
       * contain the search query as a substring.
       */
      const normalizedQuery = searchQuery.toLowerCase(); 
      this.filteredItems = this.items.filter(item => {
        return item.frecuencyTitle.includes(normalizedQuery);
      });
    }
  }

  isChecked(value: string) {
    return this.workingSelectedValues.find(item => item === value);
  }
  
  checkboxChange(ev) {

    this.workingSelectedValues = [];

    const { checked, value } = ev.detail;
    
    if (checked) {
      this.workingSelectedValues = [
        ...this.workingSelectedValues,
        value
      ]
    } else {
      this.workingSelectedValues = this.workingSelectedValues.filter(item => item !== value);
    }
  }
}