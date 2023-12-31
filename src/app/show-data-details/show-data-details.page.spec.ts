import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShowDataDetailsPage } from './show-data-details.page';

describe('ShowDataDetailsPage', () => {
  let component: ShowDataDetailsPage;
  let fixture: ComponentFixture<ShowDataDetailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ShowDataDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
