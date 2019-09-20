import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { MessageService } from './message.service';

import { Ferment, FermentStep } from './ferment';
import { FERMENTS, FERMENTSSTEPS } from './mock-ferments';

@Injectable({
  providedIn: 'root'
})

export class FermentService {

  constructor(private messageService: MessageService) { }

  getFerments(): Observable<Ferment[]> {
    this.messageService.add('Ferments: Loaded');
    return of(FERMENTS);
  }

  getFermentsSteps(id: number): Observable<FermentStep[]> {
    this.messageService.add(`Ferments Steps: Loaded id=${id}`);
    return of(<FermentStep[]>FERMENTSSTEPS[id.toString()]);
  }
}
