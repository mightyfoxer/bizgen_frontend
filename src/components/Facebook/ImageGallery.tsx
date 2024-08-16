import Image from "next/image";
import { FC, useEffect, useState } from "react";

interface Gallery {
  images: string[];
}

const ImageGallery: FC<Gallery> = ({ images }) => {
  const [width, setWidth] = useState(500);

  useEffect(() => {
    const calculateGalleryWidth = () => {
      const galleryElement = document.getElementById("gallay");

      if (galleryElement) {
        const children = galleryElement.children;
        let totalWidth = 0;

        for (let i = 0; i < children.length; i++) {
          const child = children[i];
          totalWidth += child.clientWidth;
        }

        setWidth(totalWidth);
      }
    };

    window.addEventListener("resize", calculateGalleryWidth);
    calculateGalleryWidth();
    return () => window.removeEventListener("resize", calculateGalleryWidth);
  }, []);

  return (
    <div className="inline-flex items-start gap-6" id="gallay">
      <div
        className="aspect-square relative"
        style={{
          width: (width / 3) * 2,
        }}
      >
        <Image src={images[0]} className="object-cover" alt="" fill />
      </div>
      <div
        className="w-1/3 flex flex-col gap-6
      "
      >
        <div
          className="aspect-video relative"
          style={{
            height: width / 3 - 15,
          }}
        >
          <Image src={images[2]} className="object-cover" alt="" fill />
        </div>
        <div
          className="aspect-video relative"
          style={{
            height: width / 3 - 15,
          }}
        >
          <Image src={images[3]} className="object-cover" alt="" fill />
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
