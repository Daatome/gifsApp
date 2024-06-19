import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'app-gifcard',
  templateUrl: './gifcard.component.html',
  styleUrl: './gifcard.component.css'
})
export class GifcardComponent implements OnInit {

  @Input()
  public gif!: Gif ;

  ngOnInit(): void {
   if(!this.gif) throw new Error('Gif property is needed');
  }

}
