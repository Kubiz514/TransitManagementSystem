import { Component, OnInit, Input } from '@angular/core';
import { RouteOption } from './models/route-option';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() options!: RouteOption[];

  constructor() { }

  ngOnInit(): void {
  }

}
