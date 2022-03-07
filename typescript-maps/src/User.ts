import { faker } from '@faker-js/faker';
import { Marker } from './CustomMap';

// interface UserData {
//   name: string;
//   location: {
//     lat: number;
//     lng: number;
//   };
// }

export class User implements Marker {
  name: string;
  location: { lat: number; lng: number };

  constructor() {
    this.name = faker.name.findName();
    this.location = {
      lat: +faker.address.latitude(),
      lng: +faker.address.longitude(),
    };
  }

  markerContent() {
    return `<div><strong>User Name:</strong> ${this.name}</div>`;
  }
}
