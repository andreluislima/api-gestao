import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  sidebarToggled = false;

  toggleSidebar():void{
    this.sidebarToggled = !this.sidebarToggled;
  }
}
