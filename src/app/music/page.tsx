import Link from 'next/link';
import { albums, Album } from '../../data/albums';

export default function MusicPage() {
  return (
    <main className="container mx-auto px-4 py-8 min-h-screen bg-gray-50">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-purple-700">
        Discography
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {albums.map((album: Album) => (
          <div 
            key={album.id} 
            className="bg-white p-5 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center"
          >
            <Link href={`/music/${album.slug}`} className="w-full">
              {/* No <a> tag needed here for Next.js 13+ app router style */}
              <img 
                src={album.coverImagePath} 
                alt={`${album.title} album cover`} 
                className="w-full h-56 object-cover rounded-md mb-4 shadow-md hover:opacity-90 transition-opacity" 
              />
              <h2 className="text-xl font-semibold text-purple-600 hover:text-purple-800 transition-colors duration-300 mb-1">
                {album.title}
              </h2>
            </Link>
            <p className="text-gray-500 text-sm">{album.releaseYear}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
