import { albums, Album } from '../../../data/albums';
import { SocialShareButtons } from '../../../components/ui/socialShareButtons';

export async function generateStaticParams() {
  return albums.map((album) => ({
    albumName: album.slug,
  }));
}

export default function AlbumDetailPage({ params }: { params: { albumName: string } }) {
  const album = albums.find(a => a.slug === params.albumName);

  if (!album) {
    return (
      <main className="container mx-auto px-4 py-10 min-h-screen flex justify-center items-center">
        <div className="text-center text-2xl text-gray-500">
          Album not found.
        </div>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-8 min-h-screen">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="md:w-1/3 lg:w-1/4">
          <img 
            src={album.coverImagePath} 
            alt={`${album.title} album cover`} 
            className="w-full rounded-lg shadow-xl aspect-square object-cover" 
          />
        </div>
        <div className="md:w-2/3 lg:w-3/4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-purple-700 mb-3">
            {album.title}
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Released: {album.releaseYear}
          </p>
          
          <div className="mt-6">
            <h2 className="text-3xl font-semibold text-purple-600 mb-4">
              Tracklist
            </h2>
            {album.tracklist && album.tracklist.length > 0 ? (
              <ul className="list-decimal list-inside space-y-2 text-gray-700 bg-white p-6 rounded-lg shadow">
                {album.tracklist.map((track, index) => (
                  <li key={index} className="text-lg hover:text-purple-500 transition-colors">
                    {track}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500 text-lg p-6 bg-white rounded-lg shadow">
                Tracklist coming soon.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Share Section */}
      {album && (
        <section className="mt-12 py-8 px-4 text-center bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Share this Album
          </h2>
          <div className="flex justify-center">
            <SocialShareButtons
              url={`https://example.com/music/${album.slug}`}
              title={`Check out the album: ${album.title}!`}
              className="mt-2"
            />
          </div>
        </section>
      )}
    </main>
  );
}
