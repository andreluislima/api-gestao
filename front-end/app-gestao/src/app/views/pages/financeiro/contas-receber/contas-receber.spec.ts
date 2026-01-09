import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContasReceber } from './contas-receber';

describe('ContasReceber', () => {
  let component: ContasReceber;
  let fixture: ComponentFixture<ContasReceber>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContasReceber]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContasReceber);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
