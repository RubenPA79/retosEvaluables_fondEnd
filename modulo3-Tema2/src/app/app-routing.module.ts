import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BooksComponent } from './books/books.component'; // Importación de BooksComponent

const routes: Routes = [
  { path: '', component: HomeComponent },  // Página de inicio
  { path: 'profile', component: ProfileComponent }, // Página de perfil
  { path: 'books', component: BooksComponent } // 🔹 Ruta agregada para los libros
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
