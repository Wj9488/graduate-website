import { useEffect, useState } from 'react';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const winHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const totalDocScrollLength = docHeight - winHeight;
      const scrollPosition = Math.floor((scrollTop / totalDocScrollLength) * 100);

      setScrollProgress(scrollPosition);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const radius = 10;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (scrollProgress / 100) * circumference;

  return (
    <div className="fixed bottom-2 left-2 lg:bottom-[0.75rem] lg:left-[0.75rem]">
      <svg className="rotate-90" width="25" height="25">
        <circle
          className="circle-bg"
          cx="12.5"
          cy="12.5"
          r={radius}
          strokeWidth="2.5"
          stroke="transparent"
          fill="none"
        />
        <circle
          className="circle-progress"
          cx="12.5"
          cy="12.5"
          r={radius}
          strokeWidth="2.5"
          stroke="#141414"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ transition: 'stroke-dashoffset 0.35s' }}
        />
      </svg>
    </div>
  );
};

export default ScrollProgress;
