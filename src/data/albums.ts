export interface Album {
  id: number;
  title: string;
  slug: string;
  releaseYear: number;
  coverImagePath: string;
  tracklist?: string[];
}

export const albums: Album[] = [
  {
    id: 1,
    title: "Wonder",
    slug: "wonder",
    releaseYear: 2020,
    coverImagePath: "/images/albums/wonder.jpg",
    tracklist: ["Intro", "Wonder", "Higher", "24 Hours", "Teach Me How to Love", "Call My Friends"]
  },
  {
    id: 2,
    title: "Shawn Mendes",
    slug: "shawn-mendes",
    releaseYear: 2018,
    coverImagePath: "/images/albums/shawn-mendes.jpg",
    tracklist: ["In My Blood", "Nervous", "Lost in Japan", "Where Were You in the Morning?", "Youth"]
  },
  {
    id: 3,
    title: "Illuminate",
    slug: "illuminate",
    releaseYear: 2016,
    coverImagePath: "/images/albums/illuminate.jpg",
    tracklist: ["Ruin", "Mercy", "Treat You Better", "Three Empty Words", "Don't Be a Fool"]
  },
  {
    id: 4,
    title: "Handwritten",
    slug: "handwritten",
    releaseYear: 2015,
    coverImagePath: "/images/albums/handwritten.jpg",
    tracklist: ["Life of the Party", "Stitches", "Never Be Alone", "Kid in Love", "I Know What You Did Last Summer"]
  },
  {
    id: 5,
    title: "The Shawn Mendes EP",
    slug: "the-shawn-mendes-ep",
    releaseYear: 2014,
    coverImagePath: "/images/albums/the-shawn-mendes-ep.jpg",
    tracklist: ["Life of the Party", "Show You", "One of Those Nights", "The Weight"]
  }
];
