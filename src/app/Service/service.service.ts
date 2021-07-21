import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Persona } from '../Modelo/Persona';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  url='/api/listapersona';
  urlAdd='/api/nuevaPersona';
  getPersonas(){
    return this.http.get<Persona[]>(this.url);
  }

  crearPersona(persona: Persona){
    return this.http.post<Persona>(this.urlAdd,persona);
  }
}
