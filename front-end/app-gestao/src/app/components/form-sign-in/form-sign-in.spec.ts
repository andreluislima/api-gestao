import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSignIn } from './form-sign-in';

describe('FormSignIn', () => {
  let component: FormSignIn;
  let fixture: ComponentFixture<FormSignIn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormSignIn]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormSignIn);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
