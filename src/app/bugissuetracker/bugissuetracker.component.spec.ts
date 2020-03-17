import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BugissuetrackerComponent } from './bugissuetracker.component';

describe('BugissuetrackerComponent', () => {
  let component: BugissuetrackerComponent;
  let fixture: ComponentFixture<BugissuetrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BugissuetrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BugissuetrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
