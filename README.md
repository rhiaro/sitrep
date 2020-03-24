# SitRep

A simple JS travel log using [leaflet.js](https://leafletjs.com) and some spaghetti javascript. The markers on the map are different colour intensities depending on how many days you spent in a place.

To make this your own, fork the repo and make any or all of the changes listed below.

## Config

* Swap out the image `img/header.jpg` with your own if you want.
* Change the title and subtitle in the header in `index.html`.
* Replace the data in `data/data.js` with your own, or generate a similar object to pass as the `data` variable in `js/sitrep.js`.
* Change the map tiles, see [leafletjs](https://leafletjs.com/examples/quick-start/).
* Change the base colour of the map makers in `sitrep.js`.
* Add your own CSS.

## Data

The data it expects looks like...

```
[
    {
        "name": "London",
        "coordinates": [51.508, -0.11],
        "visits": [
        {
            "content": "This is a test place",
            "startDate": "2020-01-01T09:00:00+01:00",
            "endDate": "2020-03-07T09:00:00+01:00"
        },
        {
            "content": "Another time I went to test",
            "startDate": "2020-04-01T09:00:00+01:00",
            "endDate": "2020-04-07T09:00:00+01:00"
        }
        ]
    },
    { ... }
]

```

You can either hand-edit this, or generate it somehow from another system or other logs you have for tracking your trips. 

You can look up the lat/lon coordinates of the places you've been on Wikipedia.