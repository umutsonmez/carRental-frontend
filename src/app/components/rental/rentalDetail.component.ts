import { RentalDetail } from './../../models/rentalDetail';
import { Component, OnInit } from '@angular/core';
import { RentalDetailService } from 'src/app/services/rentalDetail.service';


@Component({
  selector: 'app-rental',
  templateUrl: './rentalDetail.component.html',
  styleUrls: ['./rentalDetail.component.css']
})
export class RentalComponent implements OnInit {

  rentals:RentalDetail[]=[];
  dataLoaded=false;

  constructor(private rentalDetailService:RentalDetailService) { }

  ngOnInit(): void {
  }

  getRentalDetails(){
    this.rentalDetailService.getRentalDetails().subscribe(response=>{
      this.rentals=response.data;
      this.dataLoaded=true;
    })
  }

}
