import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { person } from 'src/app/model/person';


@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss']
})
export class ListeComponent implements OnInit {
 @Input() personnes:person[];
 @Output() selectoneperson= new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  selectperson(selectedperson){
    this.selectoneperson.emit(selectedperson)
   
  }

}
