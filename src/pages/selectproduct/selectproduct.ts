import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';
import { ScannerPage } from '../../pages/scanner/scanner';
/**
 * Generated class for the SelectproductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-selectproduct',
  templateUrl: 'selectproduct.html',
})
export class SelectproductPage {
  
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    }

  ionViewDidLoad() {
      /*this.events.subscribe('deviceCategory', (data) => {
      this.category = this.data.deviceCategory;
      console.log('Device added', data);
    })*/
    console.log('ionViewDidLoad SelectproductPage');
  }

  closepage(){
  	this.navCtrl.setRoot(HomePage);
  }
  selectitem(){

    this.navCtrl.push(ScannerPage);
  }
  scanBarcode(){
    this.navCtrl.push(ScannerPage);
  }


}
