import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-one',
  templateUrl: './dashboard-one.component.html',
  styleUrls: ['./dashboard-one.component.scss'],
})
export class DashboardOneComponent implements OnInit {
  isActive: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  clickMe() {
    this.isActive = true;
  }
}
