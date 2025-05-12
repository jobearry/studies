export class Country{
  constructor(
    public name: Name,
    public topLevelDomain: string[],
    public alpha2Code: string,
    public alpha3Code: string,
    public callingCodes: string[],
    public capital: string,
    public cca3: string,
    public altSpellings: string[],
    public subregion: string,
    public region: string,
    public population: number,
    public latlng: number[],
    public demonym: string,
    public area: number,
    public timezones: string,
    public borders: string[],
    public nativeName: string,
    public numericCode: string,
    public flags: Flag,
    public currencies: string[],
    public flag: string, //svg format
    public regionalBlocs: RegionalBlocs[],
    public cioc: string,
    public independent: boolean
  ){
    this.name = name
    this.topLevelDomain = topLevelDomain
    this.alpha2Code = alpha2Code
    this.alpha3Code = alpha3Code
    this.callingCodes = callingCodes
    this.capital = capital
    this.cca3 = cca3
    this.altSpellings = altSpellings
    this.subregion = subregion
    this.region = region
    this.population = population
    this.latlng = latlng
    this.demonym = demonym
    this.area = area
    this.timezones = timezones
    this.borders = borders
    this.nativeName = nativeName
    this.numericCode = numericCode
    this.flags = flags
    this.currencies = currencies
    this.flag = flag
    this.regionalBlocs = regionalBlocs
    this.cioc = cioc
    this.independent = independent
  }
}
export interface Name{
  common: string,
  nativeName: NativeName
  official: string
}
export interface NativeName{
  eng: INativeName,
  tsn: INativeName
}
export interface INativeName{
  common: string
  official: string
}
export interface Flag{
  alt: string,
  svg: string,
  png: string
}

export interface Currency{
  code: string,
  name: string,
  symbol: string,
}

export interface Language{
  "iso639_1": string,
  "iso639_2": string,
  "name": string,
  "nativeName": string
}

export interface Transalation{
  br: string,
  pt: string,
  nl: string,
  hr: string,
  fa: string,
  de: string,
  es: string,
  fr: string,
  ja: string,
  it: string,
  hu: string,
}

export interface RegionalBlocs{
  acronym: string,
  name: string
}
