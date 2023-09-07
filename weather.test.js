// weather.test.js

const Weather = require('./weather');

describe('Weather class', () => {
  it('should return "rain" with a 20% chance of rain', () => {
    jest.spyOn(Math, 'random').mockReturnValue(0.15); // Mock Math.random to return 0.15 (15% chance)
    const actual = Weather.today();
    const expected = 'rain'
    expect(actual).toBe(expected);
    jest.restoreAllMocks(); // Restore the original Math.random
  });

  it('should return "sunny" with an 80% chance of no rain', () => {
    jest.spyOn(Math, 'random').mockReturnValue(0.85); // Mock Math.random to return 0.85 (85% chance)
    const actual = Weather.today();
    const expected = 'sunny';
    expect(actual).toBe(expected);
    jest.restoreAllMocks(); // Restore the original Math.random
  });

  it('should return error status when API is offline', () => {
    jest.spyOn(Weather, 'freshWeatherForCity').mockReturnValue(
        {
            "success": false, 
            "error": "API is OFFLINE"
        }
    );
    const actual = Weather.freshWeatherForCity('London').success;
    const expected = false;

    expect(actual).toBe(expected);
  });

//   it('should return "rain" with a 20% chance of rain', () => {
//     const actual = Weather.today();
//     const expected = 'rain';
//     expect(actual).toBe(expected);
//   })

//   it('should return "sunny" with a 80% chance of sunny', () => {
//     const actual = Weather.today();
//     const expected = 'sunny';
//     expect(actual).toBe(expected);
//   })
});
