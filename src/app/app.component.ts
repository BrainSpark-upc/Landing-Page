import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isMenuOpen = false;

  form = {
    nombre: '',
    email: '',
    institucion: '',
    mensaje: ''
  };
  testimonials = [
    {
      name: 'Gloria Carbajal',
      post: 'Jefa de enfermeria',
      text:
        'Gracias a Care-Labs ordenar el traspaso de información y reducir confusiones entre turnos es ' +
        'una realidad. La experiencia se siente mas moderna y profesional.'
    },
    {
      name: 'Carlos Ramírez',
      post: 'Coordinador clínico',
      text:
        'Nos gustó mucho la idea porque centraliza la información importante, lo hace flexible a nosotros y permite dar ' +
        'seguimiento sin depender de registros dispersos o no digitalizados adecuadamente.'
    },
    {
      name: 'Lucía Portocarrero',
      post: 'Usuario piloto',
      text:
        'La interfaz es amigable y transmite confianza. Se nota que está pensada para mejorar el trabajo diario del personal de salud.'
    }
  ];

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
      mensaje: ''
    };

    this.isMenuOpen = false;
  }
}
