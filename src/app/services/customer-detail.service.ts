import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerDetailResponseModel } from '../models/customerDetailResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerDetailService {

  apiUrl="https://localhost:44388/api/Customers/getcustomerdetails";

  constructor(private httpClient:HttpClient) { }

  getCustomerDetails():Observable<CustomerDetailResponseModel>{
    return this.httpClient.get<CustomerDetailResponseModel>(this.apiUrl);
  }
}
