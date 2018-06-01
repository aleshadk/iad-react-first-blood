export interface INamed {
    id: string;
    name: string;
}

export interface IDepatment extends INamed {
    locations: INamed[];
}

export interface IEmployee extends INamed {
    location: INamed;
    department: IDepatment;
}
