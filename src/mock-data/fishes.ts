export interface IFishes {
  fishes: (FishesEntity)[];
}
export interface FishesEntity {
  species: string;
  nicknames?: (string)[] | null | string;
  seasons?: (SeasonsEntity)[] | null;
}
export interface SeasonsEntity {
  opening?: string | null;
  close?: string | null;
  minimumSize?: number | null;
  maximumSize?: number | null;
  bagLimit?: number | null;
}


export const fishingRegulations: IFishes = {
  "fishes": [
    {
      "species":"Black Sea Bass",
      "nicknames":[
        "Biscuit",
        "Knob Head"
      ],
      "seasons":[
        {
          "opening":"2022-06-23",
          "close":"2022-08-31",
          "minimumSize":15,
          "maximumSize":null,
          "bagLimit":3
        },
        {
          "opening":"2022-09-01",
          "close":"2022-12-31",
          "minimumSize":15,
          "maximumSize":null,
          "bagLimit":7
        }
      ]
    },
    {
      "species":"Bluefish",
      "nicknames":[
        "Snapper",
        "Gator",
        "Gorilla"
      ],
      "seasons":[
        {
          "opening":null,
          "close":null,
          "minimumSize":null,
          "maximumSize":null,
          "bagLimit":3
        }
      ]
    },
    {
      "species":"Cod",
      "nicknames":null,
      "seasons":[
        {
          "opening":null,
          "close":null,
          "minimumSize":22,
          "maximumSize":null,
          "bagLimit":10
        }
      ]
    },
    {
      "species":"Fluke",
      "nicknames":[
        "Summer Flounder",
        "Doormat"
      ],
      "seasons":[
        {
          "opening":"2022-05-04",
          "close":"2022-09-30",
          "minimumSize":19,
          "maximumSize":null,
          "bagLimit":4
        }
      ]
    },
    {
      "species":"Haddock",
      "nicknames":null,
      "seasons":[
        {
          "opening":null,
          "close":null,
          "minimumSize":18,
          "maximumSize":null,
          "bagLimit":null
        }
      ]
    },
    {
      "species":"Oyster Toadfish",
      "nicknames":[
        "Hacklehead"
      ],
      "seasons":[
        {
          "opening":null,
          "close":null,
          "minimumSize":10,
          "maximumSize":null,
          "bagLimit":3
        }
      ]
    },
    {
      "species":"Pollock",
      "nicknames":null,
      "seasons":[
        {
          "opening":null,
          "close":null,
          "minimumSize":19,
          "maximumSize":null,
          "bagLimit":null
        }
      ]
    },
    {
      "species":"Porgy",
      "nicknames":[
        "Scup",
        "Sea Bream"
      ],
      "seasons":[
        {
          "opening":null,
          "close":null,
          "minimumSize":9,
          "maximumSize":null,
          "bagLimit":30
        }
      ]
    },
    {
      "species":"Striped Bass",
      "nicknames":[
        "Striper",
        "Rockfish",
        "Cow"
      ],
      "seasons":[
        {
          "opening":"2022-04-15",
          "close":"2022-12-15",
          "minimumSize":28,
          "maximumSize":35,
          "bagLimit":1
        }
      ]
    },
    {
      "species":"Tautog",
      "nicknames":[
        "Blackfish",
        "White Chin",
        "Bulldog"
      ],
      "seasons":[
        {
          "opening":"2022-04-01",
          "close":"2022-04-30",
          "minimumSize":16,
          "maximumSize":null,
          "bagLimit":2
        },
        {
          "opening":"2022-10-11",
          "close":"2022-12-09",
          "minimumSize":16,
          "maximumSize":null,
          "bagLimit":3
        }
      ]
    },
    {
      "species":"Weakfish",
      "nicknames":"Northern Sea Trout",
      "seasons":[
        {
          "opening":null,
          "close":null,
          "minimumSize":16,
          "maximumSize":null,
          "bagLimit":1
        }
      ]
    }
  ]
};

export default fishingRegulations;