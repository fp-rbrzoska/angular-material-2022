import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TestService } from '../test.service';

@Component({
  selector: 'app-table-b',
  templateUrl: './table-b.component.html',
  styleUrls: ['./table-b.component.scss']
})
export class TableBComponent implements OnInit {

  data$!: Observable<any>;
  constructor(private testService: TestService) { }

  ngOnInit(): void {
    this.data$ = this.testService.getDataFromWebWorker()
  }
}
