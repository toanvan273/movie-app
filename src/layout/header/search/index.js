import React, { useState } from 'react';
import styled from 'styled-components';
import SearchWapper from './search-wapper';

const SearchMovie = () => {
  const [show,setShow] = useState(false)

  return (
    <Wapper className='wapper-search h-100 position-relative'>
      <div className='d-flex justify-content-center align-items-center w-100 h-100'>
        <div className='btn-search cs-pointer'onClick={()=>setShow(!show)} >
          <span className='me-2'>Search</span>
          <i className="fa fa-search" aria-hidden="true"></i>
        </div>
      </div>
      {show && <SearchWapper setShow={setShow} />}
      
    </Wapper>
  );
};

export default SearchMovie;
const Wapper = styled.div`
  .btn-search{
    background: #857f7f;
    display: inline-block;
    border-radius: 10px;
    padding: 0 10px;
    width: 90px;
    height: 26px;
  }
`