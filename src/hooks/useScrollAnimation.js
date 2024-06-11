import { useEffect, useRef } from 'react';

const useScrollAnimation = () => {
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const divPosition = ref.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (divPosition < windowHeight) {
          ref.current.classList.add('show');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return ref;
};

export default useScrollAnimation;
