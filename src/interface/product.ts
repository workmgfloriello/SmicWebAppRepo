interface Variante {
  type: string;
  nome: string;
  prezzo: number;
}

export interface Prodotto {
  nome: string;
  prezzo: number;
  variante?: Variante[];
  descrizione?: string;
  immagineUrl?: string;
  disponibilita?: boolean;
}

export interface ProdottiResponse {
    prodotti: Prodotto[];
    totalCount: number;
}
