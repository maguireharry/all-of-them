import { 
  officialPhotos, GalleryPhoto,
  musicVideos, MusicVideo,
  fanArt, FanArtItem 
} from '../../data/galleryContent';
import { SocialShareButtons } from '../../components/ui/socialShareButtons';

export default function GalleryPage() {
  return (
    <main className="container mx-auto px-4 py-8 min-h-screen bg-gray-50">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-purple-700">
        Gallery
      </h1>

      {/* Official Photos Section */}
      <section id="official-photos" className="mb-16">
        <h2 className="text-3xl font-semibold text-pink-600 mb-8 text-center">
          Official Photos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {officialPhotos.map((photo: GalleryPhoto) => (
            <div key={photo.id} className="bg-white p-4 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img 
                src={photo.src} 
                alt={photo.alt} 
                className="w-full h-64 object-cover rounded-lg mb-3" 
              />
              {photo.caption && <p className="text-sm text-gray-600 italic text-center">{photo.caption}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* Music Videos Section */}
      <section id="music-videos" className="mb-16">
        <h2 className="text-3xl font-semibold text-indigo-600 mb-8 text-center">
          Music Videos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {musicVideos.map((video: MusicVideo) => (
            <div key={video.id} className="bg-white p-4 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="aspect-w-16 aspect-h-9 mb-3">
                <iframe 
                  src={video.embedUrl} 
                  title={video.title} 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen
                  className="w-full h-full rounded-lg"
                ></iframe>
              </div>
              <h3 className="text-lg font-medium text-gray-800 text-center">{video.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Fan Art Showcase Section */}
      <section id="fan-art" className="mb-12">
        <h2 className="text-3xl font-semibold text-teal-600 mb-8 text-center">
          Fan Art Showcase
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {fanArt.map((art: FanArtItem) => (
            <div key={art.id} className="bg-white p-4 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img 
                src={art.src} 
                alt={art.alt} 
                className="w-full h-64 object-cover rounded-lg mb-3" 
              />
              <p className="text-md text-gray-700 text-center">
                Artwork by: <span className="font-semibold">{art.artistName}</span>
              </p>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-600 mt-10 text-lg">
          Fan art submissions coming soon! Check back later to see how to submit your art.
        </p>
      </section>

      {/* Share Section */}
      <section className="py-12 px-6 w-full text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Share This Gallery
        </h2>
        <div className="flex justify-center">
          <SocialShareButtons
            url="https://example.com/gallery"
            title="Explore the Gallery at the Shawn Mendes Fan Hub!"
            className="mt-4"
          />
        </div>
      </section>
    </main>
  );
}
