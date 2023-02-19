import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Select from 'react-select';
import { useSetRecoilState } from 'recoil';
import { customStyles, options } from './constant';
import { searchMovieAtom } from './recoil';


const SelectType = () => {
  const params = useParams()
  const navigate = useNavigate();
  const setSearchMovie = useSetRecoilState(searchMovieAtom)
  const [value, setValue] = useState(options.find(e => e.value === '/' + params.page))
  
  const switchPage = option => {
      setSearchMovie({})
      setValue(option);
      navigate('movie'+option.value)
  }

  return (
    <div className='switch-page w-100'>
      <Select
        options={options}
        classNamePrefix="select"
        styles={customStyles}
        onChange={switchPage}
        value={value}
      />
    </div>
  );
};

export default SelectType;
