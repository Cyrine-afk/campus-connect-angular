import { Pipe, PipeTransform } from '@angular/core';
import { Fournisseur } from './models/fournisseur';

@Pipe({
  name: 'fournisseurFilterPipe'
})
export class FournisseurFilterPipePipe implements PipeTransform {

  transform(list: Fournisseur[], searchTxt:string): any {
    if (!list)
      return [];
    if (!searchTxt)
      return list;
    searchTxt = searchTxt.toLocaleLowerCase();

    list = list.filter(f => {
      return f.nomFourn.toLocaleLowerCase().includes(searchTxt);
    });
    return list;
  }

}
