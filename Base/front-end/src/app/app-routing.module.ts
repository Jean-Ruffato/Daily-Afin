import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {ApontamentoComponent} from "./apontamento/apontamento.component";
import {InserirApontamentoComponent} from "./inserir-apontamento/inserir-apontamento.component";
import {CadastroPerfilComponent} from "./cadastro-perfil/cadastro-perfil.component";
import { LoadComponent } from "./load/load.component";

const routes: Routes = [
  { path: '' , component: HomeComponent},
  { path: 'carregando', component: LoadComponent },
  { path: 'apontamento' , component: ApontamentoComponent},
  { path: 'inserir-apontamento' , component: InserirApontamentoComponent},
  { path: 'cadastro-perfil' , component: CadastroPerfilComponent}

];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}
