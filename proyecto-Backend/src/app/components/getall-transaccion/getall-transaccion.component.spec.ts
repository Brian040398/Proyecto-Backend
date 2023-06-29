import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallTransaccionComponent } from './getall-transaccion.component';

describe('GetallTransaccionComponent', () => {
  let component: GetallTransaccionComponent;
  let fixture: ComponentFixture<GetallTransaccionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetallTransaccionComponent]
    });
    fixture = TestBed.createComponent(GetallTransaccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
