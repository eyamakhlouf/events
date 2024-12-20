import { Injectable } from '@angular/core';
import { Evenement } from '../model/evenement.model';
import { Type } from '../model/type.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TypeWrapper } from '../model/TypeWrapper.model';
import { AuthService } from './auth.service';
import { Image } from '../model/Image.model';
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};
@Injectable({
  providedIn: 'root'
})
export class EvenementService {
  apiURL: string = 'http://localhost:8081/evenements/api';
  apiURLTypes: string = 'http://localhost:8081/evenements/type';
  // evenements : Evenement[];
  // types : Type[];
  // evenement! : Evenement;
  constructor(private http : HttpClient,
    public authService: AuthService) { 
  }
  listEvenemnts(): Observable<Evenement[]> {
    return this.http.get<Evenement[]>(this.apiURL+"/all");
  }
  listTypes():Observable<TypeWrapper> {

    return this.http.get<TypeWrapper>(this.apiURLTypes); 
  }
  // consulterType(id: number): Type {
  //   return this.types.find(type => type.idType == id)!;
  // }
  ajoutEvenement(event: Evenement):Observable<Evenement> {
  
    return this.http.post<Evenement>(this.apiURL+"/addevent", event);
  }
  supprimerEvenement(id: number) {
    const url = `${this.apiURL}/delevent/${id}`;
  
    return this.http.delete(url);
    }
  
  consulterEvenement(id:number):Observable<Evenement> {
    const url = `${this.apiURL}/getbyid/${id}`;
  
    return this.http.get<Evenement>(url );

  }
  // trierEvenements() {
  //   this.evenements = this.evenements.sort((n1,n2) => {
  //     if (n1.idEvenement! > n2.idEvenement!) {
  //       return 1;
  //     }
  //     if (n1.idEvenement! < n2.idEvenement!) {
  //       return -1;
  //     }
  //     return 0;
  //   })
  // }
  updateEvenement(event: Evenement):Observable<Evenement> { 
    
   return this.http.put<Evenement>(this.apiURL+"/updateevent", event);
  }
  rechercherParType(idtype: string): Observable<Evenement[]> {
    
    const url = `${this.apiURL}/evenementtype/${idtype}`;
    return this.http.get<Evenement[]>(url);
  }
  rechercherParNom(nom: string): Observable<Evenement[]> {
    
    const url = `${this.apiURL}/eventByName/${nom}`;
    return this.http.get<Evenement[]>(url);
  }
  ajouteType(type: Type):Observable<Type> {
    
    return this.http.post<Type>(this.apiURLTypes, type);
  }
  supprimerType(id: number) {
    
    const url = `${this.apiURLTypes}/${id}`;
    return this.http.delete(url);
  }
  uploadImage(file: File, filename: string): Observable<Image>{
    const imageFormData = new FormData();
    imageFormData.append('image', file, filename);
    const url = `${this.apiURL + '/image/upload'}`;
    return this.http.post<Image>(url, imageFormData);
    }
  loadImage(id: number): Observable<Image> {
    const url = `${this.apiURL + '/image/get/info'}/${id}`;
    return this.http.get<Image>(url);
    }
    supprimerImage(id : number) {
      const url = `${this.apiURL}/image/delete/${id}`;
      return this.http.delete(url, httpOptions);
      }
      uploadImageEvnt(file: File, filename: string, idEvnt:number): Observable<any>{
        const imageFormData = new FormData();
        imageFormData.append('image', file, filename);
        const url = `${this.apiURL + '/image/uplaodImageEvnt'}/${idEvnt}`;
        return this.http.post(url, imageFormData);
        }  
        uploadImageFS(file: File, filename: string, idEvnt : number): Observable<any>{
          const imageFormData = new FormData();
          imageFormData.append('image', file, filename);
          const url = `${this.apiURL + '/image/uploadFS'}/${idEvnt}`;
          return this.http.post(url, imageFormData);
          }    
}
