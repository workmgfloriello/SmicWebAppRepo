export default class AuthService {
  private isLogedIn: boolean = false;
  private altervistaUrl: string = "https://smiccafe.altervista.org";

  /* REGISTRAZIONE */
  public async register(
    name: string,
    email: string,
    password: string,
    confirmPassword: string,
    address: string,
    city: string,
  ): Promise<boolean> {
    if (
      name != "" &&
      email != "" &&
      password != "" &&
      confirmPassword != "" &&
      address != "" &&
      city != ""
    ) {
      if (this.checkPassword(password, confirmPassword)) {
        if (this.checkEmail(email)) {
          if (await this.checkAddress(address, city)) {
          }
        }
      }
    }
    return false;
  }

  private checkEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  private checkPassword(password: string, confirmPassword: string): boolean {
    if (password !== confirmPassword) {
      return false;
    }

    if (password.length < 6) {
      return false;
    }

    const hasLetter = /[a-zA-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);

    return hasLetter && hasNumber;
  }
  private async checkAddress(address: string, city: string): Promise<boolean> {
    if (city.trim().toLowerCase() !== "bitonto") {
      return false;
    }

    const query = `${address} Bitonto Italia`;
    const endpoint = `https://photon.komoot.io/api/?q=${encodeURIComponent(query)}&limit=5`;

    const response = await fetch(endpoint);
    const data = await response.json();

    if (!data.features || data.features.length === 0) {
      return false;
    }

    const viaInput = address.toLowerCase().trim();

    for (const feature of data.features) {
      const props = feature.properties;

      // Deve essere a Bitonto
      const cityFound = (
        props.city ||
        props.town ||
        props.village ||
        ""
      ).toLowerCase();
      if (!cityFound.includes("bitonto")) {
        continue;
      }

      // Deve essere una strada
      if (props.type !== "street") {
        continue;
      }

      // Il nome deve corrispondere
      const stradaTrovata = (props.name || props.street || "").toLowerCase();
      if (
        stradaTrovata.includes(viaInput) ||
        viaInput.includes(stradaTrovata)
      ) {
        return true;
      }
    }

    return false;
  }
  public async login(email: string, password: string): Promise<boolean> {
    if (email != "" && password != "") {
      try {
        const endpoint = `${this.altervistaUrl}/?api=login`;
        const responde = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });
        const data = await responde.json();
        if (data.success) {
          if (data.token) {
            localStorage.setItem("bearerToken", data.token);
          }
          this.isLogedIn = true;
          return true;
        }
      } catch (error) {
        console.error("Login error:", error);
      }
    }
    return false;
  }

  public logout(): void {
    this.isLogedIn = false;
    localStorage.removeItem("bearerToken");
  }

  public async profile(): Promise<void> {
    const endpoint = `${this.altervistaUrl}/?api=profile`;
    const responde = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("bearerToken")}`,
      },
    });
    const data = await responde.json();
    console.log("Profile data:", data.profile.data[0]);
  }

  public isLoggedIn(): boolean {
    return this.isLogedIn;
  }
}
