import { Component, Input, input } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'app-gifs-list',
  templateUrl: './gifs-list.component.html',
  styleUrl: './gifs-list.component.css'
})
export class GifsListComponent {

  @Input()
  public gifs: Gif[]=[];


  constructor(
     private gifsService:GifsService
  ){}


}
