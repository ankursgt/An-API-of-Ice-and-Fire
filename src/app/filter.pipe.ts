import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(cards: any[], searchText: string): any[] { //getting searchText as input from searchbox
    if(!cards) return [];
    if(!searchText) return cards;
searchText = searchText.toLowerCase();
return cards.filter( card => { //filter cards and return
      return card.name.toLowerCase().includes(searchText);
    });
   }

}