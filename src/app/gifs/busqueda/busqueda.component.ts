import { Component, ElementRef, ViewChild} from '@angular/core';
import { GifService } from '../Services/gif.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent  {

  @ViewChild('txtbuscar') txtbuscar!:ElementRef<HTMLInputElement>;

  buscar(){

    const valor= this.txtbuscar.nativeElement.value;

    if (valor.trim().length === 0) {
      return;
    }

    this.GifService.buscarGifs(valor);
    this.txtbuscar.nativeElement.value= '';     
  }
  
  constructor(private GifService:GifService){
    
  }
}
