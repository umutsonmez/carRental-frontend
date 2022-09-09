import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {

  apiUrl = 'https://localhost:44388/api/CarImages/';
  constructor(private httpClient:HttpClient) { }

  getCarImages():Observable<ListResponseModel<CarImage>>{
    let newPath = this.apiUrl + 'getall'
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }
  getCarImagesByCarId(carId:number):Observable<ListResponseModel<CarImage>>{
    let newPath = this.apiUrl + 'getbycarid?carId=' + carId;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }
  getCarImagesById(id:number):Observable<ListResponseModel<CarImage>>{
    let newPath = this.apiUrl + 'getbyimageid?id=' + id;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }
}
