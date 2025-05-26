export interface PastTour {
  id: number;
  name: string;
  year: string;
  description: string;
}

export const pastTours: PastTour[] = [
  {
    id: 1,
    name: "Wonder: The World Tour",
    year: "2022-2023",
    description: "Shawn toured across North America and Europe, bringing the &quot;Wonder&quot; album to life before its cancellation."
  },
  {
    id: 2,
    name: "Shawn Mendes: The Tour",
    year: "2019",
    description: "A massive global tour covering hits from his self-titled album and previous works, spanning over 100 shows."
  },
  {
    id: 3,
    name: "Illuminate World Tour",
    year: "2017",
    description: "Supporting his second studio album, Illuminate, this tour showcased a more mature sound and included arena shows worldwide."
  },
  {
    id: 4,
    name: "ShawnFirst Headlines",
    year: "2014-2015",
    description: "Shawn&apos;s first headlining tour, primarily visiting smaller venues across North America and Europe after his initial success on Vine and his debut EP."
  }
];
