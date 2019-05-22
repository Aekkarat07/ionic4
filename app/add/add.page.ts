import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CatActivityService} from '../services/cat-activity.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  constructor(private catActSV : CatActivityService ,private route:Router) { }
 
  ngOnInit() {
  }
  insert(form) {
    let Music_id = form.Music_id;
    let Music_name = form.Music_name;
    let Band = form.Band;
    
    
    this.catActSV.insert(Music_id, Music_name,).subscribe(
      
       );
       this.route.navigateByUrl("home");
       
  }

  }


