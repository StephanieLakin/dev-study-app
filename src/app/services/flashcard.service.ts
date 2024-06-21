// import { Injectable } from '@angular/core';
// import { Flashcard } from '../models/flashcard.model';
// import { HttpClient } from '@angular/common/http';
// import { Observable, observable, switchAll } from 'rxjs';

// //@Injectable Decorator: Marks the class as a service that can be injected into other components or services.
//  //The providedIn: 'root' syntax makes this service available application-wide.
// @Injectable({
//   providedIn: 'root',
// })
// export class FlashcardService {
//   constructor(private http: HttpClient) {}

//   // Method to get flashcards based on the selected topic
//   getFlashcardsByTopic(topic: string): Observable<Flashcard[]> {
//     //const url = `../assets/data/${this.getFileName(topic)}.json`; // Constructs the URL to the JSON file using the getFileName method.
//    const url = `../../assets/data/${this.getFileName(topic)}.json`;
//     return this.http.get<Flashcard[]>(url); // Returns an Observable of Flashcard[] by making an HTTP GET request to the constructed URL.
//   }

//   // Private method to get the filename based on the topic
//   private getFileName(topic: string): string {
//     switch (topic) {
//       case 'OOP':
//         return 'oop';
//       case 'ASP .NET MVC':
//         return 'asp-dotnet-mvc';
//       case '.Net Core Web API':
//         return 'dotnet-core-web-api';
//       case 'Angular':
//         return 'angular';
//       case 'TypeScript':
//         return 'typescript';
//       case 'CSS':
//         return 'css';
//       case 'Javascript':
//         return 'javascript';
//       case 'C#':
//         return 'c-sharp';
//       case 'SQL':
//         return 'mssql';
//       default:
//         throw new Error('Unknown topic');
//     }
//   }
// }


import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Flashcard } from '../models/flashcard.model';

@Injectable({
  providedIn: 'root',
})
export class FlashcardService {
  constructor(private http: HttpClient) {}

  // Method to get flashcards based on the selected topic
  getFlashcardsByTopic(topic: string): Observable<Flashcard[]> {
    const url = `assets/data/${this.getFileName(topic)}.json`;
    return this.http.get<Flashcard[]>(url).pipe(
      catchError(this.handleError)
    );
  }

  // Private method to get the filename based on the topic
  private getFileName(topic: string): string {
    switch (topic) {
      case 'OOP':
        return 'oop';
      case 'ASP .NET MVC':
        return 'asp-dotnet-mvc';
      case '.Net Core Web API':
        return 'dotnet-core-web-api';
      case 'Angular':
        return 'angular';
      case 'TypeScript':
        return 'typescript';
      case 'CSS':
        return 'css';
      case 'Javascript':
        return 'javascript';
      case 'C#':
        return 'c-sharp';
      case 'SQL':
        return 'mssql';
      default:
        throw new Error('Unknown topic');
    }
  }

  // Error handling method
  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error('Error fetching flashcards:', error);
    return throwError('An error occurred while fetching flashcards. Please try again later.');
  }
}
