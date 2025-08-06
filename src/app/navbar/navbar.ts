
import { Component,  } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';





@Component({
  selector: 'app-navbar',
  imports: [RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  
   constructor(private router: Router) {}

  navigateTo(page: string) {
    this.router.navigate(['/' + page]);
  }

}

  

  
