import { faker } from '@faker-js/faker';

// interface UserData {
//   name: string;
//   location: {
//     lat: number;
//     lng: number;
//   };
// }

export class User {
  name: string;
  location: { lat: number; lng: number };

  constructor() {
    this.name = faker.name.findName();
    this.location = {
      lat: +faker.address.latitude(),
      lng: +faker.address.longitude(),
    };
  }
}
