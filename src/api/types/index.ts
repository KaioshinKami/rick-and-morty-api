
export interface ICharacters {
    id: number,
    name: string,
    characters: string,
    image: string,
    status: string,
    species:string,
    origin: {
        name: string
    }
    location: {
        name: string
    }
}

export interface ILocations {
    id:number,
    name:string,
    type:string,
    dimension:string,
    residents:string,
}

export interface IEpisodes {
    id: number,
    name: string,
    air_date: string,
    characters: string
}