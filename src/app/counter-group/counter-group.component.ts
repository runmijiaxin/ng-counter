import { Component, OnInit } from '@angular/core';
import { Counter } from '../models/counter.model';

@Component({
  selector: 'app-counter-group',
  templateUrl: './counter-group.component.html',
  styleUrls: ['./counter-group.component.scss']
})
export class CounterGroupComponent implements OnInit {
  counters: Counter[] = []

  constructor() { }

  ngOnInit(): void {
  }

  doCreateCounter(): void { 
    this.counters.push(new Counter(0));
  }

  sumCounts(): number { 
    let total = 0;
    for (const counter of this.counters) { 
      total += counter.count;
    }
    return total;
  }

}
