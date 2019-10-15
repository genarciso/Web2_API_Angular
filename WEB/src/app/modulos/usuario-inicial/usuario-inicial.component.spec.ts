import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioInicialComponent } from './usuario-inicial.component';

describe('UsuarioInicialComponent', () => {
  let component: UsuarioInicialComponent;
  let fixture: ComponentFixture<UsuarioInicialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioInicialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
