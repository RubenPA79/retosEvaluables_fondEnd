import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; // ✅ Importado para que router-outlet funcione

// ✅ Importación de todos los componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BooksComponent } from './components/books/books.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/login/login.component';
import { CardComponent } from './components/card/card.component';
import { HeaderComponent } from './page/header/header.component';
import { HeaderDirective } from './page/header.directive';
import { FooterComponent } from './components/footer/footer.component'; // ✅ Importado correctamente

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BooksComponent,
    AddBookComponent,
    ProfileComponent,
    LoginComponent,
    CardComponent,
    HeaderComponent,
    HeaderDirective,
    FooterComponent // ✅ Ahora está correctamente en declarations
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule // ✅ Asegura que el enrutamiento no falle
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


