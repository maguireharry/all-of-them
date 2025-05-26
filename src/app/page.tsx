export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-50 text-gray-800">
      {/* Navigation Bar */}
      <nav className="w-full py-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg">
        <div className="container mx-auto flex justify-between items-center px-6">
          <a href="#" className="text-2xl font-bold hover:text-gray-200">Shawn Mendes Hub</a>
          <div className="space-x-6">
            <a href="#music" className="hover:text-gray-200">Music</a>
            <a href="#tours" className="hover:text-gray-200">Tours</a>
            <a href="#news" className="hover:text-gray-200">News</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-20 px-6 bg-white w-full shadow-md">
        <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 mb-6">
          Welcome to the Official Shawn Mendes Fan Hub
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          Your one-stop destination for all things Shawn Mendes. Get the latest music, tour dates, news, and more!
        </p>
        <div className="mt-8">
          <div className="w-72 h-72 bg-gradient-to-br from-purple-400 to-pink-400 mx-auto rounded-full flex items-center justify-center shadow-xl overflow-hidden">
            <img 
              src="https://picsum.photos/seed/shawnmendes/300/300" 
              alt="Shawn Mendes placeholder image" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Music Section */}
      <section id="music" className="py-16 px-6 w-full bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-12 text-purple-700">Discover His Music</h2>
        <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Music Item 1 */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-3 text-purple-600">Album: Wonder</h3>
            <p className="text-gray-600 mb-2">Released: December 4, 2020</p>
            <p className="text-gray-700">Dive into the introspective and dreamy soundscapes of Shawn&apos;s fourth studio album.</p>
          </div>
          {/* Music Item 2 */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-3 text-purple-600">Album: Shawn Mendes</h3>
            <p className="text-gray-600 mb-2">Released: May 25, 2018</p>
            <p className="text-gray-700">Features hits like &quot;In My Blood&quot; and &quot;Lost in Japan.&quot;</p>
          </div>
          {/* Music Item 3 */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-3 text-purple-600">Album: Illuminate</h3>
            <p className="text-gray-600 mb-2">Released: September 23, 2016</p>
            <p className="text-gray-700">Includes &quot;Treat You Better&quot; and &quot;Mercy.&quot; Showcased a more mature sound.</p>
          </div>
          {/* Music Item 4 */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-3 text-purple-600">EP: The Shawn Mendes EP</h3>
            <p className="text-gray-600 mb-2">Released: July 28, 2014</p>
            <p className="text-gray-700">Shawn&apos;s debut EP that introduced his talent to the world.</p>
          </div>
          {/* Music Item 5 */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-3 text-purple-600">Popular Single: Stitches</h3>
            <p className="text-gray-600 mb-2">Released: March 16, 2015 (from Handwritten)</p>
            <p className="text-gray-700">One of the breakout hits that catapulted Shawn to international fame.</p>
          </div>
          {/* Music Item 6 */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-3 text-purple-600">Upcoming Music</h3>
            <p className="text-gray-600 mb-2">Stay Tuned!</p>
            <p className="text-gray-700">Keep an eye out for new releases and exciting musical projects from Shawn.</p>
          </div>
        </div>
      </section>

      {/* Tours Section */}
      <section id="tours" className="py-16 px-6 w-full bg-white">
        <h2 className="text-4xl font-bold text-center mb-12 text-indigo-700">Catch Him Live</h2>
        <div className="container mx-auto text-center px-4">
          <p className="text-lg text-gray-600 mb-10 max-w-xl mx-auto">
            Experience the magic of Shawn Mendes live. Check back for the latest tour announcements and ticket information.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {/* Tour Item 1 */}
            <div className="bg-gray-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-3 text-indigo-600">Wonder: The World Tour</h3>
              <p className="text-gray-700 mb-1"><span className="font-semibold">Status:</span> Concluded</p>
              <p className="text-gray-700 mb-1"><span className="font-semibold">Year:</span> 2022-2023</p>
              <p className="text-gray-700">Shawn toured across North America and Europe, bringing the &quot;Wonder&quot; album to life.</p>
            </div>
            {/* Tour Item 2 */}
            <div className="bg-gray-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-3 text-indigo-600">Shawn Mendes: The Tour</h3>
              <p className="text-gray-700 mb-1"><span className="font-semibold">Status:</span> Concluded</p>
              <p className="text-gray-700 mb-1"><span className="font-semibold">Year:</span> 2019</p>
              <p className="text-gray-700">A massive global tour covering hits from his self-titled album and previous works.</p>
            </div>
            {/* Tour Item 3 */}
            <div className="bg-gray-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 md:col-span-2 lg:col-span-1">
              <h3 className="text-2xl font-semibold mb-3 text-indigo-600">Future Tour: TBA</h3>
              <p className="text-gray-700 mb-1"><span className="font-semibold">Status:</span> To Be Announced</p>
              <p className="text-gray-700 mb-1"><span className="font-semibold">Year:</span> Coming Soon!</p>
              <p className="text-gray-700">Stay tuned for announcements about Shawn&apos;s next live experience!</p>
              <button className="mt-4 bg-indigo-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-indigo-700 transition-colors duration-300">
                Get Notified
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-16 px-6 w-full bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-12 text-pink-600">Latest News</h2>
        <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* News Item 1 */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-3 text-pink-500">New Single &quot;Heartbeat&quot; Teased!</h3>
            <p className="text-gray-600 mb-2"><span className="font-semibold">Posted:</span> July 28, 2024</p>
            <p className="text-gray-700">Shawn recently hinted at an upcoming single titled &quot;Heartbeat&quot; on his social media. Fans are buzzing with excitement!</p>
          </div>
          {/* News Item 2 */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-3 text-pink-500">Charity Livestream Announced</h3>
            <p className="text-gray-600 mb-2"><span className="font-semibold">Posted:</span> July 22, 2024</p>
            <p className="text-gray-700">Shawn will host a special charity livestream event next month to support youth mental health initiatives.</p>
          </div>
          {/* News Item 3 */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-3 text-pink-500">Behind the Scenes of &quot;Wonder&quot; Documentary</h3>
            <p className="text-gray-600 mb-2"><span className="font-semibold">Posted:</span> July 15, 2024</p>
            <p className="text-gray-700">A new documentary offering a glimpse into the making of the &quot;Wonder&quot; album is now streaming on Netflix.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-10 bg-gradient-to-r from-gray-800 to-gray-900 text-white text-center">
        <p className="text-lg mb-4">Connect with Shawn Mendes:</p>
        <div className="flex justify-center space-x-6 mb-6">
          <a href="#" className="text-xl hover:text-purple-400 transition-colors duration-300">Facebook</a>
          <a href="#" className="text-xl hover:text-pink-400 transition-colors duration-300">Twitter</a>
          <a href="#" className="text-xl hover:text-indigo-400 transition-colors duration-300">Instagram</a>
          <a href="#" className="text-xl hover:text-red-400 transition-colors duration-300">YouTube</a>
        </div>
        <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Shawn Mendes Fan Hub. All Rights Reserved.</p>
        <p className="text-xs text-gray-500 mt-2">Designed with Tailwind CSS</p>
      </footer>
    </main>
  );
}
