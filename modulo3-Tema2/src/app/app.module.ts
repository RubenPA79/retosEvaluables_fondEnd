import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BooksComponent } from './components/books/books.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CardComponent } from './components/card/card.component'; // ✅ Importación añadida

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BooksComponent,
    AddBookComponent,
    ProfileComponent,
    CardComponent // ✅ Asegurar que está en declarations
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

