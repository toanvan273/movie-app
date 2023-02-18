import React from 'react';
import { useParams } from 'react-router-dom';
import { useQueryDetailMovie } from './query-client';
import styled from 'styled-components';
import { Config } from '../../constants/config';
import WapperActions from './wapper-actions';
import Loading from '../../layout/loading';

function SingleMovie() {
  const params = useParams();
  const {data, isFetching} = useQueryDetailMovie(params.id)

  const mapGenres = list => {
    if (!list) return null;
    return list.map(e=>e.name).join(', ')
  }

  const convertRuntime = totalMinutes => {
    if (!totalMinutes) return null;
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}h ${minutes}m`
  }

  const render_production_companies = array => {
    if (!array) return null;
    return array.map((item,i) => (
      <div className='d-inline-block' key={i}>
        <b>{item.name}</b>
        <span className='d-block'>{item.origin_country}</span>
      </div>
    ))
  }

  if (isFetching) return <Loading />
  if (!data) return null;

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
                  <h3 className='title text-fff'>{data?.data.title}</h3>
                  <div className='facts text-fff'>
                    <span className="certification px-1">PG</span>
                    <span className="release ms-2">{data.data.release_date}</span>
                    <span className="genres ms-2">{mapGenres(data.data.genres)}</span>
                    <span className="runtime ms-2">{convertRuntime(data.data.runtime)}</span>
                  </div>
                </div>
                <WapperActions data={data.data} />
                <div className='wapper-overview text-fff mt-3'>
                  <i>{data.data.tagline}</i>
                  <h3>Overview</h3>
                  <p>{data.data.overview}</p>
                  <div className='actor d-flex justify-content-between'>
                    {render_production_companies(data.data.production_companies)}
                  </div>
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
  .wapper-actions{
    .vote_average{
      width: 58px;
      height: 58px;
      border-radius: 50%;
      padding: 2px;
      background-color: #081c22;
      span{
        color: #fff;
      }
    }
    .list{
      padding: 10px
    }
    .round_circle{
      width: 46px;
      height: 46px;
      border-radius: 50%;
      padding: 2px;
      background-color: #081c22;
    }
  }
`