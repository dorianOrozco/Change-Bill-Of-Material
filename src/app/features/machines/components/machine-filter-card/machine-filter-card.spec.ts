import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineFilterCard } from './machine-filter-card';

describe('MachineFilterCard', () => {
  let component: MachineFilterCard;
  let fixture: ComponentFixture<MachineFilterCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MachineFilterCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MachineFilterCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
