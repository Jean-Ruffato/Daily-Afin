import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {ApontamentoService} from "../_services/apontamento.service";

@Component({
  selector: 'app-inserir-apontamento',
  templateUrl: './inserir-apontamento.component.html',
  styleUrls: ['./inserir-apontamento.component.css']
})
export class InserirApontamentoComponent implements OnInit {

  apontamento: any;

  constructor(private service: ApontamentoService) { }

  ngOnInit() {
    this.apontamento = {};
  }

  criar(frm: FormGroup){
    this.service.criar(this.apontamento).subscribe(resposta => {frm.reset();});
  }

}
