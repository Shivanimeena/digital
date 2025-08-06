import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-marketing',
  imports: [FormsModule , CommonModule],
  templateUrl: './marketing.html',
  styleUrl: './marketing.css'
})
export class Marketing {

  constructor(private http: HttpClient) {}

  onSubmit() {
    const form = document.querySelector('form') as HTMLFormElement;
    const formData = new FormData(form);

    this.http.post('https://formspree.io/f/xgvzkkwr', formData).subscribe({
      next: (response) => {
        alert('Message sent successfully!');
        form.reset();
      },
      error: (error) => {
        console.error('Error:', error);
        alert('Failed to send message. Please try again.');
      }
    });
  }



}
