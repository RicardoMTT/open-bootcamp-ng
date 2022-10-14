import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPagegComponent } from './login-pageg.component';

describe('LoginPagegComponent', () => {
  let component: LoginPagegComponent;
  let fixture: ComponentFixture<LoginPagegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginPagegComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPagegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
