import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _gifsHistory:string[] = [];

  constructor() { }

  getHistory(){
    return [... this._gifsHistory]//usinf ... is called spread operator and this creates a copy of the array so, we are not sending the actual array. 
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

  searchTag(tag: string):void{

    if(tag.length===0){
      return;
    }

    this.organizeHistory(tag);

    //this._gifsHistory.unshift(tag);

    console.log(this._gifsHistory);
    
  }
}
