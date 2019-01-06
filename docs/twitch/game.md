---
id: game
title: Fetch channel game
sidebar_label: Fetch channel game
---

Easily fetch a channels current title. Will return an error if channel is offline.

## Example response
```Fortnite```

## Optional query parameters
| steamGame | Will add the steam store link next to the game name if the game is found on steam |
|-----------|-----------------------------------------------------------------------------------|

### Example usage
```https://customapi.aidenwallis.co.uk/api/v1/twitch/channel/$(channel)/game?steamGame=1```

---

## Fossabot
```$(customapi https://customapi.aidenwallis.co.uk/api/v1/twitch/channel/$(channel)/game)```

## Nightbot
```$(readapi https://customapi.aidenwallis.co.uk/api/v1/twitch/channel/$(channel)/game)```

## StreamElements
```${customapi.https://customapi.aidenwallis.co.uk/api/v1/twitch/channel/${channel}/game}```

## Streamlabs Chatbot
```$readapi(https://customapi.aidenwallis.co.uk/api/v1/twitch/channel/$channel/game)```
