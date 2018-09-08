import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionaUsuarioComponent } from './adiciona-usuario.component';

describe('AdicionaUsuarioComponent', () => {
  let component: AdicionaUsuarioComponent;
  let fixture: ComponentFixture<AdicionaUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdicionaUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionaUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
