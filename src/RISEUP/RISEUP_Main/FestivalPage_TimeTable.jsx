import React from 'react';
import './FestivalPage_TimeTable.css';
import { Element } from 'react-scroll';

import map1 from './FestivalPageImg/map1.png'
import map2 from './FestivalPageImg/map2.png'
function FestivalPage_TimeTable() {

  const boothSchedule = [
    { time: '10:00 - 12:00', description: '오전 부스 진행' },
    { time: '13:00 - 17:00', description: '오후 부스 진행' },
    { time: '17:00 - 18:00', description: '부스 마감' },
  ];

  const eventSchedule = [
    { time: '16:00 - 16:10', description: '개회 무대' },
    { time: '16:10 - 16:30', description: '개회식' },
    { time: '16:30 - 16:50', description: 'SCHEMA' },
    { time: '16:50 - 17:10', description: 'ALWAYSLATE' },
    { time: '17:10 - 17:30', description: 'CLASSIA' },
    { time: '17:30 - 17:50', description: 'MC 레크레이션' },
    { time: '17:50 - 17:59', description: '개인 참가자 이수빈' },
    { time: '17:59 - 18:08', description: '개인 참가자 이우진' },
    { time: '18:08 - 18:23', description: '개인 참가자 RIP' },
    { time: '18:23 - 18:38', description: <>환경디자인<br/>원예학과 <br/>치어리딩 동아리</> }, // Safe line break
    { time: '18:38 - 18:53', description: 'D.M 공연' },
    { time: '18:53 - 19:13', description: 'PLAGUE 공연' },
    { time: '19:13 - 19:23', description: 'MC 레크레이션' },
    { time: '19:23 - 19:53', description: (
      <>
        <span className="highlight">키노</span> + 댄스동아리<br />합동무대<br /><span className="highlight">키노</span> 단독무대
      </>
    )}, // Color for 키노 and spaces
    { time: '19:53 - 20:33', description: <span className="highlight">박명수</span> }, // Color for 박명수
    { time: '20:33 - 21:33', description: <span className="highlight">다이나믹 듀오</span> }, // Color for 다이나믹 듀오
    { time: '21:33 - ', description: '폐막식' }, // Added spaces after time
  ];


  return (
    <Element name="TimeTable" className='RiseUp_TimeTable'>
      <div className='RiseUp_TimeTable_Title'>
        TIME TABLE
      </div>
      <div className='RiseUp_TimeTable_Booth'>
        <p>부스 진행 순서</p>
        {boothSchedule.map((booth, index) => (
          <div key={index} className='RiseUp_TimeTable_BoothItemBox'>
            <div className='RiseUp_TimeTable_BoothItem'>
              <div className='RiseUp_TimeTable_BoothTime'>{booth.time}</div>
              <div className='RiseUp_TimeTable_BoothDescription'>{booth.description}</div>
            </div>
            {index < boothSchedule.length - 1 && (
              <div className="RiseUp_TimeTable_BoothItemDivder"></div>
            )}
          </div>
        ))}
        <div className='RiseUp_TimeTable_Map1'>
          <img src={map1} />
        </div>
      </div>

      <div className='RiseUp_TimeTable_Event'>
        <p>행사 진행 순서</p>
        {eventSchedule.map((event, index) => (
          <div key={index} className='RiseUp_TimeTable_ScheduleBox'>
            <div className='RiseUp_TimeTable_EventItem'>
              <div className='RiseUp_TimeTable_EventTime'>{event.time}</div>
              <div className='RiseUp_TimeTable_EventDescription'>{event.description}</div>
            </div>
            {index < eventSchedule.length - 1 && (
              <div className="RiseUp_TimeTable_EventItemDivder"></div>
            )}
          </div>
        ))}
        <div className='RiseUp_TimeTable_Map2'>
          <img src={map2} />
        </div>
      </div>
    </Element>
  );
}

export default FestivalPage_TimeTable;