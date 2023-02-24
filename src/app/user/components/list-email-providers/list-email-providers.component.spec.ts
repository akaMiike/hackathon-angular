import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEmailProvidersComponent } from './list-email-providers.component';

describe('ListEmailProvidersComponent', () => {
  let component: ListEmailProvidersComponent;
  let fixture: ComponentFixture<ListEmailProvidersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEmailProvidersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEmailProvidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
