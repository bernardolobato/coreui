import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDoWillComponent } from './lista-do-will.component';

describe('ListaDoWillComponent', () => {
  let component: ListaDoWillComponent;
  let fixture: ComponentFixture<ListaDoWillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaDoWillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDoWillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
