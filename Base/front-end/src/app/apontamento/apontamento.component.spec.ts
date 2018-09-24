import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApontamentoComponent } from './apontamento.component';

describe('ApontamentoComponent', () => {
  let component: ApontamentoComponent;
  let fixture: ComponentFixture<ApontamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApontamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApontamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
