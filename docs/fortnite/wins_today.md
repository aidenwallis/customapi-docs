---
id: wins_today
title: Total wins today
sidebar_label: Wins today
---

Fetch a users total wins today. Data sourced from [fortnitetracker.com](https://fortnitetracker.com).

## Example response
```12```

## Optional query parameters
| noLocale | Don't add commas in the number |
|----------|--------------------------------|

### Example usage
```https://customapi.aidenwallis.co.uk/api/v1/fortnite/stats/wins_today/pc/ninja?noLocale=1```

---

Replace `:username` with whatever username you'd like to lookup.

Replace `:platform` with either `xbl`, `psn`, or `pc`.

## Fossabot
```$(customapi https://customapi.aidenwallis.co.uk/api/v1/fortnite/stats/wins_today/:platform/:username)```

## Nightbot
```$(readapi https://customapi.aidenwallis.co.uk/api/v1/fortnite/stats/wins_today/:platform/:username)```

## StreamElements
```${customapi.https://customapi.aidenwallis.co.uk/api/v1/fortnite/stats/wins_today/:platform/:username}```

## Streamlabs Chatbot
```$readapi(https://customapi.aidenwallis.co.uk/api/v1/fortnite/stats/wins_today/:platform/:username)```
