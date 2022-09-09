import { CarDetailService } from '../../services/carDetail.service';
import { Component, OnInit } from '@angular/core';
import { CarDetail } from 'src/app/models/carDetail';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car',
  templateUrl: './carDetail.component.html',
  styleUrls: ['./carDetail.component.css']
})
export class CarDetailComponent implements OnInit {

  cars:CarDetail[]=[];
  dataLoaded = false;
  
  constructor(private carDetailService:CarDetailService ,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"]){
        this.getCarsByBrand(params["brandId"])
      }else{
        this.getCars()
      }
    })
  }

  getCars(){
    this.carDetailService.getCars().subscribe(response =>{
      this.cars=response.data
      this.dataLoaded = true;
    });
  }

  getCarsByBrand(id:number){
    this.carDetailService.getCarsByBrand(id).subscribe(response =>{
      this.cars=response.data
      this.dataLoaded = true;
    });
  }

  getCarsByColor(id:number){
    this.carDetailService.getCarsByColor(id).subscribe(response =>{
      this.cars=response.data
      this.dataLoaded = true;
    });
  }
 
}
