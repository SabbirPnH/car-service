'use client'
import React from 'react';
import { Blocks } from 'react-loader-spinner'
const Loading = () => {
    return (
        <div className='flex justify-center items-center py-24'>
            
            <Blocks
  height="80"
  width="80"
  color="#D81324"
  ariaLabel="blocks-loading"
  wrapperStyle={{}}
  wrapperClass="blocks-wrapper"
  visible={true}
  />
        </div>
    );
}

export default Loading;