import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfProjectComponent } from './self-project.component';

describe('SelfProjectComponent', () => {
  let component: SelfProjectComponent;
  let fixture: ComponentFixture<SelfProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelfProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
