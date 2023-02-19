import React from 'react';
import styled from 'styled-components';
import { Config } from '../../constants/config';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { switchGridViewAtom } from '../../layout/header/recoil';

function MovieCard({ data }) {
  const gridView = useRecoilValue(switchGridViewAtom)
  const navigate = useNavigate();
  const goDetailMovie = () => {
    navigate('/single-movie/'+data.id)
  }
  
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-20 px-2 mt-3">
      {gridView ?
      <Wapper className='br-5'>
        <div className="w-100 " style={{  minHeight: 390 }}>
          <div className='custom-img h-300 cs-pointer' onClick={goDetailMovie}>
              <img srcSet={Config.domain_poster + data.poster_path} className='w-100 h-300' />
          </div>
          <div className='content px-2  position-relative'>
              <div className='rate position-absolute'>
                <div className='vote_average d-flex justify-content-center align-items-center'>
                  <span>{data.vote_average}</span>
                </div>
            </div>
            <div className='sub-title pt-4'>
              <h2 className='text-dark5-hover cs-pointer' onClick={goDetailMovie} >{data.title}</h2>
              <p className='text-dark9 f-14 mt-0'>{data.release_date}</p>
            </div>
          </div>
        </div>
      </Wapper>
        :
      <WapperList className='br-5 p-1 mt-2 cs-pointer' onClick={goDetailMovie}>
          <div className='d-flex'>
            <div className='poster'>
              <img srcSet={Config.domain_poster + data.poster_path} className='w-100'/>
            </div>
            <div className='title ms-2'>
              <b className='f-14 '>{data.title} ({data.vote_average})</b>
              <p className='text-dark9 f-12 mt-1'>{data.release_date}</p>
            </div>
         </div>
      </WapperList>
    }
    </div>
  );
}
export default MovieCard;
const WapperList = styled.div`
 height: 60px;
 overflow: hidden;
  .poster{
    width: 60px;
  }
  .title{
    line-height: 1;
    display: flex;
    flex: 1;
    flex-direction: column;
  }
`

const Wapper = styled.div`
  box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
  overflow: hidden;
  .rate{
    top: -19px;
    left: 6px;
    .vote_average{
        width: 38px;
        height: 38px;
        border-radius: 50%;
        padding: 2px;
        background-color: #081c22;
      span{
        color: #fff;
      }
    }
  }
  .custom-img{
    img{
      object-fit: cover;
    }
  }
  .sub-title{
    h2{
      font-weight: 600;
      font-size: 14px
    }
  }
`
