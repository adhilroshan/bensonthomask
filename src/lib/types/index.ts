export enum Variant {
	outline,
	rounded,
	partiallyRounded
}

/* Home Page */
/* ------------------------------------------------------------------------ */
export interface Home {
	heros: Hero;
	events: Event;
	story: Story;
	storyData: StoryData[];
}

export interface Hero {
	title: string;
	description: string;
	btnText: string;
	btnUrl: string;
	img: string;
}

export interface Event {
	title: string;
	desc: string;
	btnText: string;
	img: string;
}

export interface Story {
	supTitle: string;
	title: string;
	date: string;
}
export interface StoryData {
	imgUrl: string;
	posterTitle: string;
	posterDesc: string;
	date: string;
	slug: string;
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
	text: string;
	playlistId: string;
}

/* Events Page */
export interface Events {
	layout: string;
	slug: string;
	title: string;
	description: string;
	date: string;
	thumbnail: string;
	published: boolean;
	body: string;
}
