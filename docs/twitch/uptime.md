---
id: uptime
title: Fetch channel uptime
sidebar_label: Fetch channel uptime
---

Easily fetch a channels current uptime. Will return an error if channel is offline.

## Example response
```AidenWallis has been live for 01h, 25m, 33s```

---

## Fossabot
```$(customapi https://customapi.aidenwallis.co.uk/api/v1/twitch/channel/$(channel)/uptime)```

## Nightbot
```$(readapi https://customapi.aidenwallis.co.uk/api/v1/twitch/channel/$(channel)/uptime)```

## StreamElements
```${customapi.https://customapi.aidenwallis.co.uk/api/v1/twitch/channel/${channel}/uptime}```

## Streamlabs Chatbot
```$readapi(https://customapi.aidenwallis.co.uk/api/v1/twitch/channel/$channel/uptime)```
