import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/core/service/auth/auth.service';
import { ActivityHistory } from '@shared/interface/models';
import { MatTableDataSource } from '@angular/material/table';
import { ColumnObject } from '@shared/interface/interface';
import { HISTORY_COL_OBJ } from '@shared/const/column.const';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'user-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  isSearch = 'neither';

  historyDataArr: ActivityHistory[];

  historyMat: MatTableDataSource<ActivityHistory>;

  historyColObj: ColumnObject[] = HISTORY_COL_OBJ;


  constructor() { }

  ngOnInit() {
    // service to pull in data for search history from spring via graphql
  }


}
