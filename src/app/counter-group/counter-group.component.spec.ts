import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Counter } from '../models/counter.model';

import { CounterGroupComponent } from './counter-group.component';

describe('CounterGroupComponent', () => {
  let component: CounterGroupComponent;
  let fixture: ComponentFixture<CounterGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterGroupComponent ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CounterGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add counter when click create counter button', () => {
    // give
    component.counters = [];
    // when
    component.doCreateCounter();
    // then
    expect(component.counters.length).toEqual(1);
  });

  it('should return counter group sum when sumCounts', () => {
    // given
    component.counters = [new Counter(1), new Counter(2)];
    // when
    const total = component.sumCounts();
    // then
    expect(total).toEqual(3);
  });
});
