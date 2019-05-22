import { Component } from '@angular/core';
import {CatActivityService} from '../services/cat-activity.service';
//import {Subscription} from 'rxjs/Subscription';
import { Subscription } from 'rxjs';
import { isNgTemplate } from '@angular/compiler';
import { insertView } from '@ionic/angular/dist/directives/navigation/stack-utils';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  subscription : Subscription;
  dataList : any=[];
  datarow = 0;
constructor(private catActSV : CatActivityService , private route:Router,private alertController: AlertController){  //เห็นได้แค่เฉพาะคลาสนี้
this.showData(); //นำข้อมูลมาโชว์

}

async presentAlertConfirm(id) {
  const alert = await this.alertController.create({
    header: 'แจ้งตืน!',
    message: 'คุณจะลบหรือไม่!!!',
    buttons: [
      {
        text: 'ยกเลิก',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
          console.log('Confirm Cancel: blah');
        }
      }, {
        text: 'ตกลง',
        handler: () => {
          console.log('Confirm Okay');
          this.Delete(id);
        }
      }
    ]
  });

  await alert.present();
}
showData(){
  this.subscription = this.catActSV.getCatAtivity()
  .subscribe(data =>
    {
      
     this.dataList = data['rs'];
    }
    );
  }

  Add(){
    this.route.navigateByUrl("add");
  }
  edit(Music_name) { 
    this.route.navigate(['/edit',{Music_name : Music_name}]);
  }
  

  Delete(Music_id) {
    
    this.catActSV.del(Music_id).subscribe(
       );
       this.showData();
  }
  /*ngAfterViewInit(){
    this.showData();
  }*/
}
