import { Component, OnInit } from '@angular/core';
import { Evenement } from '../model/evenement.model';
import { Type } from '../model/type.model';
import { EvenementService } from '../services/evenement.service';
import { AuthService } from '../services/auth.service';
import { Image } from '../model/Image.model';

@Component({
  selector: 'app-rechercher-par-type',
  templateUrl: './rechercher-par-type.component.html',
})
export class RechercherParTypeComponent implements OnInit {

evenements! : Evenement[];
types! : Type[];
idType! : number;
constructor(private evenementService : EvenementService,
  public authService: AuthService
) { }
supprimerEvenement(e:Evenement) {
  let conf = confirm("Etes-vous sûr ?");
  if (conf)
     this.evenementService.supprimerEvenement(e.idEvenement).subscribe(() => {
      console.log("evenement supprimé");
      this.chargerEvenement();
    })
  }
  chargerEvenement() {
    this.evenementService.listEvenemnts().subscribe(event =>{
      this.evenements = event;
      this.evenements.forEach(e => {
        e.imageStr = 'data:' + e.images[0].type + ';base64,' +
          e.images[0].image;
    });
      
  });
}
onChange(){ 
  this.evenementService.rechercherParType(String(this.idType)).subscribe(event => {
    this.evenements = event;
    this.evenements.forEach(e => {
      e.imageStr = 'data:' + e.images[0].type + ';base64,' +
      e.images[0].image;
  });
  })
}
ngOnInit(): void {
  this.evenementService.listTypes().subscribe(ty => {
    this.types = ty._embedded.types;
  })  
  
}
}
