import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/carImage.service';

@Component({
  selector: 'app-carImage',
  templateUrl: './carImage.component.html',
  styleUrls: ['./carImage.component.css']
})
export class CarImageComponent implements OnInit {

  carImages:CarImage[] = [];
  constructor(
    private carImageService:CarImageService,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    console.log("umut")
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
        console.log("umut2")
        this.getCarImagesByCarId(params["carId"])
      }else{
        this.getCarImages();
      }
    })
  }
  getCarImages(){
    this.carImageService.getCarImages().subscribe(response =>{
      this.carImages=response.data
    });
  }
  getCarImagesByCarId(carId:number){
    this.carImageService.getCarImagesByCarId(carId).subscribe(response => {
      this.carImages = response.data;
      console.log(this.carImages)
    })
  }

}