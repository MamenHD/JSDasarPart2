function convertCelsiusToFahrenheit(temperature = 50) {
    const temperatureInFahrenheit = 9 / 5 * temperature + 32;
  
    console.log('Hasil konversi:', temperatureInFahrenheit);
  }
  
  // Menggunakan default value
  convertCelsiusToFahrenheit(); // output: Hasil konversi: 122
  
  // Menggantikan default value
  convertCelsiusToFahrenheit(90); // output: Hasil konversi: 194
