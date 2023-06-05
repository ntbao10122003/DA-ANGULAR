import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadServiceService {

  constructor(private _http: HttpClient) { }
  uploadImage(vals: any): Observable<any> {
    let data = vals;
    const CLOUD_NAME = "dds5d6hm0";
    const url = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;

    return this._http.post(url, data);  }
}
