import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBirthdaysComponent } from './list-birthdays.component';

describe('ListBirthdaysComponent', () => {
  let component: ListBirthdaysComponent;
  let fixture: ComponentFixture<ListBirthdaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBirthdaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBirthdaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
