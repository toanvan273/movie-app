import React from 'react';
import styled from 'styled-components';
import { Config } from '../../constants/config';
import { useNavigate } from 'react-router-dom';

function MovieCard({ data }) {
  const navigate = useNavigate();
  const goDetailMovie = () => {
    console.log('ahdhsk0', data);
    navigate('/single-movie/'+data.id)
  }
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-20 px-2 mt-3">
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
    </div>
  );
}
export default MovieCard;

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