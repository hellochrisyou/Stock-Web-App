import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/core/service/auth/auth.service';
import { MatTableDataSource } from '@angular/material/table';
import { ColumnObject } from '@shared/interface/interface';
import { Stock, SearchHistory } from '@shared/interface/models';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'user-profile',
  templateUrl: './profile-logic.component.html',
  styleUrls: ['./profile-logic.component.scss']
})
export class ProfileComponent implements OnInit {

  // isSearch = 'neither';

  historyDataArr: SearchHistory[];

  // historyMat: MatTableDataSource<SearchHistory>;

  // historyColObj: ColumnObject[] = SEARCH_COL_OBJ;


  constructor() { }

  ngOnInit() {
    // service to pull in data for search history from spring via graphql
  }


}
