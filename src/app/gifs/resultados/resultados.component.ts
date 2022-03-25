import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GifService } from '../Services/gif.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styles: [
  ]
})
export class ResultadosComponent  {

  get resultados(){
    return this.GifService.resultados;
  }





  constructor(private GifService:GifService) { }

}
