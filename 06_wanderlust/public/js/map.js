// console.log(mapToken)
mapboxgl.accessToken  = mapToken 
console.log(coordinates.slice(1,coordinates.length-1).split(",").map(item=>Number(item)))
const map = new mapboxgl.Map({
    container:"map",//container ID
    //choose from mapbox's core styles, or make your own style with mapbox studio
    style:"mapbox://styles/mapbox/streets-v9",//style url
    center:coordinates.slice(1,coordinates.length-1).split(",").map(item=>Number(item)),//starting position [lang,lat]
    zoom:9 //starting zoom+
    
})

const marker = new mapboxgl.Marker({color:"red"}).setLngLat(coordinates.slice(1,coordinates.length-1).split(",").map(item=>Number(item)))
.setPopup(new mapboxgl.Popup({offset:25}).setHTML(`<h4 class="text-xl font-medium">${locationInfo}</h4><p>Exact location provided after booking</p>`))
.addTo(map)