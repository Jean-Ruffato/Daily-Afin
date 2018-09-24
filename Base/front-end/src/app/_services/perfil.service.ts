import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UserService} from "./user.service";

@Injectable({
    providedIn: 'root'
  })

export class PerfilService {

  perfilUrl = 'api/perfis/';

  constructor(private http: HttpClient, private _userService: UserService) {}


  // Listar os perfis dos usuários
  listar_perfil(){
    return this.http.get<Array<any>>(this.perfilUrl);
  }



  // Cria o perfil do usuário
  criar_perfil(perfil: any){
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'JWT ' + this._userService.token
      })
    };
    return this.http.post(this.perfilUrl, JSON.stringify(perfil), httpOptions);
  }

}
