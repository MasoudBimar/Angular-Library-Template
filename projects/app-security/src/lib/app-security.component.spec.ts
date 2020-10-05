import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSecurityComponent } from './app-security.component';

describe('AppSecurityComponent', () => {
  let component: AppSecurityComponent;
  let fixture: ComponentFixture<AppSecurityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppSecurityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
