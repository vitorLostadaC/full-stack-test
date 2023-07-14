export interface Beer {
  id: 321
  name: string
  tagline: string
  first_brewed: string
  description: string
  image_url: null
  abv: 4.7
  ibu: 35
  target_fg: 1008
  target_og: 1043
  ebc: 13
  srm: 7
  ph: 4.6
  attenuation_level: 81
  volume: {
    value: 20
    unit: string
  }
  boil_volume: {
    value: 25
    unit: string
  }
  method: {
    mash_temp: [
      {
        temp: {
          value: 63
          unit: string
        }
        duration: 35
      }
    ]
    fermentation: {
      temp: {
        value: 21
        unit: string
      }
    }
    twist: null
  }
  ingredients: {
    malt: {
      name: string
      amount: {
        value: 3.12
        unit: string
      }
    }[]
    hops: {
      name: string
      amount: {
        value: 6
        unit: string
      }
      add: string
      attribute: string
    }[]
    yeast: string
  }
  food_pairing: string[]
  brewers_tips: string
  contributed_by: string
}
