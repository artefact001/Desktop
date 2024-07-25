import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DetailProduitComponent } from '../detail-produit/detail-produit.component';

interface Product {
  title: string;
  price: number;
  description: string;
}

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  imports: [CommonModule, DetailProduitComponent],
  styleUrls: ['./produit.component.css'],
  standalone: true,
})
export class ProduitComponent {
  products: Product[] = [
    {
      title: 'Produit 1',
      price: 10.99,
      description: 'Description du produit 1',
    },
    {
      title: 'Produit 2',
      price: 20.99,
      description: 'Description du produit 2',
    },
    {
      title: 'Produit 3',
      price: 30.99,
      description: 'Description du produit 3',
    },
  ];

  selectedProduct: Product | null = null;

  onSelect(product: Product) {
    this.selectedProduct = product;
  }
}
