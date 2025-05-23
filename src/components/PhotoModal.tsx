
interface PhotoModalProps {
  photo: {
    url: string;
    alt: string;
    cat: string;
  };
  onClose: () => void;
}

const PhotoModal = ({ photo, onClose }: PhotoModalProps) => {
  return (
    <div 
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div 
        className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Image */}
        <img 
          src={photo.url} 
          alt={photo.alt}
          className="w-full h-auto max-h-[70vh] object-contain"
        />

        {/* Photo Info */}
        <div className="p-6 bg-gradient-to-r from-pink-50 to-orange-50">
          <h3 className="text-2xl font-bold text-orange-800 mb-2">{photo.cat}</h3>
          <p className="text-orange-600 text-lg">{photo.alt}</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoModal;
