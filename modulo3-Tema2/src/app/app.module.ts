import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FormsModule } from '@angular/forms';
import { BooksComponent } from './books/books.component'; // Importante para [(ngModel)]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    BooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // Debe estar aquí
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
