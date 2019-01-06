---
id: twitch
title: Twitch emotes
sidebar_label: Twitch
---

Data is sourced from [Twitchemotes.com](https://twitchemotes.com) every 30 minutes.

Fetch a channels Twitch emotes, returns an error if they are not found in the latest [twitchemotes.com](https://twitchemotes.com) poll.

## Example response
```pajaPepe pajaW pajaDuck pajaGASM pajaHappy pajaXD pajaCool pajaS pajaDank pajaCmon pajaH pajaL pajaR pajaKek pajaDog pajaVan pajaHandsUp pajaFishingRod pajaMLADA paja1 pajaWTH pajaC pajaLaugh pajaLady pajaScoots pajaHey pajaCho pajaTake pajaShrugL pajaShrugR pajaGa pajaCopter paja2 pajaEmote```

---

## Fossabot
```$(customapi https://customapi.aidenwallis.co.uk/api/v1/emotes/$(channel)/twitch)```

## Nightbot
```$(readapi https://customapi.aidenwallis.co.uk/api/v1/emotes/$(channel)/twitch)```

## StreamElements
```${customapi.https://customapi.aidenwallis.co.uk/api/v1/emotes/${channel}/twitch}```

## Streamlabs Chatbot
```$readapi(https://customapi.aidenwallis.co.uk/api/v1/emotes/$channel/twitch)```
