import React from 'react';
import styled from 'styled-components';
import { Tooltip as ReactTooltip } from 'react-tooltip';
function WapperActions() {
    
    return (
      <Wapper>
         <div className='wapper-actions mt-2 text-fff'>
        <div className='rate d-inline-flex align-items-center'>
            <div className='vote_average d-flex justify-content-center align-items-center'>
            <span>1.1</span>
            </div>
            <div className='ms-2'>
            <b className='text-fff'>User</b>
            <b className='d-block text-fff'>Score</b>
            </div>
        </div>

        <div className='d-inline-flex ms-2'>
            <div className='list'>
             <div data-tip id={"add-list"} className='round_circle d-inline-flex justify-content-center align-items-center'>
                <i className="fa fa-list-ul text-fff" aria-hidden="true"></i>
              </div>
              
              {/* <ReactTooltip anchorId={'add-list'}  variant="warning" place="left">
                <span className="f-14 fw-400">
                  Add to list
                </span>
              </ReactTooltip> */}
               
            </div>

            <div className='list'>
            <div className='round_circle d-inline-flex justify-content-center align-items-center'>
                <i className="fa fa-heart text-fff" aria-hidden="true"></i>
            </div>
            </div>

            <div className='list'>
            <div className='round_circle d-inline-flex justify-content-center align-items-center'>
                <i className="fa fa-bookmark text-fff" aria-hidden="true"></i>
            </div>
            </div>

            <div className='list'>
            <div className='round_circle d-inline-flex justify-content-center align-items-center'>
                <i className="fa fa-star text-fff" aria-hidden="true"></i>
            </div>
            </div>
        </div>

        <div className='d-inline-flex ms-3'>
            <div className='text-dark5-hover cs-pointer'>
            <i className="fa fa-play text-fff" aria-hidden="true"></i>
            <b className='ms-2'>Play Trainer</b>
            </div>
        </div>
        </div>
        
      </Wapper>
    );
  }
  export default WapperActions;
  
  const Wapper = styled.div`
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