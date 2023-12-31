import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShowDataPage } from './show-data.page';

describe('ShowDataPage', () => {
  let component: ShowDataPage;
  let fixture: ComponentFixture<ShowDataPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ShowDataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
