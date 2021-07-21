import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Modelo/Persona';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  constructor(private service:ServiceService ,private router:Router) { }
  personas!: Persona[];
  ngOnInit() {
    this.service.getPersonas()
    .subscribe(data =>{
      this.personas = data;
    })
  }

}
