import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserService } from './_services/user.service';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { TabViewModule } from 'primeng/tabview';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartModule} from 'primeng/chart';
import { ApontamentoComponent } from './apontamento/apontamento.component';
import { CalendarModule} from 'primeng/calendar';
import { InserirApontamentoComponent } from './inserir-apontamento/inserir-apontamento.component';
import { InputMaskModule} from 'primeng/inputmask';
import { InputTextareaModule} from 'primeng/inputtextarea';
import { PaginatorModule} from 'primeng/paginator';
import { ApontamentoService} from './_services/apontamento.service';
import { CadastroPerfilComponent} from "./cadastro-perfil/cadastro-perfil.component";
import { PerfilService} from "./_services/perfil.service";
import { ReactiveFormsModule } from '@angular/forms';
import { GridModule } from '@progress/kendo-angular-grid';
import { HttpClientJsonpModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule} from 'primeng/button';
import { ToastModule} from 'primeng/toast';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { LoadComponent } from './load/load.component';


@NgModule({
  declarations: [AppComponent, CadastroPerfilComponent, HomeComponent, ApontamentoComponent, InserirApontamentoComponent, LoadComponent],
  imports: [BrowserModule, PaginationModule, ToastModule, HttpClientJsonpModule, ButtonModule, BrowserAnimationsModule,ReactiveFormsModule, GridModule, PaginatorModule, InputTextareaModule, InputMaskModule, FormsModule, HttpClientModule, AppRoutingModule, TabViewModule, InputTextModule,
    TableModule, ChartModule, CalendarModule, NgbModule.forRoot()],
  providers: [UserService, ApontamentoService, PerfilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
