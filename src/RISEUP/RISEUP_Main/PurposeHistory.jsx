import './PurposeHistory.css'
import aboutLight from './FestivalPageImg/aboutLight.png'
import { Element } from 'react-scroll';


function PurposeHistory(){
  return(
    <Element name="PurposeHistory" className='RiseUp_Purpose'>
      <div className='purposehistory_container'>
        <div className='purpose_container'>
          <div className='light_img1'>
            <img src={aboutLight}/>
          </div>
          <div className='purpose_title'>PURPOSE</div>
          <div className='purpose_contents'>
          삼육대학교 제118주년 기념 천보축전 ‘RISE UP’의 주제는<br/>
          <span className='highlight1'>‘도약과 화합의 장’</span>입니다.
          <br/><br/>
          <span className='highlight1'>‘도약’</span>은 우리의 대학문화가 더 나아갈 수 있는 기반을 마련하고,<br/> 
          혁신적인 아이디어와 창의적인 활동을 통해 학생들이 자신의 가능성을<br/>
          최대한 발휘할 수 있도록 돕는 것입니다. 이를 통해 삼육대학교가 지닌<br/> 
          잠재력을 끌어내고, 미래를 향한 새로운 발걸음을 내딛는 기회를<br/>
          제공합니다.
          <br/><br/>
          <span className='highlight1'>‘화합’</span>은 서로 다른 배경과 가치를 가진 구성원들이 하나로 모여,<br/> 
          서로의 차이를 존중하며 공동체 의식을 강화하는 과정을 의미합니다.<br/>
          다양한 프로그램과 활동을 통해 학생들, 교수님들, 교직원들 간의<br/> 
          소통을 촉진하고, 모두가 함께하는 축제의 장을 만들어 나갈 것입니다.<br/>
          <br/><br/>
          이번 천보축전은 <span className='highlight1'>‘도약’과 ‘화합’</span>이라는 두 축을 통해, 삼육대학교의<br/> 
          미래를 밝히고, 모든 구성원이 하나 되는 특별한 순간을 만들어<br/> 
          나가는 데 그 목표를 두고 있습니다.<br/>
          </div>
        </div>
        <div className='history_container'>
          <div className='light_img2'>
            <img src={aboutLight}/>
          </div>
          <div className='history_title'>HISTORY</div>
          <div className='history_contents'>
            삼육대학교는 1906년 개교 이후, 1961년에 학생 자치기구를<br/>
            조직하여 대학문화 창달을 위한 기초를 마련했습니다. 이러한 노력의<br/> 
            일환으로 2007년에 처음으로 천보축전을 개최하게 되었습니다.<br/> 
            천보축전은 삼육대학교 구성원들이 함께 소통하고 교류하며, 학문적,<br/> 
            예술적 재능을 발휘할 수 있는 장으로 자리잡아 왔습니다.<br/>
            <br/><br/>
            특히, 제64대 삼육대학교 총학생회 비상대책위원회 전진은<br/>
            삼육대학교 역사상 최대 규모의 야외 축제를 기획하고 진행하며,<br/> 
            기존의 보수적인 축제 형식을 탈피하고자 한 제117주년 천보축전의<br/> 
            목표를 이어받았고, 이로 인해 천보축전은 삼육대학교의 대학문화<br/> 
            창달이라는 목적에 더욱 부합하는 의미를 가지게 되었습니다.<br/> 
            <br/><br/>
            학생들의 창의적이고 역동적인 참여를 통해 축제의 새로운 방향을<br/>
            제시하며, 삼육대학교의 개방적이고 진취적인 이미지를 확립하는<br/>
            계기가 되었습니다.
          </div>
        </div>
      </div>
    </Element>

  )

}

export default PurposeHistory