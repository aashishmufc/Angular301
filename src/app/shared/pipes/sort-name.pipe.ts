import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortName'
})
export class SortNamePipe implements PipeTransform {
  compare(currentEle, nextElement) {
    if (currentEle.title < nextElement.title) {
      return -1;
    }
    if (nextElement.title > nextElement.title) {
      return 1;
    }
    return 0;
  }

  transform(moviesList: any, name?: any): any {
    if (name === 'ASC') {
      return moviesList.sort(this.compare);
    } else if (name === 'DES') {
      return moviesList.sort(this.compare).reverse();
    } else {
      return moviesList;
    }
  }
}
