import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TestService } from '../test.service';

@Component({
  selector: 'app-table-a',
  templateUrl: './table-a.component.html',
  styleUrls: ['./table-a.component.scss']
})
export class TableAComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) matSort!: MatSort
  data: any = [];

  dataSource = new MatTableDataSource([])

  constructor(private testService: TestService) { }

  ngOnInit(): void {
    this.testService.getDataFromWebWorker().subscribe(v => this.dataSource.data = v)
    this.dataSource.sort = this.matSort
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
