export interface User {
    userId: number;
    userName: string;
    password: string;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    birthDate: Date;
    abonneRestaurant: boolean;
    abonneFoyer: boolean;
    accountNonExpired: boolean;
    accountNonLocked: boolean;
    credentialsNonExpired: boolean;
    enabled: boolean;
  }