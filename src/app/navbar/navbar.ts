import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';



@Component({
  selector: 'app-navbar',
  imports: [CommonModule , RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
   constructor(private router: Router) {}
  menuActive = false;
  showServices = false;

   toggleMenu() {
    this.menuActive = !this.menuActive;
  }

  

  navigateToMarketing() {
    this.router.navigate(['\marketing\marketing.ts']);
  }
}
