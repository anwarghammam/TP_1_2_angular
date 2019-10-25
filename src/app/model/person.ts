import { TouchSequence } from 'selenium-webdriver';

export class person {
    id:number ;
    nom:string;
    prenom:string;
    age:number ;
    path:string;
    job:string;
    cin:number;

    constructor(id,nom,prenom,age,job,cin,path){
        this.id=id;
        this.nom=nom;
        this.prenom=prenom;
        this.age=age;
        this.job=job;
        this.cin=cin;
        this.path=path
    }
}