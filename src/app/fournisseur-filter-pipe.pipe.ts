import { Pipe, PipeTransform } from '@angular/core';
import { Fournisseur } from './model/fournisseur';

@Pipe({
  name: 'fournisseurFilterPipe'
})
export class FournisseurFilterPipePipe implements PipeTransform {

  transform(list: Fournisseur[], ...args: unknown[]): unknown {
    return null;
  }

}
