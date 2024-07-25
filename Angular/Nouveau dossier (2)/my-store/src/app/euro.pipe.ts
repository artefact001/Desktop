import { Pipe, PipeTransform } from '@angular/core';
import { Routes } from '@angular/router';
import { ProduitComponent } from './produit/produit.component';
import { DetailProduitComponent } from './detail-produit/detail-produit.component';

@Pipe({
  name: 'euro',
})
export class EuroPipe implements PipeTransform {
  transform(value: number): string {
    return value.toFixed(2) + ' €';
  }
}
export const routes: Routes = [
  { path: 'produits', component: ProduitComponent },
  { path: 'detail-produit', component: DetailProduitComponent },
  { path: '', redirectTo: '/produits', pathMatch: 'full' },
];
