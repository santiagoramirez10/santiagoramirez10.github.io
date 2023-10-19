import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor(private title:Title){
    title.setTitle("Contacto-Portafolio Santiago Ramírez Pérez")
  }
  message: string = '';

  sendMessageViaWhatsApp() {
    const encodedMessage = encodeURIComponent(this.message);
    const whatsappURL = `https://api.whatsapp.com/send?phone=573225562660&text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
  }
}





