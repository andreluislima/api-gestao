import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { Sidebar } from "../../../components/sidebar/sidebar";
import { Dashboard } from "../../views/dashboard/dashboard";

@Component({
  selector: 'app-default-layout',
  imports: [CommonModule, Sidebar, Dashboard],
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
