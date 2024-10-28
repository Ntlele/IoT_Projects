// String receivedData = "";
// float temperature, humidity;

// void setup() {
//   // Begin the serial communication at 9600 baud rate
//   Serial.begin(9600);
//   Serial.println("Waiting for data...");
// }

// void loop() {
//   if (Serial.available() > 0) {
//     // Read the incoming data as a String
//     receivedData = Serial.readStringUntil('\n'); // Reads until new line
    
//     // Parse the received data (expected format: "25.5,60.3")
//     int commaIndex = receivedData.indexOf(',');
//     if (commaIndex > 0) {
//       temperature = receivedData.substring(0, commaIndex).toFloat();
//       humidity = receivedData.substring(commaIndex + 1).toFloat();
      
//       // Print the received values
//       Serial.print("Temperature: ");
//       Serial.println(temperature);
//       Serial.print("Humidity: ");
//       Serial.println(humidity);
//     }
//   }
// }


#include "WaziDev.h"
#include "xlpp.h"

unsigned char loRaWANKey[16] = {0x23, 0x15, 0x8D, 0x3B, 0xBC, 0x31, 0xE6, 0xAF, 0x67, 0x0D, 0x19, 0x5B, 0x5A, 0xED, 0x55, 0x25};
unsigned char devAddr[4] = {0x26, 0x01, 0x1D, 0x89};

WaziDev wazidev;

void setup()
{
    Serial.begin(38400);
    wazidev.setupLoRaWAN(devAddr, loRaWANKey);
}

XLPP xlpp(120);

void loop(void)
{
  //send data to the wazigate
    xlpp.reset();
    xlpp.addTemperature(1, random()); // °C
    xlpp.addRelativeHumidity(2, random());     // V
    xlpp.addString(3, "Hello :D");

    serialPrintf("LoRaWAN send ... ");
    int e = wazidev.sendLoRaWAN(xlpp.getBuffer(), xlpp.getSize());
    if (e == 0)
        serialPrintf("OK\n");
    else
        serialPrintf("Err %d\n", e);
    delay(60000);
}

/********************
 * Program:  DHT11 sensor tester
 * Description: print humidity and temperature to serial
 ********************/
 
// #include <DHT.h>

// //Constants
// #define DHTPIN 6     // what pin on the arduino is the DHT22 data line connected to
// #define DHTTYPE DHT11   // DHT 11
// DHT dht(DHTPIN, DHTTYPE); // Initialize DHT sensor for normal Arduino

// void setup() { // to run once
//   Serial.begin(38400); // Initialize the serial port
//   Serial.println("DHT11 Humidity - Temperature Sensor");
//   Serial.println("RH\t Temp (C)");

// //  pinMode(5, OUTPUT);  digitalWrite(5, LOW);
//   pinMode(3, OUTPUT);  digitalWrite(3, HIGH);
  
//   dht.begin();
//   delay(2000);
// }

// void loop() {
//   // Reading temperature or humidity takes about 250 milliseconds!
//   // Sensor readings may also be up to 2 seconds 'old' (its a very slow sensor)
//   float h = dht.readHumidity();
//   float t = dht.readTemperature();
//   // Check if any reads failed and exit early (to try again).
//   if (isnan(h) || isnan(t)) {
//     Serial.println("Failed to read from DHT11 sensor!");
//     return;
//   }

//   Serial.println(h); 
//   Serial.println(" %\t\t");
//   Serial.println(t); 
//   Serial.println(" °C");
//   // Wait a few seconds between measurements. The DHT11 should not be read at a higher frequency of
//   // about once every 2 seconds. So we add a 3 second delay to cover this.
//   delay(60000);
// }
