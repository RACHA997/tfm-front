import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogMComponent } from './dialog-m.component';

describe('DialogMComponent', () => {
  let component: DialogMComponent;
  let fixture: ComponentFixture<DialogMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
