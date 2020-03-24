export class Computer {
    id: number;
    modele: string;
    marque: string;
    type: string;
    category: string;
    prixAchat: number;
    prixVente: number;
    // marge: number;
    dateEntreStock: Date;

constructor(id?: number, modele?: string, marque?: string, type?: string, category?: string, prixAchat?: number, prixVente?: number, dateEntreStock?: Date) {
    this.id = id;
    this.modele = modele;
    this.marque = marque;
    this.type = type;
    this.category = category;
    this.prixAchat = prixAchat;
    this.prixVente = prixVente;
    // this.marge = this.calculMarge();
    this.dateEntreStock = dateEntreStock;
    }

    // private calculMarge(){
    //     if (this.prixAchat && this.prixVente)
    //         return (this.prixVente - this.prixAchat)
    // }
    
}


