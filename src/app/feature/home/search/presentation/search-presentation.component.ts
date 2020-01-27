import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SEARCHGROUP } from '@shared/const/search-option.const';
import { SearchGroup } from '@shared/interface/interface';

import { CREATE_SEARCH_HEADER } from '../search.config';

@Component({
  selector: 'search-bar',
  templateUrl: './search-presentation.component.html',
  styleUrls: ['./search-presentation.component.scss']
})
export class SearchPresentationComponent implements OnInit {

  searchGroup: SearchGroup[] = SEARCHGROUP;
  value: string;
  constructor(private fb: FormBuilder) { }
  searchForm: FormGroup;
  searchOptCtrl = new FormControl('', [Validators.required]);

  @Output() emitValue = new EventEmitter();

  get searchOption() {
    return this.searchForm.get('searchOptCtrl');
  }

  reactiveForm() {
    this.searchForm = this.fb.group({
      searchOptCtrl: ['', [Validators.required]],
    })
  }

  ngOnInit() {
    this.searchForm = CREATE_SEARCH_HEADER(this.fb);
  }

  public submitForm(): void {
    if (this.searchGroup[0].option.forEach(x => { x === this.searchOptCtrl.value }) !== null) {
      this.value = this.searchOptCtrl.value
    } else {
      this.value = this.searchOptCtrl.value;
    }
    console.log('submitformvalue', this.value)
    this.emitValue.emit(this.value);
  }

}
