# edwise-authentication
A [Vänersorg VÄL platform](http://www.vanersborg.se/utbildningbarnomsorg/grundskola/valvanersborgslarplattform.4.52821050136a06aef543cc22.html) written in react.

## What you need
1. Install the [spotbot-server](https://github.com/himynameisjonas/spotbot)
2. Create a [Firebase](https://www.firebase.com) application

## .env variables
```
FIREBASE_DEV_URL=https://[app_name].firebaseio.com/
FIREBASE_PROD_URL=https://[app_name].firebaseio.com/
SPOTIFY_MARKET=se
SPOTIFY_SEARCH_LIMIT=10
SPOTIFY_SEARCH_TYPES=track,album,artist
```

### Install required software for react-spotbot-client
install [node.js](https://nodejs.org)

install gulp ```npm install gulp -g```

install dependencies ```npm install```

### Start dev server
run ```gulp```

### Build for production
run ```gulp dist```

### Deploy to divshot
