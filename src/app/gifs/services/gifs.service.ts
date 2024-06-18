import { HttpClient, HttpParams, provideHttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService  {

  public gifList: Gif[]=[]

  private _gifsHistory:string[] = [];
  private gifsApiKey : string='mF5RlbL6cPkajxJMId3KNT1qjIScYZim';
  private serviceURL : string= 'https://api.giphy.com/v1/gifs';
  constructor(
    private http: HttpClient
  ) {
    this.loadLocalStorage();


   }


  loadLocalStorage() {
    if(!localStorage.getItem('history'))return;


    this._gifsHistory= JSON.parse(localStorage.getItem('history') !);
    if(this._gifsHistory){
      this.searchTag(this._gifsHistory[0]);
    }
  }

  getHistory(){
    return [... this._gifsHistory]//using '...' is called spread operator and this creates a copy of the array so, we are not sending the actual array.
  }

  private organizeHistory(tag:string){
    tag= tag.toLowerCase();


    if(this._gifsHistory.includes(tag)){//checking if the tag is already in the history
      this._gifsHistory=this._gifsHistory.filter((item)=> item!==tag); //we are removing the element with the given tag
      this._gifsHistory.unshift(tag);//adding the tag so it appears in the start again
    }
    else{
     this._gifsHistory.unshift(tag);

    }
  }
  private saveLocalStorage():void{
    localStorage.setItem('history',JSON.stringify(this._gifsHistory));
  }

  searchTag(tag: string):void{

    if(tag.length===0){
      return;
    }

    this.organizeHistory(tag);

    //this._gifsHistory.unshift(tag);

    const params = new HttpParams()
    .set('api_key',this.gifsApiKey)
    .set('q',tag)
    .set('limit',10);

    //get is generic so we can define the type of the response
    this.http.get<SearchResponse>(`${this.serviceURL}/search`,{params:params})
    .subscribe(resp=>{
      // console.log(resp.data);//now we can access to the data easier
      this.gifList=resp.data;
    })

    this.saveLocalStorage();
  }
}
