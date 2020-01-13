import { useEffect, useRef } from 'react';

function usePrevious(value) {
  const ref = useRef(null);

  // renders everytime
  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
}

export default usePrevious;
