import { Type } from './type.model';
import { Image } from './Image.model';
export class Evenement {
    idEvenement! : number;
    nomEvenement! : string;
    capacite! : number;
     dateEvenement! : Date ;
     type!: Type;
     image! : Image;
     imageStr!:string;
     images!: Image[];

    }