import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineImportDrawer } from './machine-import-drawer';

describe('MachineImportDrawer', () => {
  let component: MachineImportDrawer;
  let fixture: ComponentFixture<MachineImportDrawer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MachineImportDrawer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MachineImportDrawer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
