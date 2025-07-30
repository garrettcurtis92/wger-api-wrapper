import fetch from 'node-fetch';

class WgerAPI {
  constructor(baseUrl = 'https://wger.de/api/v2') {
    this.baseUrl = baseUrl;
  }

  // Fetch a list of exercises
  async getExercises() {
    try {
      const response = await fetch(`${this.baseUrl}/exercise/`);
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error('Failed to fetch exercises:', error);
      return null;
    }
  }

  // Fetch a list of muscles
  async getMuscles() {
    try {
      const response = await fetch(`${this.baseUrl}/muscle/`);
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error('Failed to fetch muscles:', error);
      return null;
    }
  }

  // Fetch a list of exercise categories
  async getCategories() {
    try {
      const response = await fetch(`${this.baseUrl}/exercisecategory/`);
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error('Failed to fetch categories:', error);
      return null;
    }
  }

  // Fetch a list of equipment
  async getEquipment() {
    try {
      const response = await fetch(`${this.baseUrl}/equipment/`);
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error('Failed to fetch equipment:', error);
      return null;
    }
  }
}

// ─── TESTING ────────────────────────────────────────────────────

const api = new WgerAPI();

async function test() {
  const exercises = await api.getExercises();
  const muscles = await api.getMuscles();
  const categories = await api.getCategories();
  const equipment = await api.getEquipment();

  console.log('Fetched', exercises.length, 'exercises');
  console.log('First exercise:', exercises[0]);

  console.log('\nMuscles:', muscles.slice(0, 3)); // show a few for now
  console.log('\nCategories:', categories);
  console.log('\nEquipment:', equipment);
}

test();
