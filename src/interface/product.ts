import type { ReactNode } from "react";

interface Variante {
  type: string;
  nome: string;
  prezzo: number;
}

export interface Prodotto {
  name: ReactNode;
  price: number;
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
