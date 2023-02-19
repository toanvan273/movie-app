import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { switchGridViewAtom } from './recoil';

const SwitchView = () => {
  const [grid, setGrid] = useRecoilState(switchGridViewAtom)
  
  return (
    <Wapper onClick={()=>setGrid(!grid) }>
      <span className="switch-bg" style={{left: grid? 0 : '50%'}}></span>
      <label className="switch-labels"  >
        <span>Grid</span>
        <span>List</span>
      </label>
    </Wapper>
  );
};

export default SwitchView;

const Wapper = styled.div`
  background: #274a5e;
  border-radius: 13px;
  float: left;
  text-align: center;
  height: 26px;
  margin: 0 5px;
  position: relative;
  width: 170px;
  .switch-bg{
    background: #7d7781;
    border-radius: 13px;
    height: inherit;
    left: 50%;
    position: absolute;
    transition: left .3s;
    width: 50%;
    z-index: 0;
  }
  .switch-labels{
    cursor: pointer;
    height: inherit;
    color: #fff;
    left: 0;
    position: absolute;
    top: 0;
    z-index: 1;
    width: inherit;
    display: flex;
    justify-content: space-around;
  }
`;