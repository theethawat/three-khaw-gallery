
import { useState } from "react";
import { Link } from "react-router-dom";
import PhotoModal from "../components/PhotoModal";
import { ArrowLeft } from "lucide-react";

const KhawniewpingPage = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<{
    url: string;
    alt: string;
    cat: string;
  } | null>(null);

  const photos = [
    {
      url: "https://tdckhawtang.blob.core.windows.net/cat/khawniewping/1662948053347.jpg",
      alt: "Khawniewping portrait",
    },
    {
      url: "https://tdckhawtang.blob.core.windows.net/cat/khawniewping/1681967397194.jpg",
      alt: "Khawniewping grooming",
    },
    {
      url: "https://tdckhawtang.blob.core.windows.net/cat/khawniewping/1681967398129.jpg",
      alt: "Khawniewping stretching",
    },
  ];

  const traits = [
    "แมวอ้วนนิ่งๆ ที่มีความสงบและแสนดี",
    "ชอบนอนอยู่บนตักและให้ความอบอุ่น",
    "มีนิสัยเงียบเสียงแต่ทำให้รู้สึกปลอดภัย",
    "ชอบการนวดและการลูบหัว",
    "เป็นแมวที่ให้ความรักแบบเงียบๆ แต่ลึกซึ้ง"
  ];

  const openModal = (photo: { url: string; alt: string }) => {
    setSelectedPhoto({ ...photo, cat: "ข้าวเหนียวปิ้ง - Khawniewping" });
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-orange-50 to-yellow-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-100 to-orange-100 py-8">
        <div className="container mx-auto px-4">
          <Link 
            to="/" 
            className="inline-flex items-center text-orange-700 hover:text-orange-800 mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            กลับหน้าหลัก
          </Link>
          
          <div className="text-center">
            <h1 className="text-4xl font-bold text-orange-800 mb-4">
              🐱 ข้าวเหนียวปิ้ง - Khawniewping 🐱
            </h1>
            <p className="text-lg text-orange-700 max-w-2xl mx-auto">
              แมวอ้วนนิ่งๆ ที่ชอบนอนอยู่บนตัก และมอบความอบอุ่นให้กับทุกคน
            </p>
          </div>
        </div>
      </div>

      {/* Cat Info */}
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-3xl p-8 shadow-lg mb-12 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-orange-800 mb-6">เกี่ยวกับข้าวเหนียวปิ้ง</h2>
          <ul className="space-y-3">
            {traits.map((trait, index) => (
              <li key={index} className="flex items-start">
                <span className="text-orange-500 mr-3 text-xl">•</span>
                <span className="text-orange-700 text-lg">{trait}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Photo Gallery */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-orange-800 mb-8 text-center">
            แกลเลอรี่ข้าวเหนียวปิ้ง
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo, index) => (
              <div 
                key={index}
                className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
                onClick={() => openModal(photo)}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300">
                  <img 
                    src={photo.url} 
                    alt={photo.alt}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
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

      {/* Photo Modal */}
      {selectedPhoto && (
        <PhotoModal photo={selectedPhoto} onClose={closeModal} />
      )}
    </div>
  );
};

export default KhawniewpingPage;
