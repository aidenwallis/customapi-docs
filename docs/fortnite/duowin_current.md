---
id: duowin_current
title: Current season duo wins
sidebar_label: Season duo wins
---

Fetch a users current duo wins this season. Data sourced from [fortnitetracker.com](https://fortnitetracker.com).

## Example response
```12```

## Optional query parameters
| noLocale | Don't add commas in the number |
|----------|--------------------------------|

### Example usage
```https://customapi.aidenwallis.co.uk/api/v1/fortnite/stats/duowin_current/pc/ninja?noLocale=1```

---

Replace `:username` with whatever username you'd like to lookup.

Replace `:platform` with either `xbl`, `psn`, or `pc`.

## Fossabot
```$(customapi https://customapi.aidenwallis.co.uk/api/v1/fortnite/stats/duowin_current/:platform/:username)```

## Nightbot
```$(readapi https://customapi.aidenwallis.co.uk/api/v1/fortnite/stats/duowin_current/:platform/:username)```

## StreamElements
```${customapi.https://customapi.aidenwallis.co.uk/api/v1/fortnite/stats/duowin_current/:platform/:username}```

## Streamlabs Chatbot
```$readapi(https://customapi.aidenwallis.co.uk/api/v1/fortnite/stats/duowin_current/:platform/:username)```
