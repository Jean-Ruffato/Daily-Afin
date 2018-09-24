import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {PerfilService} from "../_services/perfil.service";

@Component({
  selector: 'app-cadastro-perfil',
  templateUrl: './cadastro-perfil.component.html',
  styleUrls: ['./cadastro-perfil.component.css']
})
export class CadastroPerfilComponent implements OnInit {

  perfil: any;

  constructor(private perfilService: PerfilService) { }

  ngOnInit() {
    this.perfil = {};
  }

  criar_perfil(frmp: FormGroup){
    this.perfilService.criar_perfil(this.perfil).subscribe(resposta => {frmp.reset();});
  }

}
