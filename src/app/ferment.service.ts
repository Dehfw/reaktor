import {Injectable} from '@angular/core';
import {Observable, of, Subject} from 'rxjs';

import {MessageService} from './message.service';

import {Ferment} from './ferment';
import {FERMENTS} from './mock-ferments';
import {StorageMap} from '@ngx-pwa/local-storage';

@Injectable({
  providedIn: 'root'
})

export class FermentService {

  private ferments: Ferment[] = Array.from(FERMENTS);

  constructor(
    private messageService: MessageService,
    private storage: StorageMap) {
    this.storage.get('ferments').subscribe((ferments) => {
      if (!ferments) {
        this.storage.set('ferments', this.ferments).subscribe(() => {
        });
      }
    });

  }

  getOne(id: number): Observable<Ferment> {
    this.messageService.add('Ferments: Loaded');
    var subject = new Subject<Ferment>();
    this.storage.get('ferments').subscribe((_ferments: Ferment[]) => {
      const _foundFerment = _ferments[_ferments.map(_ferment => _ferment.id).indexOf(id)];
      subject.next(_foundFerment);
    });

    return subject.asObservable();
  }

  getAll(): Observable<Ferment[]> {
    this.messageService.add('Ferments: Loaded');
    return of(this.ferments);
  }

  saveFerment(ferment: Ferment) {
    this.messageService.add(`Ferments: Saved`);
    const _fermentIndex = this.ferments.map(_ferment => _ferment.id).indexOf(ferment.id);
    this.ferments[_fermentIndex] = ferment;
    this.storage.set('ferments', this.ferments).subscribe(() => {
    });
  }
}
