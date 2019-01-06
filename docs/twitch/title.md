---
id: title
title: Fetch channel title
sidebar_label: Fetch channel title
---

Easily fetch a channels current title. Will return an error if channel is offline.

## Example response
```Welcome to my stream! :)```

---

## Fossabot
```$(customapi https://customapi.aidenwallis.co.uk/api/v1/twitch/channel/$(channel)/title)```

## Nightbot
```$(readapi https://customapi.aidenwallis.co.uk/api/v1/twitch/channel/$(channel)/title)```

## StreamElements
```${customapi.https://customapi.aidenwallis.co.uk/api/v1/twitch/channel/${channel}/title}```

## Streamlabs Chatbot
```$readapi(https://customapi.aidenwallis.co.uk/api/v1/twitch/channel/$channel/title)```
