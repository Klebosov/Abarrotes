// src/app/homepage/homepage.component.ts (o cualquier otro .ts con nav)
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';  // ← Agrega esto

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    RouterLink,          // ← Agrega aquí
    // Si usas routerLinkActive, también: RouterLinkActive
    // Otros imports que ya tengas (si usas CommonModule para *ngIf, etc., agrégalo también)
  ],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css'
})
export class Homepage {
  // ...
}