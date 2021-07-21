import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Modelo/Persona';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  persona: Persona | undefined;
  constructor(private router:Router, private service:ServiceService ) { }
  
  ngOnInit(): void {
  }

  Guardar(){
    this.service.crearPersona(this.persona)
    .subscribe(data =>{
      console.log(this.persona);
      alert("Persona Registrada");
      this.router.navigate(["listar"]);
    })
  }
  GuardarPrueba(){
    this.router.navigate(["listar"]);
  }
}
