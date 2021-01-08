# NASApp Project
<div style="text-align:center;">
<img src="https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png" alt="logo" width="50%" />
</div>

A mobile App designed for **Astrophiles** (people who love stars or astronomy). The user can see Astronomy Picture of the Day, search the NASA database, save the favorite result, and see his favorites.

This is a **MERN FullStack Application**.

## project Screenshots
### NavBar 
<div style="text-align: center;">
<img src="./navbar.PNG" width="50%"/>
</div>

### home

render data from external API called Astronomy Picture of the Day (APOD) from [NASA](https://api.nasa.gov/) API

<div style="text-align: center;">
<img src="./home.png" width="40%"/>
</div>

### Search

The user can search any keyword and results will be displayed from **NASA Image and Video Library**. If the user liked that image, the image will be added to the favorites in the database. 

<div style="display: grid; grid-template-columns: repeat(3, 1fr); grid-gap:1vw;">
<img src="./search.png" width="30%" /> 
<img src="./search2.PNG" width="30%" /> 
<img src="./save.png" width="30%"/>
</div>

### Favorites

Display the favorite images from the Database. The user can see each one separately with its explanation and also delete the image.

<div style="display: grid; grid-template-columns: repeat(3, 1fr); grid-gap:1vw;">
<img src="./favorites.png" width="30%"/>
<img src="./favoriteId.png" width="30%"/>
<img src="./delete.png" width="30%"/>
</div>

## Technology used

- Client-side: React, Material-ui, 
- Server: NodeJs, Express, mongoose
- Database: MongoDB
- External API is [NASA API](https://api.nasa.gov/) which include
    - [APOD](https://apod.nasa.gov/apod/astropix.html): Astronomy Picture of the Day
    - [NASA Image and Video Library](images.nasa.gov)

## Getting Started

- Clone this repository. You will need `node`, `npm` and `MongoDB` installed globally on your machine.
- **Windows:** run `mongod` in the command line 
- run `npm install`
- run `node server` in a terminal
- run `npm start` in another terminal 




