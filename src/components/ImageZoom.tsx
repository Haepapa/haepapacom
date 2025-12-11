import { useState, useEffect } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';

interface ImageZoomProps {
  lightSrc: string;
  darkSrc: string;
  alt: string;
  className?: string;
}

export default function ImageZoom({ lightSrc, darkSrc, alt, className = '' }: ImageZoomProps) {
  const [open, setOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  const currentSrc = isDark ? darkSrc : lightSrc;

  return (
    <>
      <img
        src={currentSrc}
        alt={alt}
        className={`cursor-pointer ${className}`}
        onClick={() => setOpen(true)}
        loading="lazy"
      />
      
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[{ src: currentSrc }]}
        plugins={[Zoom]}
        zoom={{
          maxZoomPixelRatio: 3,
          scrollToZoom: true,
        }}
      />
    </>
  );
}
