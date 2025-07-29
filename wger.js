import fetch from 'node-fetch';

class WgerAPI {
  constructor(baseUrl = 'https://wger.de/api/v2') {
    this.baseUrl = baseUrl;
  }

  async getExercises() {
    try {
      const response = await fetch(`${this.baseUrl}/exercise/`);
      const data = await response.json();
      return data.results; // just return the actual exercises
    } catch (error) {
      console.error('Failed to fetch exercises:', error);
      return null;
    }
  }
}

export default WgerAPI;

// TESTING
const api = new WgerAPI();
api.getExercises().then(exercises => {
  console.log('Fetched', exercises.length, 'exercises');
  console.log(exercises[0]); // print the first exercise as an example
});
