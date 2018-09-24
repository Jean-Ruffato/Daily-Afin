import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UserService} from "./user.service";
import "rxjs-compat/add/operator/map";

@Injectable({
  providedIn: 'root'
})

export class ApontamentoService {

  atividadesUrl = ('api/apontamento/');

  constructor(private http: HttpClient, private _userService: UserService) {}

  // Pega as questions na API
  getApontamentos(){
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'JWT ' + this._userService.token
      })
    };
    return this.http.get('/api/apontamento/', httpOptions)
      .toPromise()
      .then(apontamentos => apontamentos)
      .then(data => { return data; });
  }

  var;nome: any = this._userService.username;

  // Pega as questions na API
  getPerfil(){
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'JWT ' + this._userService.token
      })
    };
    return this.http.get('/api/perfis/' + this._userService.username + '/', httpOptions)
      .toPromise()
      .then(usuario => usuario)
      .then(data => { return data; });
  }

// Atualiza uma question na API
  updateApontamento(evento, evento2, evento3, evento4, evento5, evento6, evento7, evento8, evento9, evento10, evento11){
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'JWT ' + this._userService.token
      })
    };

    return this.http.put('/api/apontamentos/' + evento + '/', JSON.stringify({ nome: evento2,
      matricula: evento3, inicio: evento4, fim: evento5, duracao: evento6, departamento: evento7, classificacao: evento8,
    processo: evento9, detalhamento: evento10, observacao: evento11}), httpOptions);
  }

  createApontamento(evento, evento2, evento3, evento4){
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'JWT ' + this._userService.token
      })
    };
    return this.http.post('/api/apontamentos/' + evento + '/', JSON.stringify(
      { nome: evento4, departamento: evento2, matricula: evento3 }), httpOptions);
  }

  // Deleta
  deleteApontamento(evento){
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'JWT ' + this._userService.token
      })
    };
    return this.http.delete('/api/apontamentos/' + evento + '/', httpOptions);
  }

  criar(apontamento: any){
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'JWT ' + this._userService.token
      })
    };
    return this.http.post(this.atividadesUrl, JSON.stringify(apontamento), httpOptions);
  }

}

