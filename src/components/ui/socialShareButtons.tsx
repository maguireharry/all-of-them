import React from 'react';

interface SocialShareButtonsProps {
  url: string;
  title?: string;
  className?: string;
}

export const SocialShareButtons: React.FC<SocialShareButtonsProps> = ({ url, title, className = '' }) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = title ? encodeURIComponent(title) : '';

  return (
    <div className={`flex space-x-2 ${className}`}>
      <a
        href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-sky-500 hover:bg-sky-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 text-sm inline-flex items-center"
        aria-label="Share this page on Twitter"
      >
        {/* Simple text label, could be replaced with an SVG icon */}
        Twitter
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 text-sm inline-flex items-center"
        aria-label="Share this page on Facebook"
      >
        {/* Simple text label, could be replaced with an SVG icon */}
        Facebook
      </a>
      {/* 
        Future buttons could be added here:
      <a
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 text-sm"
        aria-label="Share this page on LinkedIn"
      >
        LinkedIn
      </a>
      <a
        href={`http://www.reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 text-sm"
        aria-label="Share this page on Reddit"
      >
        Reddit
      </a>
      */}
    </div>
  );
};

// For default export if preferred by project structure, though named export is fine.
// export default SocialShareButtons;
