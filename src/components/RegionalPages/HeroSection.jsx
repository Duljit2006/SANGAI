import { useState, useEffect, useRef } from 'react';
import './RegionalPages.css';
import MuteIcon from '../../assets/music icon/Mute.png';
import UnmuteIcon from '../../assets/music icon/Unmute.png';

export default function HeroSection({
    title,
    tagline,
    subtitle,
    heroImage, // Backward compatibility or single image
    heroImages, // Array of image objects or strings
    audioTrack, // Optional background audio URL
    badge,
    size = 'large' // 'large' | 'medium' | 'small'
}) {
    // Normalize images to an array of simple objects { url, caption }
    const [images, setImages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const toggleAudio = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            // Promise handling for browsers that block autoplay
            audioRef.current.play().then(() => {
                setIsPlaying(true);
            }).catch(err => {
                console.warn("Audio play blocked:", err);
            });
        }
    };

    // Reset audio state when track changes
    useEffect(() => {
        setIsPlaying(false);
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }
    }, [audioTrack]);

    useEffect(() => {
        // Prepare list of images
        let imgList = [];
        if (heroImages && heroImages.length > 0) {
            imgList = heroImages.map(img =>
                typeof img === 'string' ? { url: img } : img
            );
        } else if (heroImage) {
            imgList = [heroImage];
        }

        setImages(imgList);
    }, [heroImage, heroImages]);

    // Slideshow interval
    useEffect(() => {
        if (images.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % images.length);
        }, 3000); // 3 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section className={`hero-section hero-${size}`}>
            {/* Background Slides */}
            {images.map((img, index) => (
                <div
                    key={index}
                    className={`hero-slide ${index === currentIndex ? 'active' : ''}`}
                    style={{ backgroundImage: `url(${img.url})` }}
                />
            ))}

            {/* If no images, fallback background color handled by CSS */}

            <div className="hero-overlay"></div>
            <div className="hero-content">
                {badge && (
                    <div className="hero-badge">
                        <span className="material-symbols-outlined">{badge.icon || 'public'}</span>
                        <span>{badge.text || tagline}</span>
                    </div>
                )}

                <h1 className="hero-title">{title}</h1>

                {subtitle && (
                    <p className="hero-subtitle">{subtitle}</p>
                )}

                {/* Caption logic: show caption of current image if available */}
                {images[currentIndex]?.caption && (
                    <span className="hero-caption fade-in-caption">
                        {images[currentIndex].caption}
                    </span>
                )}
            </div>

            {/* Vertical Progress Bar */}
            {images.length > 1 && (
                <div className="hero-progress-container">
                    {images.map((_, index) => (
                        <div key={index} className="progress-bar-track">
                            <div
                                className={`progress-bar-fill ${index === currentIndex ? 'active' : ''}`}
                                // Force restart animation on active change
                                key={index === currentIndex ? `fill-${index}` : undefined}
                            ></div>
                        </div>
                    ))}
                </div>
            )}

            {/* Audio Control */}
            {audioTrack && (
                <div className="hero-audio-control">
                    <button
                        className="audio-btn image-btn"
                        onClick={toggleAudio}
                        aria-label={isPlaying ? "Mute background music" : "Play background music"}
                    >
                        <img
                            src={isPlaying ? UnmuteIcon : MuteIcon}
                            alt={isPlaying ? "Sound On" : "Sound Off"}
                        />
                    </button>
                    {/* Hidden Audio Element */}
                    <audio
                        ref={audioRef}
                        src={audioTrack}
                        loop
                        preload="auto"
                    />
                </div>
            )}
        </section>
    );
}
