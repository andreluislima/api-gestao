import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsereDespesa } from './insere-despesa';

describe('InsereDespesa', () => {
  let component: InsereDespesa;
  let fixture: ComponentFixture<InsereDespesa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsereDespesa]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsereDespesa);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
