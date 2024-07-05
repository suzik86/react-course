export interface BookInterface {
  uid: string;
  title: string;
  publishedYear: number;
  publishedMonth: number;
  publishedDay: number;
  numberOfPages: number;
  stardateFrom: number | null;
  stardateTo: number | null;
  yearFrom: number | null;
  yearTo: number | null;
  novel: boolean;
  referenceBook: boolean;
  biographyBook: boolean;
  rolePlayingBook: boolean;
  ebook: boolean;
  anthology: boolean;
  novelization: boolean;
  unauthorizedPublication: boolean;
  audiobook: boolean;
  audiobookAbridged: boolean;
  audiobookPublishedYear: number | null;
  audiobookPublishedMonth: number | null;
  audiobookPublishedDay: number | null;
  audiobookRunTime: number | null;
  productionNumber: string | null;
}
