import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  isMenuOpen = false;

  form = {
    nombre: '',
    email: '',
    institucion: '',
    mensaje: '',
  };

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  submitForm(): void {
    console.log('Formulario enviado:', this.form);
    alert('Gracias por tu mensaje. Nos pondremos en contacto pronto.');

    this.form = {
      nombre: '',
      email: '',
      institucion: '',
      mensaje: '',
    };

    this.isMenuOpen = false;
  }
}
