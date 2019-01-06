---
id: wins_total
title: Total wins
sidebar_label: Total wins
---

Fetch a users total wins, simply all data from the squad, duo and solo wins added up. Data sourced from [fortnitetracker.com](https://fortnitetracker.com).

## Example response
```12```

## Optional query parameters
| noLocale | Don't add commas in the number |
|----------|--------------------------------|

### Example usage
```https://customapi.aidenwallis.co.uk/api/v1/fortnite/stats/wins_total/pc/ninja?noLocale=1```

---

Replace `:username` with whatever username you'd like to lookup.

Replace `:platform` with either `xbl`, `psn`, or `pc`.

## Fossabot
```$(customapi https://customapi.aidenwallis.co.uk/api/v1/fortnite/stats/wins_total/:platform/:username)```

## Nightbot
```$(readapi https://customapi.aidenwallis.co.uk/api/v1/fortnite/stats/wins_total/:platform/:username)```

## StreamElements
```${customapi.https://customapi.aidenwallis.co.uk/api/v1/fortnite/stats/wins_total/:platform/:username}```

## Streamlabs Chatbot
```$readapi(https://customapi.aidenwallis.co.uk/api/v1/fortnite/stats/wins_total/:platform/:username)```
