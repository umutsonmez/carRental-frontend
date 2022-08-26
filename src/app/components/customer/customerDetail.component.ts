import { Component, OnInit } from '@angular/core';
import { CustomerDetail } from 'src/app/models/customerDetail';
import { CustomerDetailService } from 'src/app/services/customer-detail.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customerDetail.component.html',
  styleUrls: ['./customerDetail.component.css']
})
export class CustomerComponent implements OnInit {

  customers:CustomerDetail[]=[];
  dataLoaded = false;

  constructor(private customerDetailService:CustomerDetailService) { }

  ngOnInit(): void {
    this.getCustomerDetails();
  }

  getCustomerDetails(){
    this.customerDetailService.getCustomerDetails().subscribe(response=>{
      this.customers=response.data;
      this.dataLoaded=true;
    })
  }

}
