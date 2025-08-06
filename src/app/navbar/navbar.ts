import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,  // Required for standalone components
  imports: [RouterModule],  // Enables routerLink in template
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  constructor(private router: Router) {}  // Correct injection

  navigateTo(page: string) {
    this.router.navigate(['/' + page]);
  }
}