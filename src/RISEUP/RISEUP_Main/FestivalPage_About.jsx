import './FestivalPage_About.css'
import { Element } from 'react-scroll';
import iconCross from './FestivalPageImg/Cross.png';
import aboutLight from './FestivalPageImg/aboutLight.png'
import Lion from './FestivalPageImg/Lion.png'
import BDW from './FestivalPageImg/BDW.png'



function FestivalPage_About(){

  const handleLIONButtonClick=()=>{
    window.location.href = 'https://syulikelion.com/'; 
  }
  const handleBDWButtononClick=()=>{
    window.location.href ='https://www.instagram.com/syu_64emergency?igsh=OHhnazIxdmJxN3Z3'
  }



  return(
    <Element name="ABOUT" className='RiseUp_About'>
      <div className='about_container'>

        <div className='about_title'>
          <div className='about_light_img'>
            <img src={aboutLight} alt="" />
          </div>
          <div className='about_lion'>
            LIKELION AT SYU<br/>
            멋쟁이사자처럼 삼육대학교 12기
          </div>
          <div className='about_x'>
            <img src={iconCross}/>
          </div>
          <div className='about_bdw'>
            제64대 삼육대학교 총학생회<br/>
            비상대책위원회 ‘전진’
          </div>
          <div className='about_title_contents'>
            안녕하세요! 삼육대학교 학우 여러분.<br/>
            학우분들께서 더욱 즐겁게 2024 천보축전을 즐기실 수 있도록<br/> 
            삼육대학교 비상대책위원회 ‘전진’과 멋쟁이사자처럼 삼육대학교가 협업해<br/>
            2024 천보축전 페이지를 개발하였습니다.
            <br/><br/>
            2024 천보축전 페이지와 함께 축제를 즐기시고<br/> 
            소중한 청춘의 추억을 만드시길 바랍니다.<br/>
            감사합니다.
          </div>
        </div>

        <div className='about_contents_container'>

          <div className='about_lion_container'>
            <div className='about_lion_img'>
              <img src={Lion} alt="" />
            </div>
            <div className='about_lion_title'>멋쟁이사자처럼 삼육대학교 12기</div>
            <div className='about_lion_contents'>
              멋쟁이사자처럼 삼육대학교는<br/>
              테크 기반의 아이디어 실현을 위한<br/>
              전국 최대 규모의 대학연합 IT 동아리이자<br/>
              삼육대학교 중앙 동아리입니다.
            </div>
            <div className='about_lion_button_container'>
              <button className='about_lion_button' onClick={handleLIONButtonClick}>삼육멋사 12기 홈페이지</button>
            </div>
          </div>

          <div className='about_contents_underline'></div>

          <div className='about_bdw_container'>
            <div className='about_bdw_img'>
              <img src={BDW} alt="" />
            </div>
            <div className='about_bdw_title'>제64대 삼육대학교 총학생회<br/>비상대책위원회 전진</div>
            <div className='about_bdw_contents'>
              안녕하세요, 제64대 삼육대학교<br/>
              총학생회 비상대책위원회 ‘전진’입니다.<br/>
              이번 천보축전의 타이틀인 &lt;RISE UP&gt;처럼<br/>
              제64대 삼육대학교 총학생회 비상대책위원회 전진은,<br/>
              학생 복지와 학생 권리를 위해서<br/>
              항상 전진하겠습니다. 감사합니다.
            </div>
            <div className='about_bdw_button_container'>
              <button className='about_bdw_button' onClick={handleBDWButtononClick}>비상대책위원회 ‘전진’ 인스타그램</button>
            </div>
          </div>
        </div>

      </div>
    </Element>
  )
}

export default FestivalPage_About