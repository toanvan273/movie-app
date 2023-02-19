import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import 'react-datepicker/dist/react-datepicker.css';
import Select from 'react-select';
import { customSortStyles, optionsSort } from './constant';
import DatePicker from 'react-datepicker';
import { useRecoilState } from 'recoil';
import { searchMovieAtom } from '../recoil';
import { useOnClickOutside } from '../../../hook';

const SearchWapper = ({ setShow }) => {
  const refSearch = useRef();
  const [searchAtom, setSearchMovie] = useRecoilState(searchMovieAtom)
  
  const [sortType, setSortType] = useState(optionsSort.find(e=>e.value===searchAtom.sortType));

  const [fromReleaseDate,setFromReleaseDate] = useState(searchAtom.fromReleaseDate)
  const [toReleaseDate, setToReleaseDate] = useState(searchAtom.toReleaseDate)
  


  useOnClickOutside(refSearch, () => {
    setShow(false);
  });
 
  const setValueSearch = () => {
    setSearchMovie({
      sortType: sortType?.value,
      fromReleaseDate,
      toReleaseDate,
    
    })
    setShow(false);
  }
  return (
    <Wapper ref={refSearch} >
      <div className='mt-2'>
        <label className='mb-2'>Sort :</label>
        <Select
          options={optionsSort}
          classNamePrefix="select"
          styles={customSortStyles}
          onChange={setSortType}
          value={sortType}
        />
      </div>
      <div className='mt-2'>
        <label>Release Dates:</label>
        <div className='date-filter mt-2'>
          <div>
            <label className='label-release'>From</label>
            <div className="d-inline-block date-picker-wapper" >
              <DatePicker
                className="input-setup br-5 px-2 outline-none h-32 fw-500"
                dateFormat={'dd/MM/yyyy'}
                selectsStart
                onSelect={setFromReleaseDate}
                selected={fromReleaseDate}
              />
            </div>
          </div>

          <div className='mt-3'>
            <label className='label-release'>To</label>
            <div className="d-inline-block date-picker-wapper" >
              <DatePicker
                className="input-setup br-5 px-2 outline-none h-32 fw-500"
                dateFormat={'dd/MM/yyyy'}
                selectsEnd
                onSelect={setToReleaseDate}
                selected={toReleaseDate}
              />
            </div>
          </div>

        </div>
      </div>


      <div className='mt-4'>
        <div className='text-center'>
          <button className='btn btn-success' onClick={setValueSearch}>Search</button>
          <button className='btn btn-dark ms-2' onClick={()=> setSearchMovie({}) } >Reset</button>
        </div>
      </div>
    </Wapper>
  );
};

export default SearchWapper;
const Wapper = styled.div`
  background: #fff;
  color: #000000;
  position: absolute;
  z-index: 9;
  top: 50px;
  width: 280px;
  border-radius: 10px;
  height: 450px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
  overflow: hidden;
  padding: 0 10px;
  .label-release{
    width: 40px;
  }
`