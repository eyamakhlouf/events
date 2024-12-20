import { Component, OnInit } from '@angular/core';
import { Evenement } from '../model/evenement.model';
import { log } from 'console';
import { EvenementService } from '../services/evenement.service';
import { Type } from '../model/type.model';
import { Router } from '@angular/router';
import { Image } from '../model/Image.model';

@Component({
  selector: 'app-add-evenement',
  templateUrl: './add-evenement.component.html',
  styleUrl: './add-evenement.component.css'
})
export class AddEvenementComponent  implements OnInit{
  newEvenement = new Evenement();
  types! : Type[];
  newIdType! : number;
  newType! : Type;
  uploadedImage!: File;
  imagePath: any;

constructor(private evenementService : EvenementService,private router : Router){}
  addEvenement() {
    this.newEvenement.type = this.types.find(ty => ty.idType == this.newIdType)!;
   
   
   this.evenementService.ajoutEvenement(this.newEvenement).subscribe((e) => {
  this.evenementService.uploadImageEvnt(this.uploadedImage,this.uploadedImage.name,e.idEvenement).subscribe((img : Image) => {});
    this.router.navigate(['evenements']);
  });
  }
  onImageUpload(event: any) {
    this.uploadedImage = event.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(this.uploadedImage);
    reader.onload = (_event) => { this.imagePath = reader.result; }
    }
  ngOnInit(): void {
this.evenementService.listTypes().
subscribe(ty => {
  this.types = ty._embedded.types;
 
})

  }

}
