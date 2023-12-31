import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterIIPage } from './register-ii.page';

describe('RegisterIIPage', () => {
  let component: RegisterIIPage;
  let fixture: ComponentFixture<RegisterIIPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegisterIIPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
