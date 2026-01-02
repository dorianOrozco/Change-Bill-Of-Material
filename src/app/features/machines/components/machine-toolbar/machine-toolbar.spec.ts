import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineToolbar } from './machine-toolbar';

describe('MachineToolbar', () => {
  let component: MachineToolbar;
  let fixture: ComponentFixture<MachineToolbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MachineToolbar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MachineToolbar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
