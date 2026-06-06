'use client';

import { useEffect } from 'react';

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
   useEffect(() => {
      console.error(error);
   }, [error]);

   return (
      <div style={{ textAlign: 'center', padding: '3rem', fontFamily: 'var(--body-font), sans-serif' }}>
         <h2>Something went wrong!</h2>
         <p style={{ margin: '1rem 0', color: 'var(--text)' }}>{error.message}</p>
         <button className="theme-btn" onClick={() => reset()}>Try again</button>
      </div>
   );
}
