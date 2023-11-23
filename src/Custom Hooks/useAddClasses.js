import { useEffect } from 'react';

const useAddClasses = (id) => {
  useEffect(() => {
    const select = () => {
      const element = document.getElementById(id);
      if (!element) {
        console.error(`Element with id '${id}' not found.`);
        return;
      }

      const text = element.innerText.split('');
      element.innerText = '';

      text.forEach((value, index) => {
        if (value === ' ') {
          element.appendChild(document.createTextNode(' '));
        } else {
          const outer = document.createElement('span');
          outer.className = 'outer';

          const inner = document.createElement('span');
          inner.className = 'inner';
          inner.style.animationDelay = `${rand(-5000, 0)}ms`;

          const letter = document.createElement('span');
          letter.className = 'letter';
          letter.innerText = value;
          letter.style.animationDelay = `${index * 1000}ms`;

          inner.appendChild(letter);
          outer.appendChild(inner);
          element.appendChild(outer);
        }
      });
    };

    const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

    select();
  }, [id]);
};

export default useAddClasses;
