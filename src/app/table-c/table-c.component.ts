import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { TableVirtualScrollDataSource } from 'ng-table-virtual-scroll';
import { TestService } from '../test.service';

@Component({
  selector: 'app-table-c',
  templateUrl: './table-c.component.html',
  styleUrls: ['./table-c.component.scss']
})
export class TableCComponent implements OnInit {
  displayedColumns = ['id', 'name'];

  dataSource = new TableVirtualScrollDataSource([]);
  @ViewChild(MatSort, { static: true }) matSort!: MatSort


  constructor(private testService: TestService) { }

  ngOnInit(): void {
    this.testService.getDataFromWebWorker().subscribe(v => this.dataSource.data = v)
    this.dataSource.sort = this.matSort
  }

}
