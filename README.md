# WGER API Wrapper

A simple JavaScript wrapper for the WGER fitness API that provides easy access to exercise data.

## Features

- Fetch exercises from the WGER API
- Simple and clean interface
- Built with modern JavaScript (ES6+)

## Installation

```bash
npm install
```

## Usage

```javascript
import WgerAPI from './wger.js';

const api = new WgerAPI();

// Get all exercises
const exercises = await api.getExercises();
console.log(exercises);
```

## Dependencies

- node-fetch: For making HTTP requests

## API

### `new WgerAPI(baseUrl?)`

Creates a new instance of the WGER API wrapper.

- `baseUrl` (optional): The base URL of the WGER API. Defaults to `https://wger.de/api/v2`

### `getExercises()`

Fetches all exercises from the WGER API.

Returns: Promise that resolves to an array of exercise objects, or null if the request fails.

## License

ISC
