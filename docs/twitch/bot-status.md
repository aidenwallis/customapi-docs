---
id: bot-status
title: Check bot status
sidebar_label: Check bot status
---

Check the IRC limits of any user on Twitch.

## Example response
```Verified bot: true - Known bot: false```

## Optional query parameters
| includeLimits | Append to the response their IRC chat limits |
|---------------|----------------------------------------------|

### Example usage
```https://customapi.aidenwallis.co.uk/api/v1/twitch/botStatus/:username?includeLimits=1```

---

Replace `:username` with whatever username you'd like to lookup.

## Fossabot
```$(customapi https://customapi.aidenwallis.co.uk/api/v1/twitch/botStatus/:username)```

## Nightbot
```$(readapi https://customapi.aidenwallis.co.uk/api/v1/twitch/botStatus/:username)```

## StreamElements
```${customapi.https://customapi.aidenwallis.co.uk/api/v1/twitch/botStatus/:username}```

## Streamlabs Chatbot
```$readapi(https://customapi.aidenwallis.co.uk/api/v1/twitch/botStatus/:username)```
