// components/layout/PageWrapper.js

import {ReactNode} from 'react';

export default function PageWrapper({children}: {children: ReactNode }) {
  return (
    <>
      <div className="flex min-h-screen flex-col bg-background">
        <div className='container mt-20 mx-auto py-4 px-12' >
        {children}
        </div>
      </div>
    </>
  );
}
