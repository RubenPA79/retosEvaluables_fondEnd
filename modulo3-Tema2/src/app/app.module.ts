import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; // ✅ Importado para el router-outlet

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
import { FooterComponent } from './components/footer/footer.component';
import { BookCodePipe } from './pipes/book-code.pipe'; // ✅ Importación de la Pipe

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
    FooterComponent,
    BookCodePipe // ✅ Declarado correctamente
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


