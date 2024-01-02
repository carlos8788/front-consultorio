import React from 'react';

interface MainProps {
  children: React.ReactNode;
}

const Main = ({ children }: MainProps) => {
  console.log(children);
  return <div className='flex items-center space-x-8 py-3 px-4 max-w-screen-xl mx-auto md:px-8'>{children}</div>;
}

export default Main;
