import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: any[], search1: string, search2: string, search3: string): any[] {
    if (!items) return [];

    search1 = (search1 || '').toLowerCase();
    search2 = (search2 || '').toLowerCase();
    search3 = (search3 || '').toLowerCase();

    return items.filter(item =>
      (!search1 || item.title.toLowerCase().includes(search1)) &&
      (!search2 || item.author.toLowerCase().includes(search2)) &&
      (!search3 || item.publisher.toLowerCase().includes(search3))
    );
  }

}
