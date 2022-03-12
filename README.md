# StatWizard
Having a discord server is one thing, knowing your servers demographics is another. Introducing StatWizard! The discord bot which logs a sea of statistical information about your discord server on demand.

---

## Build Instructions
If you are trying to host the bot yourself, there are a few packages you need to install first. Run the command for your right OS:
- Linux: `sudo apt-get install build-essential libcairo2-dev libpango1.0-dev libjpeg-dev libgif-dev librsvg2-dev`
- MacOS(Homebrew): brew install pkg-config cairo pango libpng jpeg giflib librsvg
- Windows: see the [wiki](https://github.com/Automattic/node-canvas/wiki/Installation:-Windows)

Next, run this command to finish installing the necessary packages:
`npm install discord.js canvas dotenv`

---

## Upcoming Features
These are commands that will soon be added to the bot:

- user_uptime (user): Displays user uptime in the server
- chart_regions: Makes a chart of the regions of the members in the server