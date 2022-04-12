import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-test-examples',
  templateUrl: './test-examples.component.html',
  styleUrls: ['./test-examples.component.scss']
})
export class TestExamplesComponent implements OnInit {

  @ViewChild(MatSort, { static: true }) matSort!: MatSort
  data: any = [
    { id: 1, name: 'test1', num: 123, isActive: true },
    { id: 2, name: 'test12', num: 343, isActive: false },
    { id: 3, name: 'test13', num: 14523, isActive: true },
    { id: 4, name: 'test14', num: 12343, isActive: false },
    { id: 5, name: 'test15', num: 23, isActive: false },
    { id: 6, name: 'test16', num: 78, isActive: true },
    { id: 7, name: 'test17', num: 167823, isActive: true },
    { id: 8, name: 'test18', num: 6, isActive: false },
  ];

  dataSource = new MatTableDataSource(this.data)

  cols: string[] = ['id', 'name']
  constructor() { }

  ngOnInit(): void {
    this.dataSource.sort = this.matSort
  }

  sortData(sort: Sort) {
}

}
