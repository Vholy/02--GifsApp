import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Gif } from '../../Interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})

export class GifService {
  private apiKey     : string ='mJqzdYUagejHg1sQRr0JFIt0iln8oQRh';
  private URLservice : string ='https://api.giphy.com/v1/gifs';
  private _historial : string[] =[];
  public resultados  : Gif[] = [];
  
  

  get historial() {
    return [...this._historial];
  };


  constructor (private http: HttpClient){

    if (localStorage.getItem('historial')){
      this._historial= JSON.parse(localStorage.getItem('historial')! );
      this.http.get<SearchGifsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=mJqzdYUagejHg1sQRr0JFIt0iln8oQRh&q=${this.historial[0]}&limit=15`)
      .subscribe( (resp)=> {
        console.log(resp);
        this.resultados= resp.data;
        
      })
    }



  }

  


  buscarGifs(query:string= ''){
    query = query.trim().toLocaleLowerCase();

    if (!this._historial.includes( query)){
      this._historial.unshift(query);
      this._historial = this._historial.splice(0,14);     
      localStorage.setItem('historial', JSON.stringify(this._historial) ) //grabar en storage
    }
    
    const params = new HttpParams()
    .set('api_key',this.apiKey)
    .set('limit','10')
    .set('query', query); 
    

    
    /* Este no */this.http.get<SearchGifsResponse>(`${this.URLservice}/search`,{params}) //`${this.URLservice}/search`,{params}
    //Este anda//this.http.get<SearchGifsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=mJqzdYUagejHg1sQRr0JFIt0iln8oQRh&q=${query}&limit=10`) 
    .subscribe( (resp)=> {
      console.log(resp);
      this.resultados= resp.data;
      
    })


  };



 /* fetch('https://api.giphy.com/v1/gifs/search?api_key=mJqzdYUagejHg1sQRr0JFIt0iln8oQRh&q=dragonball&limit=10')
      .then(resp=> {
        resp.json().then(data=>{
           console.log(data);
        })
 )*/ /* Peticion http JS */

    

  


 

  

}
