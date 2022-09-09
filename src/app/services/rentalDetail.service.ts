import { ListResponseModel } from './../models/listResponseModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RentalDetail } from '../models/rentalDetail';

@Injectable({
  providedIn: 'root'
})
export class RentalDetailService {
 apiUrl="https://localhost:44388/api/Rentals/getrentaldetails";

  constructor(private httpClient:HttpClient) { }

  getRentalDetails():Observable<ListResponseModel<RentalDetail>>{
    return this.httpClient.get<ListResponseModel<RentalDetail>>(this.apiUrl);
  }
}
