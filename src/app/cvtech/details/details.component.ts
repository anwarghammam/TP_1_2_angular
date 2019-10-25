import { Component, OnInit, Input } from '@angular/core';
import { person } from 'src/app/model/person';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
@Input() selectedperson:person
color 
classe
taille='25px' 
police 

  constructor() { }

  ngOnInit() {
  }
changesize(size){
  this.taille=size+'px'
}
}
