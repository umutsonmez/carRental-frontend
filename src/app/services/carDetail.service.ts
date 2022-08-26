import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { CarResponseModel } from '../models/carDetailResponseModel';


@Injectable({
  providedIn: 'root'
})
export class CarDetailService {

  apiUrl = "https://localhost:44388/api/Cars/getCarDetails";

  constructor(private httpClient:HttpClient) { }

  getCars():Observable<CarResponseModel>{
   return  this.httpClient.get<CarResponseModel>(this.apiUrl);
  }
}

