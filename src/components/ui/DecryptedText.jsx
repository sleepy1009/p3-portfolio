import { useEffect, useState } from 'react';

const CYBER_CHARS = '!<>♬-_\\/[]{}☮—=+*^?✰#_';

export default function DecryptedText({
  text,
  speed = 30,
  revealDelay = 3,
  startDelay = 0,
  className = '',
}) {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let interval;

    const start = setTimeout(() => {
      let iteration = 0;

      interval = setInterval(() => {
        setDisplayText(
          text
            .split('')
            .map((char, index) => {
              if (char === ' ') return ' ';

              if (index < Math.floor(iteration)) {
                return text[index];
              }

              return CYBER_CHARS[
                Math.floor(Math.random() * CYBER_CHARS.length)
              ];
            })
            .join('')
        );

        if (iteration >= text.length) {
          clearInterval(interval);
        }

        iteration += 1 / revealDelay;
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(start);
      clearInterval(interval);
    };
  }, [text, speed, revealDelay, startDelay]);

  return <span className={className}>{displayText}</span>;
}