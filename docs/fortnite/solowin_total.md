---
id: solowin_total
title: Total solo wins
sidebar_label: Total solo wins
---

Fetch a users total solo wins. Data sourced from [fortnitetracker.com](https://fortnitetracker.com).

## Example response
```12```

## Optional query parameters
| noLocale | Don't add commas in the number |
|----------|--------------------------------|

### Example usage
```https://customapi.aidenwallis.co.uk/api/v1/fortnite/stats/solowin_total/pc/ninja?noLocale=1```

---

Replace `:username` with whatever username you'd like to lookup.

Replace `:platform` with either `xbl`, `psn`, or `pc`.

## Fossabot
```$(customapi https://customapi.aidenwallis.co.uk/api/v1/fortnite/stats/solowin_total/:platform/:username)```

## Nightbot
```$(readapi https://customapi.aidenwallis.co.uk/api/v1/fortnite/stats/solowin_total/:platform/:username)```

## StreamElements
```${customapi.https://customapi.aidenwallis.co.uk/api/v1/fortnite/stats/solowin_total/:platform/:username}```

## Streamlabs Chatbot
```$readapi(https://customapi.aidenwallis.co.uk/api/v1/fortnite/stats/solowin_total/:platform/:username)```
