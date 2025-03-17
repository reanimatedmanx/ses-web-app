import { useCallback, useRef } from 'react';

export const useDebouncedSearch = (callback, delay = 500) => {
    const timeoutRef = useRef(null);
  
    return useCallback((value) => {
      // Clear on first invocation.
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      
      // Attach a timer object to be able to clear it later.
      timeoutRef.current = setTimeout(() => {
        callback(value);
      }, delay);
    }, [callback, delay]);
};