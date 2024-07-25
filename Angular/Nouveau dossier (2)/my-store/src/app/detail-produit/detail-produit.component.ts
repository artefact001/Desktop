import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail-produit',
  templateUrl: './detail-produit.component.html',
  styleUrls: ['./detail-produit.component.css'],
  imports: [CommonModule],
  standalone: true,
})
export class DetailProduitComponent {
  @Input() product?: {
    title: string;
    price: number;
    description: string;
  } | null = null;
}
