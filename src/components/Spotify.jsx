import React from 'react';

import '../styles/animation.css'
import useScrollAnimation from '../hooks/useScrollAnimation';

const Spotify = () => {
    const ref = useScrollAnimation();
    return (
      <div className='w-full h-[350px] relative scroll_animation' ref={ref}>
      <h2 className="text-3xl font-semibold p-2">Nossas músicas 🎵</h2>
      <iframe
        title='Spotify'
        style={{ borderRadius: '12px' }}
        src="https://open.spotify.com/embed/playlist/6vSYLDjb6YGiF1bWYlOMXF?utm_source=generator&theme=0"
        width="100%"
        height="352"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
    )
};

export default Spotify;