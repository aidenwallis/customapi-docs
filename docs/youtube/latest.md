---
id: latest
title: Latest YouTube video
sidebar_label: Latest YouTube video
---

Fetches the latest YouTube video from either a username or channel ID you specify.

## Example response
```Sodapoppin's Most Popular Clips #14 (December) - https://youtu.be/Yw-0xFicB64```

## Optional query parameters
| Query name      | Description                                        |
|-----------------|----------------------------------------------------|
| excludeTitle    | Exclude the title from the API response            |
| titleQuotations | Add title quotes around the title name             |
| idOnly          | Only return the ID, not the full YouTube link      |
| longUrl         | Return the full youtube.com URL, not just youtu.be |

### Example usage
```https://customapi.aidenwallis.co.uk/api/v1/youtube/latest/:username?idOnly=1&titleQuotations=1```

---

Replace `:username` with whatever username or YouTube ID you'd like to lookup.

## Fossabot
```$(customapi https://customapi.aidenwallis.co.uk/api/v1/youtube/latest/:username)```

## Nightbot
```$(readapi https://customapi.aidenwallis.co.uk/api/v1/youtube/latest/:username)```

## StreamElements
```${customapi.https://customapi.aidenwallis.co.uk/api/v1/youtube/latest/:username}```

## Streamlabs Chatbot
```$readapi(https://customapi.aidenwallis.co.uk/api/v1/youtube/latest/:username)```
