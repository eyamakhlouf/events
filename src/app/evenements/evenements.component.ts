import { Component, OnInit } from '@angular/core';
import { Evenement } from '../model/evenement.model';
import { EvenementService } from '../services/evenement.service';
import { AuthService } from '../services/auth.service';
import { Image } from '../model/Image.model';

@Component({
  selector: 'app-evenements',
  templateUrl: './evenements.component.html',
  styleUrl: './evenements.component.css'
})
export class EvenementsComponent implements OnInit {
  apiurl:string='http://localhost:8081/evenements/api';
  evenements! : Evenement[];
  constructor(private evenementService : EvenementService,
    public authService: AuthService) {
  }
  supprimerEvenement(e:Evenement) {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
       this.evenementService.supprimerEvenement(e.idEvenement).subscribe(() => {
        console.log("Evenement supprimé");
        this.chargerEvenement();
      })
    }
    chargerEvenement() {
      this.evenementService.listEvenemnts().subscribe((event: Evenement[]) =>{
        this.evenements = event;
        
        this.evenements.forEach((even) => {
          even.imageStr = 'data:' + even.images[0].type + ';base64,' +
          even.images[0].image;
          }); 
          
        
    });
  }
   

  ngOnInit(): void {
    this.chargerEvenement();
    
  }

}