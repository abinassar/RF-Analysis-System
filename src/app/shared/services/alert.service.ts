import { Injectable } from '@angular/core';
import { AlertButton, AlertController, LoadingController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private alertController: AlertController,
              private loadingCtrl: LoadingController,
              private toastController: ToastController) { }

  async presentAlert(title: string, message: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: title,
      subHeader: "",
      message: message,
      buttons: ['OK'],
    });

    await alert.present();
  }
  async showConfirmationAlert(title: string, message: string) {

    let alertButtons: AlertButton[] = [
      {
        text: 'Cancelar',
        role: 'cancel'
      },
      {
        text: 'Confirmar',
        role: 'confirm'
      },
    ];
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: title,
      subHeader: '',
      message: message,
      buttons: alertButtons,
    });
  
    await alert.present();
  
    // Espera a que el alert se cierre
    const { role } = await alert.onDidDismiss();
  
    console.log("role", role);
  
    return role === 'confirm' ? true : false;
  }

  closeLoading() {
    this.loadingCtrl.dismiss();
  }

  async showLoading(message: string) {
    const loading = await this.loadingCtrl.create({
      message
    });

    loading.present();
  }

  async presentToast(position: 'top' | 'middle' | 'bottom',
                     message: string,
                     duration: number = 1500) {
    const toast = await this.toastController.create({
      message: message,
      duration: duration,
      position: position,
    });

    await toast.present();
  }
}
