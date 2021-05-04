import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajesEditComponent } from './mensajes-edit.component';

describe('MensajesEditComponent', () => {
  let component: MensajesEditComponent;
  let fixture: ComponentFixture<MensajesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensajesEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MensajesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
