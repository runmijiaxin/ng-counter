import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterComponent ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add 1 when click plus button', () => {
    // given
    component.count = 0;
    const plusBtn = fixture.nativeElement.querySelector('[data-test="plusBtn"]');
    // when
    plusBtn.click();
    fixture.detectChanges();
    // then
    const displayCount = fixture.nativeElement.querySelector('[data-test="displayCount"]')
    expect(displayCount.textContent).toEqual('number: 1')
  });

  it('should substract 1 when click minus button', () => {
    // given
    component.count = 0;
    const minusBtn = fixture.nativeElement.querySelector('[data-test="minusBtn"]');
    // when
    minusBtn.click();
    fixture.detectChanges();
    // then
    const displayCount = fixture.nativeElement.querySelector('[data-test="displayCount"]');
    expect(displayCount.textContent).toEqual('number: -1')
  });

  it('should minus btn disappear when count number less than 0', () => {
    // given
    component.count = -1;
    // when
    fixture.detectChanges();
    // then
    const minusBtn = fixture.nativeElement.querySelector('[data-test="minusBtn"]');
    expect(minusBtn).toBeFalsy();
  });

  it('should plus btn disappear when count number more than 10', () => {
    // given
    component.count = 11;
    // when
    fixture.detectChanges();
    // then
    const plusBtn = fixture.nativeElement.querySelector('[data-test="plusBtn"]');
    expect(plusBtn).toBeFalsy();
  });

  it('should return false when count number less than 0', () => {
    // given
    component.count = -1;
    // when
    expect(component.isLargeOrEqualsThanZero()).toBeFalse();
    // then
  });

  it('should return true when count number less than 0', () => {
    // given
    component.count = 1;
    // when
    expect(component.isLargeOrEqualsThanZero()).toBeTrue();
    // then
  });

  it('should return false when count number larger than 10', () => {
    // given
    component.count = 11;
    // when
    expect(component.isLessOrEqualsThanTen()).toBeFalse();
    // then
  });

  it('should return true when count number less or equals than 10', () => {
    // given
    component.count = 10;
    // when
    expect(component.isLessOrEqualsThanTen()).toBeTrue();
    // then
  });

  it('should count be 0 when click reset btn', () => {
    // given
    component.count = 5;
    fixture.detectChanges();
    const resetBtn = fixture.nativeElement.querySelector('[data-test="resetBtn"]');
    // when
    resetBtn.click();
    fixture.detectChanges();
    const displayCount = fixture.nativeElement.querySelector('[data-test="displayCount"]');
    // then
    expect(displayCount.textContent).toEqual('number: 0')
  });
});
