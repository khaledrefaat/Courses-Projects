import { faker } from '@faker-js/faker';
import { Marker } from './CustomMap';

export class Company implements Marker {
  name: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: +faker.address.latitude(),
      lng: +faker.address.longitude(),
    };
  }

  markerContent() {
    return `<div><strong>Company Name:</strong> ${this.name}
      <br />    
      <strong>Catchphrase:</strong> ${this.catchPhrase}</div>
      `;
  }
}
