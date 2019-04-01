# FlameForDiscord
>a simple discord message analyzer for your discord server

## Interface & ToolPlay
This is a CLI output of the program.
```
root@trackprojects:~# node bot.js
[BOT] Started...
FlameForDiscord : FameForDiscord™#6731 Ready!
```
## Installation
First you need to install a few modules to prevent errors like this that will prevent you from running the script.
```
root@trackprojects:~# node bot.js
internal/modules/cjs/loader.js:583
    throw err;
    ^

Error: Cannot find module 'discord.js'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:581:15)
    at Function.Module._load (internal/modules/cjs/loader.js:507:25)
    at Module.require (internal/modules/cjs/loader.js:637:17)
    at require (internal/modules/cjs/helpers.js:22:18)
    at Object.<anonymous> (/Users/zphantom/Desktop/TrackProjects/Flame/bot.js:9:13)
    at Module._compile (internal/modules/cjs/loader.js:689:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:700:10)
    at Module.load (internal/modules/cjs/loader.js:599:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:538:12)
    at Function.Module._load (internal/modules/cjs/loader.js:530:3)
```
To do this run the following commands on your system. <br>
```npm install discord.js```
These will install all the npm modules required to run this script. Once all this is done run this command to finnaly start the discord bot.<br>
```node bot.js```

## TODOs Are Listed Bellow:
TODOs | Status
------|-------
Message analyzer | [ :+1: ]
Custom Keyword Support | [ :-1: ]
Lower memory usage | [ :-1: ]
Keyword and data logging to file | [ :-1: ]
