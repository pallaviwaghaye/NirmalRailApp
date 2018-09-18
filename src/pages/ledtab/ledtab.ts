import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ColorpickersliderPage } from '../../pages/colorpickerslider/colorpickerslider';
import { LedschedularPage } from '../../pages/ledschedular/ledschedular';
import { WhiteyellowcolorpickerPage } from '../../pages/whiteyellowcolorpicker/whiteyellowcolorpicker';
import { MoodsPage } from '../../pages/moods/moods';
import { LoopsPage } from '../../pages/loops/loops';
import { IndividualDeviceSettingPage } from '../../pages/individual-device-setting/individual-device-setting';


/**
 * Generated class for the LedtabPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ledtab',
  templateUrl: 'ledtab.html',
})
export class LedtabPage {

  tab1Root = ColorpickersliderPage;
  	tab2Root = WhiteyellowcolorpickerPage;
  	tab3Root = MoodsPage;
  	tab4Root = LoopsPage;
  	tab5Root = LedschedularPage;
  	constructor(public navCtrl: NavController, public navParams: NavParams) {
  	}

  	ionViewDidLoad() {
    	console.log('ionViewDidLoad LedtabPage');
  	}

     individualSettings()
    {
      this.navCtrl.push(IndividualDeviceSettingPage);
    }

  
}
