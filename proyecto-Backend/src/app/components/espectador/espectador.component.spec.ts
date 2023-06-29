import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspectadorComponent } from './espectador.component';

describe('EspectadorComponent', () => {
  let component: EspectadorComponent;
  let fixture: ComponentFixture<EspectadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EspectadorComponent]
    });
    fixture = TestBed.createComponent(EspectadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
