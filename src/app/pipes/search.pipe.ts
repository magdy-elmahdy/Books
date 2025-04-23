import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items:any[] , term:any): any {
    if(term == undefined){
      return items;
    }

    return items.filter(function(items){
      if(items.kidsName!=null){
        return items.kidsName.toLowerCase().includes(term.toLowerCase())
      }else if(items.name!=null){
        return items.name.toLowerCase().includes(term.toLowerCase())
      }else if(items.parentName!=null){
        return items.parentName.toLowerCase().includes(term.toLowerCase())
      }
  })


  }

}
