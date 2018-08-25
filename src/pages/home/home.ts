import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Toast } from '@ionic-native/toast';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    private barcodeScanner: BarcodeScanner,
    private toast: Toast,    
  ) {

  }

  public scan() {
    this.barcodeScanner.scan().then((barcodeData) => {
      this.toast.show(barcodeData.text, '5000', 'center').subscribe(
        toast => {
          console.log(toast);
        }
      );      
    }, (err) => {
      this.toast.show(err, '5000', 'center').subscribe(
        toast => {
          console.log(toast);
        }
      );
    });    
  }

}
