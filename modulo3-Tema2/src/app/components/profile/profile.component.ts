import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user = {
    name: 'Rubén',
    last_name: 'Rivas Bricio',
    email: 'ruben@example.com',
    photo: 'assets/profile.jpg'
  };

  modificarDatos() {
    console.log("Datos actualizados:", this.user);
  }
}
