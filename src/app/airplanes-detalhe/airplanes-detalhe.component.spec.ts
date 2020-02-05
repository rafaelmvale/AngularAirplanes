import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirplanesDetalheComponent } from './airplanes-detalhe.component';

describe('AirplanesDetalheComponent', () => {
  let component: AirplanesDetalheComponent;
  let fixture: ComponentFixture<AirplanesDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirplanesDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirplanesDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
