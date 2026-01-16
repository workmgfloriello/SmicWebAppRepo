// src/services/ProdottiService.ts
export default class ProdottiService {
  private categoria: string;
  private baseUrl: string = "http://localhost/smicBack/index.php";
  private altervistaUrl: string = "https://jumpin.altervista.org";

  constructor(categoria: string = "caffetteria") {
    this.categoria = categoria;
  }

  private resetName(){
    if(this.categoria === "bevande e vini"){
      this.categoria = "bevande";
    }
  }
  /**
   * Ottiene i prodotti dalla caffetteria
   */
  public async getProdotti(): Promise<Array<{ nome: string; prezzo: number }>> {
    this.resetName() ;
    try {
      const endpoint = `${this.altervistaUrl}/index.php?menu=${this.categoria}`;
      const response = await fetch(endpoint);

      if (!response.ok) {
        throw new Error(`Errore nella chiamata al backend: ${response.status}`);
      }

      const data: Array<{ nome: string; prezzo: number }> = await response.json();
      return data;
    } catch (error) {
      console.error("Errore nel service:", error);
      return [];
    }
  }
}
