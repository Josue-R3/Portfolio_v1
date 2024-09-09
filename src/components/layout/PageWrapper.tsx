// components/layout/PageWrapper.js

import {ReactNode} from 'react';

export default function PageWrapper({children}: {children: ReactNode }) {
  return (
    <>
      <div className="flex min-h-screen flex-col bg-background">
        <div className='mt-20 mx-auto py-4' >
        {children}
        </div>
      </div>
    </>
  );
}
