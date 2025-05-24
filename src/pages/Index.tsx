
import { useState } from "react";
import CatCard from "../components/CatCard";
import PhotoModal from "../components/PhotoModal";

const Index = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<{
    url: string;
    alt: string;
    cat: string;
  } | null>(null);

  // Sample cat data - you can replace these with your actual cat photos
  const cats = [
    {
      name: "ข้าวตัง - Khawtang",
      description: "แมวตัวดีสีขาว ขี้กวน นาฬิกาปลุกเดินได้",
      slug: "khawtang",
      photos: [
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
      ],
    },
    {
      name: "ข้าวเหนียวปิ้ง - Khawniewping",
      description: "แมวอ้วนนิ่งๆ ที่ชอบนอนอยู่บนตัก",
      slug: "khawniewping",
      photos: [
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
      ],
    },
    {
      name: "ข้าวหลาม - Khawlahm",
      description: "แมววัวตัวใหญ่ ที่ชอบเลียเป็นชีวิตจิตใจ",
      slug: "khawlahm",
      photos: [
        {
          url: "https://tdckhawtang.blob.core.windows.net/cat/khawlahm/1673924996822.jpg",
          alt: "Khawlahm jumping",
        },
        {
          url: "https://tdckhawtang.blob.core.windows.net/cat/khawlahm/1673924998108.jpg",
          alt: "Khawlahm hiding",
        },
        {
          url: "https://tdckhawtang.blob.core.windows.net/cat/khawlahm/1681959009120.jpg",
          alt: "Khawlahm yawning",
        },
      ],
    },
  ];

  const openModal = (photo: { url: string; alt: string }, catName: string) => {
    setSelectedPhoto({ ...photo, cat: catName });
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-pink-50 via-orange-50 to-yellow-50'>
      {/* Hero Section */}
      <div className='hero min-h-[60vh] bg-gradient-to-r from-pink-100 to-orange-100'>
        <div className='hero-content text-center'>
          <div className='max-w-md'>
            <h1 className='text-5xl font-bold text-orange-800 mb-4 animate-float'>
              🐱 แมว 3 ข้าวแห่งบ้านปลายฝัน 🐱
            </h1>
            <p className='text-lg text-orange-700 mb-6'>
              Meet Khawtang, Khawniewping, and Khawlahm - the adorable trio that
              fills my home with love, laughter, and endless cuddles!
            </p>
            <div className='flex justify-center space-x-2'>
              <div className='w-3 h-3 bg-pink-300 rounded-full animate-bounce'></div>
              <div
                className='w-3 h-3 bg-orange-300 rounded-full animate-bounce'
                style={{ animationDelay: "0.1s" }}
              ></div>
              <div
                className='w-3 h-3 bg-yellow-300 rounded-full animate-bounce'
                style={{ animationDelay: "0.2s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Cat Gallery */}
      <div className='container mx-auto px-4 py-12'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl font-bold text-orange-800 mb-4'>
            3 หนุ่ม 3 มุม 1 ครอบครัว
          </h2>
          <p className='text-orange-600 max-w-2xl mx-auto'>
            เสียงหัวเราะและความอบอุ่นที่เราจะได้พบเจอในทุกๆ วัน
          </p>
        </div>

        <div className='grid gap-8 md:gap-12'>
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
      <footer className='bg-orange-100 py-8 mt-12'>
        <div className='container mx-auto px-4 text-center'>
          <p className='text-orange-700 mb-2'>
            Made with 💕 for my beloved cats
          </p>
          <p className='text-orange-600 text-sm'>
            This site structure is fully generated by{" "}
            <a href='https://lovable.dev/' className='font-semibold'>
              Lovable
            </a>{" "}
            AI Coding Agent
          </p>{" "}
          <p className='text-orange-600 text-sm'>
            As the example of usign AI to code. I just changed the content. Also
            deploy on Lovable
          </p>
        </div>
      </footer>

      {/* Photo Modal */}
      {selectedPhoto && (
        <PhotoModal photo={selectedPhoto} onClose={closeModal} />
      )}
    </div>
  );
};

export default Index;
