import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirplanesNovoComponent } from './airplanes-novo.component';

describe('AirplanesNovoComponent', () => {
  let component: AirplanesNovoComponent;
  let fixture: ComponentFixture<AirplanesNovoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirplanesNovoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirplanesNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
