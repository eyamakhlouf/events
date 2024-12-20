import { Component, OnInit } from '@angular/core';
import { Evenement } from '../model/evenement.model';
import { EvenementService } from '../services/evenement.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Type } from '../model/type.model';
import { Image } from '../model/Image.model';


@Component({
  selector: 'app-update-evenement',
  templateUrl: './update-evenement.component.html',
  styles: ``
})
export class UpdateEvenementComponent implements OnInit{
  types! : Type[];
  currentEvenement = new Evenement();
  updatetypeId! :number;
  myImage! : string;
  uploadedImage!: File;
  isImageUpdated: Boolean=false;


  constructor( private evenementService : EvenementService,
    private activateRoute : ActivatedRoute,private router : Router
  ){  }

  updateEvenement(){
    this.currentEvenement.type = this.types.find(ty => ty.idType == this.updatetypeId)!;
  
        this.evenementService.updateEvenement(this.currentEvenement).subscribe(evenement => {
          this.router.navigate(['evenements'])});
        }
       
  

  onImageUpload(event: any) {
    if(event.target.files && event.target.files.length) {
    this.uploadedImage = event.target.files[0];
    this.isImageUpdated =true;
    const reader = new FileReader();
    reader.readAsDataURL(this.uploadedImage);
    reader.onload = () => { this.myImage = reader.result as string; };
    }
    }
    onAddImageEvenement() {
      this.evenementService
      .uploadImageEvnt(this.uploadedImage,
      this.uploadedImage.name,this.currentEvenement.idEvenement)
      .subscribe( (img : Image) => {
      this.currentEvenement.images.push(img);
      });
      }
      supprimerImage(img: Image){
        let conf = confirm("Etes-vous sûr ?");
        if (conf)
        this.evenementService.supprimerImage(img.idImage).subscribe(() => {
        //supprimer image du tableau currentProduit.images
        const index = this.currentEvenement.images.indexOf(img, 0);
        if (index > -1) {
        this.currentEvenement.images.splice(index, 1);
        }
        });
        }
  ngOnInit(): void {
    this.evenementService.listTypes().subscribe(ty => {
      this.types = ty._embedded.types;
    })
    this.evenementService.consulterEvenement(this.activateRoute.snapshot.params['id']).subscribe(evenement => {
      this.currentEvenement = evenement;
      this.myImage = 'data:' + evenement.images[0].type + ';base64,' + evenement.images[0].image;
      this.updatetypeId =  this.currentEvenement.type.idType 
      
      
    })
  }

}
