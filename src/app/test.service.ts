import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { promisify } from '@fiahfy/worker-promisify';
import { from, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  worker: Worker = new Worker(new URL('./fetch-worker.worker', import.meta.url));
  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<any>('/assets/data.json')
  }

  getDataFromWebWorker() {
    return from<Promise<any>>(promisify(this.worker).postMessage({
      url: '/assets/data.json'
    })).pipe(
      map((msg: MessageEvent) => {
        if(msg.data.res) {
          return msg.data.res
        } else {
          return null
        }
      })
    )
  }
}
