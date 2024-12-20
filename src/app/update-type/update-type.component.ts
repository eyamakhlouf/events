import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Type } from '../model/type.model';
import { EvenementService } from '../services/evenement.service';

@Component({
  selector: 'app-update-type',
  templateUrl: './update-type.component.html',
  styles: ``
})
export class UpdateTypeComponent implements OnInit {

  @Input()
  type! : Type;
  @Input()
  ajout!:boolean;
  
  @Output()
  typeUpdated = new EventEmitter<Type>();
  constructor(private evenementService : EvenementService) {
    
  }
  saveType(){
    this.typeUpdated.emit(this.type)
  }
  
  ngOnInit(): void {
    
    console.log("ngOnInit du composant UpdateCategorie ",this.type);
  }
}
