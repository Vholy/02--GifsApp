import { Component } from '@angular/core';
import { GifService } from '../../gifs/Services/gif.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent  {

  get historial(){
    return this.GifService.historial
  }

  sidebarclick(argumento:string){
  this.GifService.buscarGifs(argumento);         
  }

  constructor(private GifService:GifService){}
}
