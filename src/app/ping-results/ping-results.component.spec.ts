import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PingResultsComponent } from './ping-results.component';

describe('PingResultsComponent', () => {
  let component: PingResultsComponent;
  let fixture: ComponentFixture<PingResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PingResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PingResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
