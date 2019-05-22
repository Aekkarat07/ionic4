import { Component, OnInit } from '@angular/core';
import {CatActivityService} from '../services/cat-activity.service';
//import {Subscription} from 'rxjs/Subscription';
import { Subscription } from 'rxjs';
import {Router , ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  subscription : Subscription;
  dataList : any = [];
  dataRow = 0;
  Music_id : string;

  constructor(private catActSV : CatActivityService ,private route:Router,private router: ActivatedRoute) {
    this.showData(); 
  }
  showData(){
    let Music_id = this.Music_id = (this.router.snapshot.paramMap.get('Music_id'));
    this.subscription=this.catActSV.get(Music_id)
    .subscribe(
      data =>{
        this.dataList = data['rs'];
      }
    )
  }

  edit(form) {
    let Music_id = this.Music_id = (this.router.snapshot.paramMap.get('Music_id'));
    let Music_name = form.Music_name;
    let Band = form.Band;
    
    this.catActSV.edit(Music_id , Music_name, Band).subscribe(
      
       );
       this.route.navigateByUrl("home");
       console.log(Music_id  + Music_name + Band);
       
  }

  ngOnInit() {
  }

}