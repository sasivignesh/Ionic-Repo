import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Uid } from '@ionic-native/uid/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { AlertController } from '@ionic/angular';
import { Network } from '@ionic-native/network/ngx';
import {Platform} from '@ionic/angular';




declare var navigator: any;
declare var Connection: any;
declare var conne:any;

//declare var NetworkInterface:any;
//declare var ARP:any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
	id:string;
	add:string;

	

	constructor(private inAppBrowser:InAppBrowser,public uid: Uid, private androidPermissions: AndroidPermissions,public alertController: AlertController,public plt :Platform,){//this.id='38 a4 ed 57 4e ed';

	//this.plt=plt;

	
/*
	var refreshCacheBeforeFetch = true;
	var app = {

	   initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event - No such thing will happen :D
    receivedEvent: function(id) {
        app.runPlugin();
    },
    */

	/*	this.plt.ready().then((readySource) => {
		console.log('Platform ready from', readySource);


			ARP.getRawCache(function(resp) {
		    console.log(resp);
		    // Output
		    
		    //    "IP address       HW type     Flags       HW address            Mask     Device
		    //    192.168.1.26     0x1         0x2         e4:02:9b:5a:d1:ba     *        wlan0
		    //   192.168.1.11     0x1         0x2         08:11:96:9c:64:d0     *        wlan0
		   
		}, function(err) {
		    console.log(err);
		});



        // Platform now ready, execute any required native code
		});

	*/

}
	



	
	 

	//id='chzg';
	 

	async openWebPage(){
		const target  ='_blank';
		const options= {location :'no'};
		const refLink= this.inAppBrowser.create('192.168.0.1',target);
		//refLink.on('loadstop').subscribe(event => {
   		//refLink.insertCSS({ code: "body{color: red;" });
		//});

                                 
		refLink.show()
		//const browser = this.inAppBrowser.create('www.youtube.com','_blank');
		//window.open = cordova.InAppBrowser.open;
		/*
		browser.executeScript();

		browser.insertCSS();
		browser.on('loadstop').subscribe(event => {
   		browser.insertCSS({ code: "body{color: red;" });
		});
		*/
	}

	async getMac() {
		var temp={};
 			const { hasPermission } = await this.androidPermissions.checkPermission(
  		 	this.androidPermissions.PERMISSION.READ_PHONE_STATE
		 );

 		if (!hasPermission) {
 		  	const result = await this.androidPermissions.requestPermission(
    		 this.androidPermissions.PERMISSION.READ_PHONE_STATE
  		);

  		if (!result.hasPermission) {
     		throw new Error('Permissions required');
  		 }

   		return;
 		}
 		return this.uid.MAC;
  		this.id= this.uid.MAC;
  		temp=this.uid.MAC;
  		//conne=this.uid.MAC;
  		//this.presentAlert();
	}

	async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Your mac address',
      message: this.getMac() ,  //this.getMac()
      buttons: ['OK']
    });

    await alert.present();
  }
  	
  	async postAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: ' Your MAC Address',
      message: 'Wifi Connection' ,  //this.getMac()
      buttons: ['OK']
    });

    await alert.present();
  }
  






    async checkConnection() {
    	this.plt.ready().then(()=>{
    		var networkState = navigator.connection.type;
	   	 	var states = {};
	   	 	states[Connection.UNKNOWN]  = 'Unknown connection';
		    states[Connection.ETHERNET] = 'Ethernet connection';
		    states[Connection.WIFI]     = 'WiFi connection';
		    states[Connection.CELL_2G]  = 'Cell 2G connection';
		    states[Connection.CELL_3G]  = 'Cell 3G connection';
		    states[Connection.CELL_4G]  = 'Cell 4G connection';
		    states[Connection.CELL]     = 'Cell generic connection';
		    states[Connection.NONE]     = 'No network connection';

		    
		        this.alertController.create({
		    	header:"connection status",
		    	subHeader: states[networkService] ,  
		    	buttons:['OK']

		    });

		        console.log("alert closed");


    	});

    	
 	}

	    

		    //alert('Connection type: ' + states[networkState]);
		    //this.add=states[networkState]
		   /* 

		    this.add=states[networkState];
		    console.log(states[networkState]);
			const alert =this.alertController.create({
		    header: 'Alert',
		    subHeader: ' ',
		    message:  'Connection type'+states[networkState],  //this.getMac()
		    buttons: ['OK']
		    })

			
		   
		
    
		


	}

*/
}
