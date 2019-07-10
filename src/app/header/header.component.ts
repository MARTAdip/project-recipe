import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() featureSelected = new EventEmitter<string>();
// we can listen to this event from the parent component

  constructor() { }

  ngOnInit() {

  }
  onToggleComponent(feature: string){
    this.featureSelected.emit(feature);
  }
}
