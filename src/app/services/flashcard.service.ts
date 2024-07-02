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
    return this.http.get<Flashcard[]>(url).pipe(catchError(this.handleError));
  }

  // Method to get quiz questions based on the selected topic
  getQuizQuestionsByTopic(topic: string): Observable<any[]> {
    const url = `assets/data/${this.getFileName(topic)}.json`;
    return this.http.get<any[]>(url).pipe(catchError(this.handleError));
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
      case 'Angular Quiz':
        return 'angular-quiz';
      case 'C# Quiz':
        return 'c-sharp-quiz';
      case 'TypeScript Quiz':
        return 'typescript-quiz';
      case 'SQL Quiz':
        return 'sql-quiz';
      case 'ASP .NET MVC Quiz':
        return 'asp-dotnet-mvc-quiz';
      default:
        throw new Error('Unknown topic');
    }
  }

  // Error handling method
  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error('Error fetching data:', error);
    return throwError(
      () =>
        new Error(
          'An error occurred while fetching data. Please try again later.'
        )
    );
  }
}
