import { Component } from '@angular/core';
import { User } from '../../models/user'; // Importamos la clase User

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user: User = new User(1, "Rubén", "Rivas Bricio", "ruben@example.com", "assets/profile.jpg", "123456");

  modificarDatos() {
    console.log("Datos actualizados:", this.user);
  }
}
