import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { person } from 'src/app/model/person';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
@Input() person:person ;
@Output() selectedperson= new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  selectperson(){
this.selectedperson.emit(
  this.person )
  }

}
