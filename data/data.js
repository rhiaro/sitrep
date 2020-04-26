var data = [
    {
        "name": "Albania, Sarande" ,
        "coordinates": [39.52, 20.06],
        "visits": [
        {
            "content": "Stuck under curfew, but the view is nice",
            "startDate": "2020-02-12T09:00:00+01:00",
            "endDate": Date.now()
        }
        ]
    },
    {
        "name": "UK, London",
        "coordinates": [51.509865, -0.118092],
        "visits": [
            {
                "content": "Advancing Bitcoin and Optech workshop",
                "startDate": "2020-02-04T19:00:00+01:00",
                "endDate": "2020-02-08T21:00:00+01:00"
            },
            {
                "content": "Mozfest and Redecentralize conferences",
                "startDate": "2019-10-21T09:00:00+01:00",
                "endDate": "2019-10-28T09:00:00+01:00"
            }
        ]
    },
    {
        "name": "Netherlands, Amsterdam",
        "coordinates": [52.3667, 4.8945],
        "visits": [
            {
                "content": "Visiting with the W3C (DID F2F)",
                "startDate": "2020-01-28T09:00:00+01:00",
                "endDate": "2020-02-04T22:00:00+01:00"
            },
            {
                "content": "Moodle Master",
                "startDate": "2019-06-16",
                "endDate": "2019-06-17"
            },
            {
                "content": "Breaking Bitcoin Conference",
                "startDate": "2019-06-07",
                "endDate": "2019-06-15"
            }
        ]
    },
    {
        "name": "UK, Buxton",
        "coordinates": [53.2591, 1.9148],
        "visits": [
            {
                "content": "Hiking in the Peak District",
                "startDate": "2020-01-23T09:00:00+01:00",
                "endDate": "2020-01-27T09:00:00+01:00"
            }
        ]
    },
    {
        "name": "UK, Sheffield",
        "coordinates": [53.383331, -1.466667],
        "visits": [
        {
            "content": "Staying out of Schengen for a while",
            "startDate": "2020-01-04T09:00:00+01:00",
            "endDate": "2020-01-27T18:00:00+01:00"
        }
        ]
    },
    {
        "name": "France, Paris",
        "coordinates": [48.864716, 2.349014],
        "visits": [
        {
            "content": "New Year's with Paul and friends",
            "startDate": "2019-12-28T09:00:00+01:00",
            "endDate": "2020-01-03T22:00:00+01:00"
        }
        ]
    },
    {
        "name": "Czech Republic, Prague",
        "coordinates": [50.0755, 14.4378],
        "visits": [
            {
                "content": "Coding for Christmas",
                "startDate": "2019-12-24T09:00:00+01:00",
                "endDate": "2019-12-27T09:00:00+01:00"
            },
            {
                "content": "Rebooting Web of Trust 9 and ActivityPub",
                "startDate": "2019-09-01T09:00:00+01:00",
                "endDate": "2019-10-17T09:00:00+01:00"
            }
        ]
    },
    {
        "name": "Bulgaria, Burgas",
        "coordinates": [42.5048, 27.4626],
        "visits": [
            {
                "content": "Beach coding",
                "startDate": "2019-11-22T09:00:00+01:00",
                "endDate": "2019-12-14T09:00:00+01:00"
            }
        ]
    },
    {
        "name": "Turkey, Istanbul",
        "coordinates": [41.0082, 28.9784],
        "visits": [
            {
                "content": "Escape to Turkey for a Turkish bath",
                "startDate": "2019-12-14T09:00:00+01:00",
                "endDate": "2019-12-16T09:00:00+01:00"
            }
        ]
    },
    {
        "name": "Bulgaria, Burgas",
        "coordinates": [42.5048, 27.4626],
        "visits": [
            {
                "content": "Back to the beach",
                "startDate": "2019-12-16T09:00:00+01:00",
                "endDate": "2019-12-24T09:00:00+01:00"
            }
        ]
    },
    {
        "name": "Montenegro, Cetinje",
        "coordinates": [42.3931, 18.9116],
        "visits": [
            {
                "content": "Hiking in the mountains",
                "startDate": "2019-11-01T09:00:00+01:00",
                "endDate": "2019-11-21T09:00:00+01:00"
            }
        ]
    },
    {
        "name": "Germany, Frankfurt",
        "coordinates": [50.1109, 8.6821],
        "visits": [
            {
            
                "content": "The bus drove away with my laptop!",
                "startDate": "2019-10-28T09:00:00+01:00",
                "endDate": "2019-11-01T09:00:00+01:00"
            
            }
        ]
    },
    {
        "name": "Germany, Berlin",
        "coordinates": [52.5200, 13.4050],
        "visits": [
            {
            
                "content": "Lightning Conference",
                "startDate": "2019-10-17T09:00:00+01:00",
                "endDate": "2019-10-21T09:00:00+01:00"
            
            }
        ]
    },
    {
        "name": "Austria, Vienna",
        "coordinates": [48.2082, 16.3738],
        "visits": [
            {
                "content": "Pre Rebooting Web of Trust Meetup and beer with Markus",
                "startDate": "2019-08-26T09:00:00+01:00",
                "endDate": "2019-09-01T09:00:00+01:00"
            }
        ]
    },
    {
        "name": "Macedonia, Trpejca (Lake Ohrid)",
        "coordinates": [40.9606, 20.7830],
        "visits": [
            {
                "content": "Visit the largest lake in Europe",
                "startDate": "2019-08-18",
                "endDate": "2019-08-19"
            }
        ]
    },
    {
        "name": "Albania, Tirana",
        "coordinates": [41.3275, 19.8187],
        "visits": [
            {
                "content": "Weekend in Tirana",
                "startDate": "2019-07-13",
                "endDate": "2019-07-15"
            }
        ]
    },
    {
        "name": "Macedonia, Skopje",
        "coordinates": [41.9981, 21.4254],
        "visits": [
            {
                "content": "Wow is it hot in hear",
                "startDate": "2019-07-15",
                "endDate": "2019-07-22"
            },
            {
                "content": "Wow is it hot in hear",
                "startDate": "2019-07-24",
                "endDate": "2019-08-04"
            },
            {
                "content": "Remote BTCR Hackathon",
                "startDate": "2019-08-06",
                "endDate": "2019-08-11"
            },
            {
                "content": "Surving the heat (barely)",
                "startDate": "2019-08-15",
                "endDate": "2019-08-23"
            }
        ]
    },
    {
        "name": "Kosovo, Pristina",
        "coordinates": [42.6629, 21.1655],
        "visits": [
            {
                "content": "There's a statue of Bill Clinton here?!",
                "startDate": "2019-08-04",
                "endDate": "2019-08-06"
            }
        ]
    },
    {
        "name": "Macedonia, Matka Canyon",
        "coordinates": [41.5624, 21.1800],
        "visits": [
            {
                "content": "Kayaking",
                "startDate": "2019-07-22",
                "endDate": "2019-07-24"
            }
        ]
    },
    {
        "name": "Serbia, Belgrade",
        "coordinates": [44.7866, 20.4489],
        "visits": [
            {
                "content": "Telecommuting",
                "startDate": "2019-08-14",
                "endDate": "2019-08-15"
            }
        ]
    },
    {
        "name": "Croatia, Split",
        "coordinates": [43.5081, 16.4402],
        "visits" : [
            {
                "content": "Visiting with friends and enjoying the beach",
                "startDate": "2019-08-11",
                "endDate": "2019-08-13"
            }
        ]
    },
    {
        "name": "Montenegro, Kotor",
        "coordinates": [42.4247, 18.7712],
        "visits": [
            {
                "content": "Hanging out by the bay of Kotor",
                "startDate": "2019-06-28",
                "endDate": "2019-07-07"
            }
        ]
    },
    {
        "name": "Montenegro, Njeguši",
        "coordinates": [42.4338, 18.8102],
        "visits": [
            {
                "content": "Hiking in the mountains (Lovcen)",
                "startDate": "2019-07-07",
                "endDate": "2019-07-14"
            }
        ]
    },
    {
        "name": "Netherlands, Zwolle",
        "coordinates": [52.5168, 6.0830],
        "visits": [
            {
                "content": "Bike excursion",
                "startDate": "2019-06-15",
                "endDate": "2019-06-16"
            }
        ]
    },
    {
        "name": "Montenegro, Bijela",
        "coordinates": [42.4573, 18.6443],
        "visits": [
            {
                "content": "Staying in a small place by the sea",
                "startDate": "2019-06-01",
                "endDate": "2019-06-06"
            }
        ]
    },
    {
        "name": "Romania, Constanța",
        "coordinates": [44.1598, 28.6348],
        "visits": [
            {
                "content": "Roaming in Romania",
                "startDate": "2019-05-03",
                "endDate": "2019-05-30"
            }
        ]
    },
    {
        "name": "Slovakia, Bratislava",
        "coordinates": [48.1486, 17.1077],
        "visits": [
            {
                "content": "Nice stay in a container house",
                "startDate": "2019-04-12",
                "endDate": "2019-05-02"
            }
        ]
    },
    {
        "name": "Poland, Warsaw",
        "coordinates": [52.2297, 21.0122],
        "visits": [
            {
                "content": "Sleeping in the squats by night, coding in a WeWork by day",
                "startDate": "2019-04-05",
                "endDate": "2019-04-12"
            }
        ]
    },
    {
        "name": "Poland, Krakow",
        "coordinates": [50.0647, 19.9450],
        "visits": [
            {
                "content": "Visiting some buddhist meditation center",
                "startDate": "2019-03-28",
                "endDate": "2019-04-05"
            }
        ]
    },
    {
        "name": "Hungry, Budapest",
        "coordinates": [47.4979, 19.0402],
        "visits": [
            {
                "content": "Eating dank vegan pizza",
                "startDate": "2019-03-23",
                "endDate": "2019-03-27"
            }
        ]
    },
    {
        "name": "Slovenia, Ljubljana",
        "coordinates": [46.0569, 14.5058],
        "visits": [
            {
                "content": "Ljubljana is also nice",
                "startDate": "2019-03-20",
                "endDate": "2019-03-23"
            }
        ]
    },
    {
        "name": "France, Nice",
        "coordinates": [43.7102, 7.2620],
        "visits": [
            {
                "content": "Minnesota nice in Nice",
                "startDate": "2019-03-16",
                "endDate": "2019-03-19"
            }
        ]
    },
    {
        "name": "Spain, Girona",
        "coordinates": [41.9794, 2.8214],
        "visits": [
            {
                "content": "M-m-m-y Girona",
                "startDate": "2019-03-10",
                "endDate": "2019-03-15"
            }
        ]
    },
    {
        "name": "Spain, Barcelona",
        "coordinates": [40.4637, 3.7492],
        "visits": [
            {
                "content": "Rebooting the web of trust",
                "startDate": "2019-03-01",
                "endDate": "2019-03-10"
            }
        ]
    }
];
