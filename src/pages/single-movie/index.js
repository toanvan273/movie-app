import React from 'react';
import { useParams } from 'react-router-dom';
import { useQueryDetailMovie } from './query-client';
import styled from 'styled-components';
import { Config } from '../../constants/config';

function SingleMovie() {
  const params = useParams();
  const {data, error} = useQueryDetailMovie(params.id)
  console.log('params' ,data);
  return (
    <Wapper backdrop={Config.domain_poster_backdrop + data?.data.backdrop_path}>
      <div className='banner-movie'>
        <div className='container'>
          <div className='row h-520'>
            <div className='poster-wapper col-12 col-sm-4 col-md-4'>
              <div className='h-100 d-flex justify-content-center align-items-center'>
                <div className='poster br-5 overflow-hidden'>
                  <img src={Config.domain_poster_single + data?.data.poster_path}  />
                </div>
              </div>
            </div>
            <div className='content-wapper col-12 col-sm-8 col-md-8'>
              <div className='wapper-content w-100 h-100 p-4'>
                <div className='wapper-title mt-1'>
                  <h3 className='title text-fff'>Mèo Đi Hia: Điều Ước Cuối Cùng</h3>
                  <div className='facts text-fff'>
                    <span class="certification px-1">PG</span>
                    <span class="release">12/30/2022 (VN)</span>
                    <span class="genres">Phim Hoạt Hình,Phim Phiêu Lưu,Phim Hài,Phim Gia Đình,Phim Giả Tượng</span>
                    <span class="runtime">1h 43m</span>
                  </div>
                </div>

                <div className='wapper-actions'>
                  
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
        
      
    </Wapper>
  );
}
export default SingleMovie;

const Wapper = styled.div`
  background-position: left calc((50vw - 170px) - 340px) top;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${(p) => p.backdrop});
  .banner-movie{
    background-image: linear-gradient(to right, rgba(31.5, 10.5, 10.5, 1) calc((50vw - 170px) - 340px), rgba(31.5, 10.5, 10.5, 0.84) 30%, rgba(31.5, 10.5, 10.5, 0.84) 100%);
  }
  .wapper-title{
    .facts{
      .certification{
        border: 1px solid #ffffff99;
        color: #ffffff99;
        border-radius: 2px;
      }
    }
  }
`