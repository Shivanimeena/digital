import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aboutus.html',
  styleUrls: ['./aboutus.css'] // ✅ fixed here
})
export class Aboutus {
  selected: 'vision' | 'mission' | 'values' = 'vision';

  select(section: 'vision' | 'mission' | 'values') {
    this.selected = section;
  }
}
