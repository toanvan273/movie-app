import React from 'react';
import styled from 'styled-components';
import Loading from '../loading';
import SelectPage from './select-page';
const Header = () => {
  
  return (
    <Wapper>
      <div className='container h-100'>
        <div className='row h-100'>
          <div className='col-8 col-sm-4 col-md-4 h-100'>
            <div className='d-flex justify-content-center align-items-center w-100 h-100'>
              <SelectPage />
            </div>
          </div>
          <div className='col-8 col-sm-4 col-md-4 h-100'>
           {/* <Loading /> */}
          </div>
          

        </div>
      </div>
    </Wapper>
  );
};

export default Header;

const Wapper = styled.div`
  height: 60px;
  background: #032541;
`;
