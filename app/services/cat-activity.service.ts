import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'  //อิงมาจากrootหน้าแรก
})
export class CatActivityService {
  apiUrl : string ="http://localhost/Test/process/crud_cateactivity.php"; //Url ที่จะคอลไป

  constructor(public http: HttpClient) {  //ถูกทำงานก่อนอันดับแรกเสมอ
   

   } 

   
   getCatAtivity(){
    const header = {'Content-Type': 'application/json'};
    let data = {
      'cmd' : 'select'
    }
    return this.http.post(this.apiUrl,data, {headers: header});
  }

  get(Music_id : any){
    const header = {'Content-Type': 'application/json'};
    let data = {
      'cmd' : 'selectone',
      'Music_id' : Music_id
    }
    return this.http.post(this.apiUrl,data, {headers: header});
  }
  
  insert( Music_name: string, Band: any){
    const header = { 'Content-Type': 'application/json' };
    let data = {
      'cmd' : 'insert',
      'Music_name': Music_name,
      'Band': Band
      
    }
    return this.http.post(this.apiUrl, data, { headers: header });
  }

  del( Music_id : any){
    const header = { 'Content-Type': 'application/json' };
    let data = {
      'cmd' : 'delete',
      'Music_id' : Music_id
    }
    return this.http.post(this.apiUrl, data, { headers: header });
  }
  
  edit( Music_id: any , Music_name: string, Band:any	){
    const header = { 'Content-Type': 'application/json' };
    let data = {
      'cmd' : 'edit',
      'Music_id' : Music_id ,
      'Music_name': Music_name,
      'Band': Band,
     
    }
    return this.http.post(this.apiUrl, data, { headers: header });
  }
}
