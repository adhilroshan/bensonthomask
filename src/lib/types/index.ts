export enum Variant {
	outline,
	rounded,
	partiallyRounded
}

export interface Hero {
	tagline: string;
	description: string;
	btnText: string;
	btnUrl: string;
	Headshot: string;
}

export interface Event{
		title:string;
		desc:string;
		btnText:string;
		img:string;
	}

export interface AboutMeData {
	title: string;
	description: string;
	bgImg: string;
	bgColor: string;
	date: string; // You can use a more specific date type if needed
}
export interface ChurchData {
	imgUrl: string;
	playlistId: string;
}
export interface Story {
	supTitle: string;
	title: string;
	date: string;
}
export interface StoryData {
	slug: string;
	imgUrl: string;
	posterTitle: string;
	posterDesc: string;
	date: string;
}
