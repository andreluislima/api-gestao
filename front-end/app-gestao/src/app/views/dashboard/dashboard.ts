import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  sidebarToggled = false;
  
  toggleSidebar():void{
    this.sidebarToggled = !this.sidebarToggled;
  }
}
