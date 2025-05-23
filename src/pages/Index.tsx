
import { useState } from 'react';
import CatCard from '../components/CatCard';
import PhotoModal from '../components/PhotoModal';

const Index = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<{ url: string; alt: string; cat: string } | null>(null);

  // Sample cat data - you can replace these with your actual cat photos
  const cats = [
    {
      name: "Khawtang",
      description: "The adventurous explorer who loves sunny windowsills",
      photos: [
        { url: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=500", alt: "Khawtang lounging" },
        { url: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=500", alt: "Khawtang playing" },
        { url: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=500", alt: "Khawtang sleeping" },
      ]
    },
    {
      name: "Khawniewping",
      description: "The gentle soul with the softest purr",
      photos: [
        { url: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=500", alt: "Khawniewping portrait" },
        { url: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=500", alt: "Khawniewping grooming" },
        { url: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=500", alt: "Khawniewping stretching" },
      ]
    },
    {
      name: "Khawlahm",
      description: "The playful troublemaker with endless energy",
      photos: [
        { url: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=500", alt: "Khawlahm jumping" },
        { url: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=500", alt: "Khawlahm hiding" },
        { url: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=500", alt: "Khawlahm yawning" },
      ]
    }
  ];

  const openModal = (photo: { url: string; alt: string }, catName: string) => {
    setSelectedPhoto({ ...photo, cat: catName });
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-orange-50 to-yellow-50">
      {/* Hero Section */}
      <div className="hero min-h-[60vh] bg-gradient-to-r from-pink-100 to-orange-100">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold text-orange-800 mb-4 animate-float">
              🐱 My Three Purrfect Cats 🐱
            </h1>
            <p className="text-lg text-orange-700 mb-6">
              Meet Khawtang, Khawniewping, and Khawlahm - the adorable trio that fills my home with love, laughter, and endless cuddles!
            </p>
            <div className="flex justify-center space-x-2">
              <div className="w-3 h-3 bg-pink-300 rounded-full animate-bounce"></div>
              <div className="w-3 h-3 bg-orange-300 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-3 h-3 bg-yellow-300 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Cat Gallery */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-orange-800 mb-4">Our Furry Family</h2>
          <p className="text-orange-600 max-w-2xl mx-auto">
            Each of my cats has their own unique personality and charm. Click on any photo to see them in all their glory!
          </p>
        </div>

        <div className="grid gap-8 md:gap-12">
          {cats.map((cat, index) => (
            <CatCard 
              key={cat.name} 
              cat={cat} 
              onPhotoClick={openModal}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-orange-100 py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-orange-700 mb-2">Made with 💕 for my beloved cats</p>
          <p className="text-orange-600 text-sm">Every photo tells a story of love, mischief, and purrs</p>
        </div>
      </footer>

      {/* Photo Modal */}
      {selectedPhoto && (
        <PhotoModal 
          photo={selectedPhoto} 
          onClose={closeModal} 
        />
      )}
    </div>
  );
};

export default Index;
