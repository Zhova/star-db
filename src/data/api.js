export class SwapiSerwice {
   _apiBase = 'https://swapi.dev/api';

   async getResource(url) {
      const res = await fetch(`${this._apiBase}${url}`);
      return await res.json();
   }

   getAllPeople() {
      return this.getResource(`/people/`);
   }
   getPerson(id) {
      return this.getResource(`/people/${id}`);
   }

   getAllPlanets() {
      return this.getResource(`/planets/`);
   }
   getPlanet(id) {
      return this.getResource(`/planets/${id}`);
   }

   getAllShips() {
      return this.getResource(`/starships/`);
   }
   getShip(id) {
      return this.getResource(`/starships/${id}`);
   }
}