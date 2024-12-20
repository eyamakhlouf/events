// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'searchFilter'
// })
// export class SearchFilterPipe implements PipeTransform {

//   transform(list: any[], filterText: string): any {
//     return list ? list.filter(item =>
//     item.nomEvenement.toLowerCase().includes(filterText)) : [];
//     }
// }

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(list: any[], filterText: string): any[] {
    if (!list || !filterText) return list;
    
    return list.filter(item => {
      const searchTerm = filterText.toLowerCase();
      const eventNameMatch = item.nomEvenement.toLowerCase().includes(searchTerm);
      return eventNameMatch;
    });
  }
}
