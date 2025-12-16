import React, { useState, useEffect } from 'react';
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
        styles={{
          // CSS variables documented by yet-another-react-lightbox
          root: {
            '--yarl__color_button': isDark ? 'hsla(0, 0%, 100%, 0.8)' : 'rgba(0, 0, 0, 0.8)',
            '--yarl__color_button_active': isDark ? '#ffffff' : '#000000',
            '--yarl__color_button_disabled': isDark ? 'hsla(0, 0%, 100%, 0.4)' : 'rgba(0, 0, 0, 0.4)',
            '--yarl__button_filter': isDark ? 'drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.8))' : 'none'
          },
          container: {
            // Match overlay to current theme
            backgroundColor: isDark ? 'rgba(0, 0, 0, 0.9)' : 'rgba(255, 255, 255, 0.95)'
          }
        }}
        zoom={{
          maxZoomPixelRatio: 3,
          scrollToZoom: true,
        }}
      />
    </>
  );
}
