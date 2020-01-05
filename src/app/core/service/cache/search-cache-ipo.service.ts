import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Ipo } from '@shared/interface/models';
import { validateBasis } from '@angular/flex-layout';

@Injectable({
  providedIn: 'root'
})
export class SearchCacheIpoService {

  private ipoStore: Ipo[] = [];
  private _ipos: Ipo[];

  public get ipos(): Ipo[] {
    return this._ipos;
  }
  public set ipos(value: Ipo[]) {
    this._ipos = value;
  }

  public addIpo(ipo: Ipo): void {
    this.ipoStore.push(ipo);
  }

  public resetIpo(): void {
    this._ipos = []
  }

  public isExist(select: string): boolean {
    this.resetIpo();
    let check;
    this.ipoStore.forEach(ipoArr => {
      if (ipoArr.Select === select) {
        this._ipos.push(ipoArr);
        check = true;
      }
    });
    if (check === true) {
      return true;
    } else {
      return false;
    }
  }
}

