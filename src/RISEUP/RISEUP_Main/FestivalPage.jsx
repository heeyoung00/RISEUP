import React from 'react';
import './FestivalPage.css';

import icon2024 from './FestivalPageImg/2024 1.png';
import iconDawn from './FestivalPageImg/Dawn.png';
import RISEUP_Title from './FestivalPageImg/title 1.png';
import iconCross from './FestivalPageImg/Cross.png';

function FestivalPage() {
  return (
    <div className='RiseUp_main_container'>
      <div className='Riseup_main_header'>
        <div className='Riseup_main_header_Left'>
          <div className='Riseup_main_header_2024'><img src={icon2024} /></div>
          <div className='Riseup_main_header_Test'>
            SAHMYOOK<br />UNIVERSITY<br />FESTIVAL<br />
          </div>
        </div>
        <div className='Riseup_main_header_Dawn'><img src={iconDawn} /></div>
      </div>
      <div className='Riseup_main_Title'>
        <img src={RISEUP_Title} />
        <div className='Riseup_main_SubTitle'>
          삼육대학교 2024 천보축전 페이지
        </div>
        <div className='Riseup_main_SubContents'>
          <div className='Riseup_main_LikeLion12th'>멋쟁이사자처럼 삼육대학교 12기</div>
          <div className='Riseup_main_cross'><img src={iconCross} /></div>
          <div className='Riseup_main_committee'>제64대 삼육대학교 총학생회 비상대책위원회 전진</div>
        </div>
      </div>
    </div>
  );
}

export default FestivalPage;
