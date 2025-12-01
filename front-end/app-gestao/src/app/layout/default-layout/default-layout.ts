import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-default-layout',
  imports: [CommonModule],
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
