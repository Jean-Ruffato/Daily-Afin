import { Component, OnInit } from '@angular/core';
import {ApontamentoService} from "../_services/apontamento.service";
import "rxjs-compat/add/operator/first";
import {Router} from "@angular/router";

@Component({
 selector: 'app-apontamento',
  templateUrl: './apontamento.component.html',
  styleUrls: ['./apontamento.component.css']
})
export class ApontamentoComponent implements OnInit {

  apontamentos: any;
  usuario: any;

  constructor(private service: ApontamentoService, private router: Router) {
  }

  onEditComplete(evento, evento2, evento3, evento4, evento5, evento6, evento7, evento8, evento9, evento10, evento11){
    this.service.updateApontamento(evento, evento2, evento3, evento4, evento5, evento6, evento7, evento8, evento9, evento10, evento11).subscribe(resposta => {});
    this.router.navigate(['carregando']);
  }

  onClick(evento){
    this.service.deleteApontamento(evento).subscribe(resposta => {});
    this.router.navigate(['carregando']);
  }

  onClickCreate(evento, evento2, evento3, evento4){
    this.service.createApontamento(evento, evento2, evento3, evento4).subscribe(resposta => {});
    this.router.navigate(['carregando']);
  }

  ngOnInit() {
    this.service.getApontamentos().then(apontamentos => this.apontamentos = apontamentos);
    this.service.getPerfil().then(usuario => this.usuario = usuario);
  }
}




