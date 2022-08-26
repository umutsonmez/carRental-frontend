import { CarDetailService } from '../../services/carDetail.service';
import { Component, OnInit } from '@angular/core';
import { CarDetail } from 'src/app/models/carDetail';
import { CarResponseModel } from 'src/app/models/carDetailResponseModel';

@Component({
  selector: 'app-car',
  templateUrl: './carDetail.component.html',
  styleUrls: ['./carDetail.component.css']
})
export class CarDetailComponent implements OnInit {

  cars:CarDetail[]=[];
  dataLoaded = false;
  
  constructor(private carDetailService:CarDetailService) { }

  ngOnInit(): void {
    this.getCars();
  }

  getCars(){
    this.carDetailService.getCars().subscribe(response =>{
      this.cars=response.data
      this.dataLoaded = true;
    });
  }

}
