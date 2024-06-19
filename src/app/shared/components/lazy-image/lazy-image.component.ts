import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrl: './lazy-image.component.css'
})
export class LazyImageComponent implements OnInit {


  @Input()
  public url!:String;

  @Input()
  public alt:String ='';

  public hasLoaded:boolean =false;


  ngOnInit(): void {
    if(!this.url)throw new Error('No url found.');
  }

  public onLoad(){
    this.hasLoaded=true;
  }
}
