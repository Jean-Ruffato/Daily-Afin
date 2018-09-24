import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InserirApontamentoComponent } from './inserir-apontamento.component';

describe('InserirApontamentoComponent', () => {
  let component: InserirApontamentoComponent;
  let fixture: ComponentFixture<InserirApontamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InserirApontamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InserirApontamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
