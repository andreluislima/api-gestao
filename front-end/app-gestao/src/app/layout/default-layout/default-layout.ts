import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
 import { Dashboard } from "../../views/dashboard/dashboard";
import { Sidebar } from "../../../components/sidebar/sidebar";
 
@Component({
  selector: 'app-default-layout',
  imports: [CommonModule, Dashboard, Sidebar],
  templateUrl: './default-layout.html',
  styleUrl: './default-layout.scss',
  encapsulation: ViewEncapsulation.None
})
export class DefaultLayout {
  sidebarToggled = false;

  toggleSidebar():void{
    this.sidebarToggled = !this.sidebarToggled;
  }
   
}
