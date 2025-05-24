
import { Link } from "react-router-dom";

interface Photo {
  url: string;
  alt: string;
}

interface Cat {
  name: string;
  description: string;
  photos: Photo[];
  slug: string;
}

interface CatCardProps {
  cat: Cat;
  onPhotoClick: (photo: Photo, catName: string) => void;
  reverse?: boolean;
}

const CatCard = ({ cat, onPhotoClick, reverse = false }: CatCardProps) => {
  return (
    <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 items-center`}>
      {/* Cat Info */}
      <div className="lg:w-1/3 text-center lg:text-left">
        <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
          <h3 className="text-3xl font-bold text-orange-800 mb-4">{cat.name}</h3>
          <p className="text-orange-600 text-lg leading-relaxed mb-6">{cat.description}</p>
          
          {/* Link to individual cat page */}
          <Link 
            to={`/${cat.slug}`}
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition-colors duration-300 mb-4"
          >
            ดูข้อมูลเพิ่มเติม
          </Link>
          
          <div className="flex justify-center lg:justify-start mt-6">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-xl">⭐</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Photo Grid */}
      <div className="lg:w-2/3">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cat.photos.map((photo, index) => (
            <div 
              key={index}
              className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
              onClick={() => onPhotoClick(photo, cat.name)}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300">
                <img 
                  src={photo.url} 
                  alt={photo.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium truncate">{photo.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CatCard;
