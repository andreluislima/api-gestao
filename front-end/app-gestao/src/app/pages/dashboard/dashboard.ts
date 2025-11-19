import { Component, signal } from '@angular/core';
import { SideBar } from "../../components/side-bar/side-bar";

@Component({
  selector: 'app-dashboard',
  imports: [SideBar],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  sidebarOpen = signal(false);

  toggleSidebar(){
    this.sidebarOpen.update((v)=> !v);
  }
}
