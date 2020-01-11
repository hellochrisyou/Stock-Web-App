import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Ipo, Stock } from '@shared/interface/models';

@Injectable({
  providedIn: 'root'
})
export class StateIpoService {

  // tslint:disable-next-line: variable-name
  private readonly _ipos = new BehaviorSubject<Ipo[]>([]);

  // Expose the observable$ part of the _todos subject (read only stream)
  readonly ipos$ = this._ipos.asObservable();

  // the getter will return the last value emitted in _todos subject
  get ipos(): Ipo[] {
    return this._ipos.getValue();
  }

  // assigning a value to this.todos will push it onto the observable 
  // and down to all of its subsribers (ex: this.todos = [])
  set ipos(ipo: Ipo[]) {
    this._ipos.next(ipo);
  }

  addIpo(ipo: Ipo) {
    // we assaign a new copy of todos by adding a new todo to it 
    // with automatically assigned ID ( don't do this at home, use uuid() )
    this.ipos = [
      ...this.ipos,
      { stateId: this.ipos.length + 1 }
    ];
  }

  removeIpo(id: number) {
    this.ipos = this.ipos.filter(ipo => ipo.stateId !== id);
  }


}
