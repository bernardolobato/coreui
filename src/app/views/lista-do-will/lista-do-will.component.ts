import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-do-will',
  templateUrl: './lista-do-will.component.html',
  styleUrls: ['./lista-do-will.component.scss']
})
export class ListaDoWillComponent {

  constructor() { }

  isCollapsed: boolean = false;
  iconCollapse: string = 'icon-arrow-up';

  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
    this.iconCollapse = this.isCollapsed ? 'icon-arrow-down' : 'icon-arrow-up';
  }
}
