export interface GalleryPhoto {
  id: number;
  src: string;
  alt: string;
  caption?: string;
}

export interface MusicVideo {
  id: number;
  embedUrl: string;
  title: string;
}

export interface FanArtItem {
  id: number;
  src: string;
  alt: string;
  artistName: string;
}

export const officialPhotos: GalleryPhoto[] = [
  { 
    id: 1, 
    src: "/images/gallery/official/shawn-mendes-on-stage.jpg", 
    alt: "Shawn Mendes singing passionately on stage with a guitar", 
    caption: "Shawn performing live during the 'Wonder' tour." 
  },
  { 
    id: 2, 
    src: "/images/gallery/official/shawn-mendes-portrait.jpg", 
    alt: "A portrait of Shawn Mendes looking thoughtful", 
    caption: "Photoshoot for his self-titled album." 
  },
  { 
    id: 3, 
    src: "/images/gallery/official/shawn-mendes-acoustic.jpg", 
    alt: "Shawn Mendes playing an acoustic guitar in a studio setting", 
    caption: "Behind the scenes of a recording session." 
  }
];

export const musicVideos: MusicVideo[] = [
  { 
    id: 1, 
    embedUrl: "https://www.youtube.com/embed/u3T5n-uxL9M", // Stitches
    title: "Shawn Mendes - Stitches (Official Music Video)" 
  },
  { 
    id: 2, 
    embedUrl: "https://www.youtube.com/embed/Lsof1j_rK3Y", // Treat You Better
    title: "Shawn Mendes - Treat You Better (Official Music Video)" 
  },
  { 
    id: 3, 
    embedUrl: "https://www.youtube.com/embed/Pkh8UtuejGw", // In My Blood
    title: "Shawn Mendes - In My Blood (Official Music Video)" 
  }
];

export const fanArt: FanArtItem[] = [
  { 
    id: 1, 
    src: "/images/gallery/fanart/shawn-mendes-pencil-sketch.jpg", 
    alt: "A detailed pencil sketch of Shawn Mendes' face", 
    artistName: "FanArtist_PencilPro" 
  },
  { 
    id: 2, 
    src: "/images/gallery/fanart/shawn-mendes-digital-painting.jpg", 
    alt: "A vibrant digital painting of Shawn Mendes with abstract background", 
    artistName: "DigitalDreamer_22" 
  }
];
