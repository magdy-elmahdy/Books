import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchStudent'
})
export class SearchStudentPipe implements PipeTransform {

  transform(items: any[], search1: string, search2: string, search3: string): any[] {
    if (!items) return [];

    search1 = (search1 || '').toLowerCase();
    search2 = (search2 || '').toLowerCase();
    search3 = (search3 || '').toLowerCase();

    return items.filter(item =>
      (!search1 || item.fullname.toLowerCase().includes(search1)) &&
      (!search2 || item.email.toLowerCase().includes(search2)) &&
      (!search3 || item.username.toLowerCase().includes(search3))
    );
  }

}
