---
id: weather
title: Weather
sidebar_label: Weather
---

Returns the current weather for a location. Data provided by [openweathermap.org](https://openweathermap.org/api).

## Example response
```Weather for London, GB: With overcast clouds and a temperature of 5 C (41 F). The wind is blowing from the South-West at 8 MPH (13 KPH) and the current humidity is 75%.```

---

## Fossabot
```$(customapi https://customapi.aidenwallis.co.uk/api/v1/misc/weather/$(query))```

## Nightbot
```$(readapi https://customapi.aidenwallis.co.uk/api/v1/misc/weather/$(query))```

## StreamElements
```${customapi.https://customapi.aidenwallis.co.uk/api/v1/misc/weather/${1:}}```

## Streamlabs Chatbot
```$readapi(https://customapi.aidenwallis.co.uk/api/v1/misc/weather/$query)```
