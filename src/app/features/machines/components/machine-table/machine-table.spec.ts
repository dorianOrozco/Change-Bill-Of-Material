import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineTable } from './machine-table';

describe('MachineTable', () => {
  let component: MachineTable;
  let fixture: ComponentFixture<MachineTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MachineTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MachineTable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
