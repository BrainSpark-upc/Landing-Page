import { Injectable, signal } from '@angular/core';

export type Language = 'es' | 'en';

@Injectable({
  providedIn: 'root',
})
export class I18nService {
  private readonly defaultLang: Language = 'es';
  currentLang = signal<Language>(this.defaultLang);

  constructor() {
    const savedLang = localStorage.getItem('app_lang') as Language;
    if (savedLang === 'es' || savedLang === 'en') {
      this.currentLang.set(savedLang);
    }
  }

  get language() {
    return this.currentLang();
  }

  setLanguage(lang: Language) {
    this.currentLang.set(lang);
    localStorage.setItem('app_lang', lang);
  }

  toggleLanguage() {
    this.setLanguage(this.currentLang() === 'es' ? 'en' : 'es');
  }

  private translations: Record<Language, Record<string, string>> = {
    es: {
      'nav.how-it-works': '¿Cómo funciona?',
      'nav.features': 'Características',
      'nav.benefits': 'Beneficios',
      'nav.faq': 'Preguntas frecuentes',
      'nav.contact': 'Contacto',
      'nav.testimonials': 'Testimonios',
      'nav.about-us': 'Nosotros',
      'cta.demo': 'Solicitar demo',
      'cta.how-it-works': 'Ver cómo funciona',
      
      'hero.title': 'Comunicación clínica y trazabilidad en tiempo real',
      'hero.subtitle': 'Digitaliza traspasos SBAR, seguimiento clínico, signos vitales y eventos críticos en una plataforma segura, accesible y ordenada.',
      
      'problem.title': '¿Por qué PulseReport?',
      'problem.desc': 'En muchos entornos clínicos, la información todavía se registra en medios dispersos, lo que dificulta la continuidad asistencial, la trazabilidad de eventos críticos y la comunicación entre turnos. PulseReport ayuda a centralizar procesos esenciales de enfermería cardiovascular y mejorar la seguridad del paciente.',
      
      'steps.title': 'Así funciona en 3 pasos',
      'steps.1.title': '1. Registrar',
      'steps.1.desc': 'Digitaliza traspasos SBAR, signos vitales, tratamientos y datos básicos del paciente en un solo lugar.',
      'steps.2.title': '2. Monitorear',
      'steps.2.desc': 'Consulta información clínica en tiempo real para dar seguimiento más ordenado y oportuno a cada caso.',
      'steps.3.title': '3. Trazar',
      'steps.3.desc': 'Mantén un historial de eventos y acciones con auditoría inalterable para mejorar control, seguridad y continuidad.',
      
      'features.title': 'Características clave',
      'features.1.title': 'SBAR digital',
      'features.1.desc': 'Estandariza el traspaso de información entre turnos y áreas asistenciales.',
      'features.2.title': 'Gestión básica de pacientes',
      'features.2.desc': 'Organiza datos esenciales del paciente para una atención más clara y estructurada.',
      'features.3.title': 'Seguimiento de tratamientos',
      'features.3.desc': 'Registra y consulta tratamientos para mejorar la continuidad del cuidado.',
      'features.4.title': 'Monitoreo de signos vitales',
      'features.4.desc': 'Lleva control clínico básico con información disponible en tiempo real.',
      'features.5.title': 'Historial clínico digital',
      'features.5.desc': 'Centraliza la información relevante para una mejor consulta y seguimiento.',
      'features.6.title': 'Log de auditoría inalterable',
      'features.6.desc': 'Mantén trazabilidad de eventos críticos y acciones dentro de la plataforma.',

      'benefits.title': 'Beneficios',
      'benefits.1': 'Mejora la comunicación entre turnos y áreas asistenciales.',
      'benefits.2': 'Reduce el riesgo de omisiones en procesos clínicos críticos.',
      'benefits.3': 'Facilita la trazabilidad y el seguimiento de eventos importantes.',
      'benefits.4': 'Organiza la información médica en tiempo real.',
      'benefits.5': 'Contribuye a una atención más confiable, ordenada y oportuna.',
      'benefits.tag.1': 'Seguro',
      'benefits.tag.2': 'escalable',
      'benefits.tag.3': 'En tiempo real',

      'faq.title': 'Preguntas frecuentes',
      'faq.1.q': '¿PulseReport está orientado solo a enfermería cardiovascular?',
      'faq.1.a': 'Está pensado especialmente para ese entorno, pero su estructura puede adaptarse a otros contextos clínicos especializados.',
      'faq.2.q': '¿La información puede consultarse en tiempo real?',
      'faq.2.a': 'Sí, la plataforma está orientada a permitir acceso rápido y actualizado a los registros clínicos principales.',
      'faq.3.q': '¿Es una solución para hospitales y clínicas?',
      'faq.3.a': 'Sí, está dirigida a hospitales, clínicas privadas, centros especializados y profesionales de salud que necesiten orden y trazabilidad.',
      'faq.4.q': '¿Qué modelo de servicio ofrece Care-Labs?',
      'faq.4.a': 'Care-Labs plantea un modelo SaaS por suscripción, con posibilidad de crecer según las necesidades de cada institución.',

      'testimonials.title': 'Lo que dicen quienes probaron Care-Labs',
      'testimonials.subtitle': '¡Profesionales de salud que ya están viendo mejoras!',

      'team.title': 'Nuestro equipo',
      'team.subtitle': 'Detrás de Care-Labs hay un equipo comprometido con mejorar la forma en que se gestiona la información clínica día a día.',

      'contact.title': 'Contáctanos',
      'contact.name': 'Nombre',
      'contact.email': 'Correo electrónico',
      'contact.institution': 'Institución',
      'contact.message': 'Mensaje',
      'contact.submit': 'Enviar mensaje',

      'footer.desc': 'Soluciones digitales para optimizar procesos clínicos críticos, fortalecer la trazabilidad y mejorar la continuidad asistencial.',
      'footer.nav.home': 'Inicio',
      'footer.copy': '© 2026 Care-Labs. Todos los derechos reservados.'
    },
    en: {
      'nav.how-it-works': 'How it works?',
      'nav.features': 'Features',
      'nav.benefits': 'Benefits',
      'nav.faq': 'FAQ',
      'nav.contact': 'Contact',
      'nav.testimonials': 'Testimonials',
      'nav.about-us': 'About us',
      'cta.demo': 'Request demo',
      'cta.how-it-works': 'See how it works',
      
      'hero.title': 'Clinical communication and real-time traceability',
      'hero.subtitle': 'Digitize SBAR handoffs, clinical monitoring, vital signs, and critical events on a secure, accessible, and organized platform.',
      
      'problem.title': 'Why PulseReport?',
      'problem.desc': 'In many clinical settings, information is still recorded in scattered media, hindering continuity of care, traceability of critical events, and communication between shifts. PulseReport helps centralize essential cardiovascular nursing processes and improves patient safety.',
      
      'steps.title': 'How it works in 3 steps',
      'steps.1.title': '1. Register',
      'steps.1.desc': 'Digitize SBAR handoffs, vital signs, treatments, and basic patient data in one place.',
      'steps.2.title': '2. Monitor',
      'steps.2.desc': 'Check clinical information in real time to provide more organized and timely follow-up to each case.',
      'steps.3.title': '3. Trace',
      'steps.3.desc': 'Keep an immutable audit trail of events and actions to improve control, security, and continuity.',
      
      'features.title': 'Key features',
      'features.1.title': 'Digital SBAR',
      'features.1.desc': 'Standardizes the transfer of information between shifts and care areas.',
      'features.2.title': 'Basic patient management',
      'features.2.desc': 'Organizes essential patient data for clearer and more structured care.',
      'features.3.title': 'Treatment tracking',
      'features.3.desc': 'Records and consults treatments to improve continuity of care.',
      'features.4.title': 'Vital signs monitoring',
      'features.4.desc': 'Keep basic clinical control with information available in real time.',
      'features.5.title': 'Digital clinical history',
      'features.5.desc': 'Centralizes relevant information for better consultation and follow-up.',
      'features.6.title': 'Unalterable audit log',
      'features.6.desc': 'Maintain traceability of critical events and actions within the platform.',

      'benefits.title': 'Benefits',
      'benefits.1': 'Improves communication between shifts and care areas.',
      'benefits.2': 'Reduces the risk of omissions in critical clinical processes.',
      'benefits.3': 'Facilitates traceability and follow-up of important events.',
      'benefits.4': 'Organizes medical information in real time.',
      'benefits.5': 'Contributes to more reliable, organized, and timely care.',
      'benefits.tag.1': 'Secure',
      'benefits.tag.2': 'Scalable',
      'benefits.tag.3': 'Real-time',

      'faq.title': 'Frequently Asked Questions',
      'faq.1.q': 'Is PulseReport only for cardiovascular nursing?',
      'faq.1.a': 'It is specially designed for that environment, but its structure can be adapted to other specialized clinical contexts.',
      'faq.2.q': 'Can information be consulted in real time?',
      'faq.2.a': 'Yes, the platform is oriented to allow fast and updated access to the main clinical records.',
      'faq.3.q': 'Is it a solution for hospitals and clinics?',
      'faq.3.a': 'Yes, it is aimed at hospitals, private clinics, specialized centers, and health professionals who need order and traceability.',
      'faq.4.q': 'What service model does Care-Labs offer?',
      'faq.4.a': 'Care-Labs proposes a subscription SaaS model, with the possibility to grow according to the needs of each institution.',

      'testimonials.title': 'What people say about Care-Labs',
      'testimonials.subtitle': 'Health professionals who are already seeing improvements!',

      'team.title': 'Our team',
      'team.subtitle': 'Behind Care-Labs is a team committed to improving the way clinical information is managed daily.',

      'contact.title': 'Contact us',
      'contact.name': 'Name',
      'contact.email': 'Email',
      'contact.institution': 'Institution',
      'contact.message': 'Message',
      'contact.submit': 'Send message',

      'footer.desc': 'Digital solutions to optimize critical clinical processes, strengthen traceability, and improve continuity of care.',
      'footer.nav.home': 'Home',
      'footer.copy': '© 2026 Care-Labs. All rights reserved.'
    }
  };

  translate(key: string): string {
    return this.translations[this.currentLang()][key] || key;
  }
}
