import { Component, Pipe, PipeTransform } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FeedProvider } from '../../providers/feed/feed';


@Pipe({
  name: 'groupBygender'
})
//create a Pipe and implement Pipetranform method to group the data (Best practice is to create a seperate pipe.ts file)
export class GroupByPipe implements PipeTransform {
  transform(collection: Array<any>, property: string = 'gender'): Array<any> {
    if (!collection) {
      return null;
    }
    const gc = collection.reduce((previous, current) => {
      var key = current[property];
      if (!previous[key]) {
        previous[key] = [];
      }
      previous[key].push(current);
      console.log(previous);
      return previous;
    }, {});
    //Return Gender group and people data as child element
    return Object.keys(gc).map(gender => ({ gender: gender, people: gc[gender] }));
  }
}
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  public people: any;
  public events: any;
  constructor(public navCtrl: NavController, public feedprovider: FeedProvider) {

  }
  ionViewDidLoad() {
    this.feedprovider.getFeed().subscribe(data => {
      var allInfo = [];
      for (let res in data) {
        allInfo.push(data[res]);
      }
      this.people = allInfo;
    });
   
  }

}
