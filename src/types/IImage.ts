export interface IImage {
  medium: string;
}

export interface IMovie {
	id: string;
	image: IImage;
}


export interface IPosition {
  title: string;
  salary:number;
}

export interface IUser {
  name: string;
  lastName:string;
  position: IPosition;
}