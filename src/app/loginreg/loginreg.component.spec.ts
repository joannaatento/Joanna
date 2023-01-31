import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginregComponent } from './loginreg.component';

describe('LoginregComponent', () => {
  let component: LoginregComponent;
  let fixture: ComponentFixture<LoginregComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginregComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
