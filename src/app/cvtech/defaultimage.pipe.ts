import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultimage'
})
export class DefaultimagePipe implements PipeTransform {

  transform(value:string, ...args: any[]): any {
    if (!value){
      return '../../assets/images/rotating_card_thumb3.png'
    }
    else return value ;
  }

}
