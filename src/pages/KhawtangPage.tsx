
import { useState } from "react";
import { Link } from "react-router-dom";
import PhotoModal from "../components/PhotoModal";
import { ArrowLeft } from "lucide-react";

const KhawtangPage = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<{
    url: string;
    alt: string;
    cat: string;
  } | null>(null);

  const photos = [
    {
      url: "https://tdckhawtang.blob.core.windows.net/cat/khawtang/1662948053677.jpg",
      alt: "Khawtang lounging",
    },
    {
      url: "https://tdckhawtang.blob.core.windows.net/cat/khawtang/1673866472889.jpg",
      alt: "Khawtang playing",
    },
    {
      url: "https://tdckhawtang.blob.core.windows.net/cat/khawtang/1673866473290.jpg",
      alt: "Khawtang sleeping",
    },
  ];

  const traits = [
    "แมวตัวดีสีขาว ที่มีใจดีกับทุกคน",
    "ขี้กวนแต่น่ารัก ชอบมาขออ้อนเวลาเจ้าของทำงาน",
    "นาฬิกาปลุกเดินได้ ตื่นเช้าเร็วมาก",
    "ชอบนั่งดูนกและแสงแดดที่หน้าต่าง",
    "เป็นแมวที่ร่าเริงและมีพลังงานสูง"
  ];

  const openModal = (photo: { url: string; alt: string }) => {
    setSelectedPhoto({ ...photo, cat: "ข้าวตัง - Khawtang" });
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
              🐱 ข้าวตัง - Khawtang 🐱
            </h1>
            <p className="text-lg text-orange-700 max-w-2xl mx-auto">
              แมวตัวดีสีขาว ขี้กวน นาฬิกาปลุกเดินได้ที่เต็มไปด้วยพลังงานและความร่าเริง
            </p>
          </div>
        </div>
      </div>

      {/* Cat Info */}
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-3xl p-8 shadow-lg mb-12 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-orange-800 mb-6">เกี่ยวกับข้าวตัง</h2>
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
            แกลเลอรี่ข้าวตัง
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

export default KhawtangPage;
