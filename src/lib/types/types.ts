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

export interface AboutMeData {
  title: string;
  description: string;
  bgImg: string;
  bgColor: string;
  date: string; // You can use a more specific date type if needed
}
