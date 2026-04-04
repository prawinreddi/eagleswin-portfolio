"use client";
import { useState } from 'react';

interface DishImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function DishImage({ src, alt, className }: DishImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [error, setError] = useState(false);

  const fallback = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop"; // Healthy bowl fallback

  return (
    <img
      src={error ? fallback : imgSrc}
      alt={alt}
      className={className}
      onError={() => {
        if (!error) {
          setError(true);
        }
      }}
    />
  );
}
