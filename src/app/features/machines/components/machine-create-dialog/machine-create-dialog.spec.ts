import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineCreateDialog } from './machine-create-dialog';

describe('MachineCreateDialog', () => {
  let component: MachineCreateDialog;
  let fixture: ComponentFixture<MachineCreateDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MachineCreateDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MachineCreateDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
