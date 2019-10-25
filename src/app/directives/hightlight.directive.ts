import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHightlight]'
})
export class HightlightDirective {
  tableau=[
    'blue',
    'red',
    'gold',
    'pink',
    'green',
    'grey',
    'purple',
    'coral'
  ] ;
  @HostBinding('style.color') color ;
  @HostBinding('style.borderColor') border ;
  
  constructor() { }
  @HostListener('keydown')
   keydown(){
    const index =Math.floor(Math.random()*(this.tableau.length-1))
    this.color=this.tableau[index]
    this.border=this.tableau[index]
  }
}
