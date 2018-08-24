import { Component, OnInit } from '@angular/core';
import { GridOptions } from 'ag-grid';
@Component({
  selector: 'app-grid-application',
  templateUrl: './grid-application.component.html',
  styleUrls: ['./grid-application.component.css']
})
export class GridApplicationComponent implements OnInit {

  private gridOptions: GridOptions;

  constructor() {
    this.gridOptions = <GridOptions>{};
    this.gridOptions.columnDefs = [
      {
        headerName: 'ID',
        field: 'id',
        width: 100
      },
      {
        headerName: 'Value',
        field: 'value',
        width: 100
      },

    ];
    this.gridOptions.rowData = [
      { id: 5, value: 10 },
      { id: 10, value: 15 },
      { id: 15, value: 20 }
    ];
  }

  ngOnInit() {
  }
}



