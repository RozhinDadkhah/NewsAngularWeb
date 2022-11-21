import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinesNewsComponent } from './busines-news.component';

describe('BusinesNewsComponent', () => {
  let component: BusinesNewsComponent;
  let fixture: ComponentFixture<BusinesNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinesNewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinesNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
