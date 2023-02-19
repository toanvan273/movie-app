import React from 'react';
import styled from 'styled-components';
import SearchMovie from './search';
import SelectType from './select-type';
import SwitchView from './switch-view';

const Header = () => {
  return (
    <Wapper>
      <div className='container h-100'>
        <div className='row h-100'>
          <div className='col-12 col-sm-4 col-md-4 h-100'>
            <div className='d-flex justify-content-center align-items-center w-100 h-100'>
              <SelectType />
            </div>
          </div>
          
          <div className='col-12 col-sm-4 col-md-4 h-100'>
            <div className='d-flex justify-content-center align-items-center w-100 h-100'>
              <SwitchView />
            </div>
          </div>
          <div className='col-12 col-sm-4 col-md-4 text-fff'>
            <SearchMovie />
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
