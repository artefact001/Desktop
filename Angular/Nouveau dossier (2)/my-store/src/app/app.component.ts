import './produit/produit.component.css';
import './detail-produit/detail-produit.component.css';
import { Component } from '@angular/core';

import { ProduitComponent } from './produit/produit.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProduitComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'my-store';
}
