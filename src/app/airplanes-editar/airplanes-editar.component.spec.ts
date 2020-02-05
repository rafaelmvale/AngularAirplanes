import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirplanesEditarComponent } from './airplanes-editar.component';

describe('AirplanesEditarComponent', () => {
  let component: AirplanesEditarComponent;
  let fixture: ComponentFixture<AirplanesEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirplanesEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirplanesEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
