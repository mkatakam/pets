import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FeedProvider } from '../../providers/feed/feed';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  public people: any;
  public petsAll: any;

  constructor(public navCtrl: NavController, public feedprovider: FeedProvider) {

  }
  ionViewDidLoad(){
    this.feedprovider.getFeed().subscribe(data =>{
      console.log(data);
      var allInfo = [];
      var petfind = [];
      for(let res in data){       
        allInfo.push(data[res]);
        petfind.push(data[res].pets);      
      }
    
      this.people = allInfo;
      console.log(allInfo);
    });
  }

}
