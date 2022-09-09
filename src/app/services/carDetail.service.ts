import { ListResponseModel } from './../models/listResponseModel';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { CarDetail } from '../models/carDetail';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {

  apiUrl = "https://localhost:44388/api/";

  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<CarDetail>>{
   let newPath = this.apiUrl + "Cars/getcardetails"
   return  this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
  getCarsByBrand(id:number):Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl + "Cars/getcardetailsbybrandid?brandId="+id
    return  this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
   }

   getCarsByColor(id:number):Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl + "Cars/getcardetailsbycolorid?colorId="+id
    return  this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
   }
}

