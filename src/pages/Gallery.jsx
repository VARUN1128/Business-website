import React, { useState, useEffect } from "react";

export default function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Vite import.meta.glob to import all image files in src/gallery folder eagerly
    const importedImages = import.meta.glob("../gallery/*.{png,jpg,jpeg,gif}", { eager: true });

    // Map the imported modules to an array of objects with src and optional captions
    const imgs = Object.values(importedImages).map((mod, index) => ({
      src: mod.default,
      caption: `Image ${index + 1}`, // You can customize or get real captions if you want
    }));

    setImages(imgs);
  }, []);

  const [active, setActive] = useState(0);

  const goPrev = () => setActive(active === 0 ? images.length - 1 : active - 1);
  const goNext = () => setActive(active === images.length - 1 ? 0 : active + 1);

  // If images are not loaded yet, show loading
  if (images.length === 0) return <div style={{ padding: 40, textAlign: "center" }}>Loading gallery...</div>;

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: 36 }}>
      {/* Headline */}
      <h1
        style={{
          textAlign: "center",
          fontSize: 36,
          fontWeight: 700,
          color: "#2563EB",
          marginBottom: 8
        }}
      >
        Achievement and Gallery
      </h1>
      {/* Paragraph */}
      <p
        style={{
          textAlign: "center",
          maxWidth: 600,
          margin: "0 auto 28px auto",
          color: "#444",
          fontSize: 18
        }}
      >
        Explore some memorable moments from our events and activities.
      </p>

      {/* Main slider */}
      <div
        style={{
          position: "relative",
          textAlign: "center",
          marginBottom: 18,
          boxShadow: "0 4px 24px rgba(0,0,0,0.09)",
          borderRadius: 10,
          background: "#fff"
        }}
      >
        {/* Left button */}
        <button
          onClick={goPrev}
          aria-label="Previous"
          style={{
            position: "absolute",
            top: "50%",
            left: 10,
            transform: "translateY(-50%)",
            zIndex: 2,
            background: "#fff",
            border: "none",
            boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
            borderRadius: "50%",
            width: 36,
            height: 36,
            fontSize: 22,
            cursor: "pointer"
          }}
        >
          &#8592;
        </button>

        <img
          src={images[active].src}
          alt={images[active].caption}
          style={{
            width: "100%",
            maxHeight: 420,
            objectFit: "cover",
            borderRadius: 10
          }}
        />

        {/* Right button */}
        <button
          onClick={goNext}
          aria-label="Next"
          style={{
            position: "absolute",
            top: "50%",
            right: 10,
            transform: "translateY(-50%)",
            zIndex: 2,
            background: "#fff",
            border: "none",
            boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
            borderRadius: "50%",
            width: 36,
            height: 36,
            fontSize: 22,
            cursor: "pointer"
          }}
        >
          &#8594;
        </button>
      </div>

      {/* Caption */}
      <div
        style={{
          textAlign: "center",
          marginBottom: 16,
          fontWeight: 500,
          color: "#2563EB",
          fontSize: 17
        }}
      >
        {images[active].caption}
      </div>

      {/* Thumbnails below */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 10,
          marginTop: 15,
          overflowX: "auto",
          paddingBottom: 10
        }}
      >
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img.src}
            alt={img.caption}
            onClick={() => setActive(idx)}
            style={{
              width: 76,
              height: 52,
              objectFit: "cover",
              borderRadius: 6,
              outline: idx === active ? "3px solid #ffa900" : "1.5px solid #ddd",
              filter: idx === active ? "brightness(1.08)" : "brightness(0.85)",
              boxShadow: idx === active ? "0 0 0 2px #ffda90" : "",
              cursor: "pointer",
              transition: "border 0.18s, filter 0.18s"
            }}
          />
        ))}
      </div>
    </div>
  );
}
