import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './FestivalPage_Menu.css';
import { useEffect } from 'react';


function FestivalPage_Menu() {
    const [activeButton, setActiveButton] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            if (scrollY === 0) {
                setActiveButton(null); // 메인 화면에 있을 때 activeButton 초기화
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='RiseUp_Menu'>
            <div className='RiseUp_MenuList'>
                <div className={`RiseUp_Menu_PurposeHistory ${activeButton === 'PurposeHistory' ? 'active' : ''}`}>
                    <Link
                        to="PurposeHistory"
                        smooth={true}
                        duration={500}
                        className="RiseUp_Menu_PurposeHistory-Text"
                        spy={true}
                        onSetActive={() => setActiveButton('PurposeHistory')}
                    >
                        행사 목표 및 역사
                    </Link>
                </div>
                <div className={`RiseUp_Menu_TimeTable ${activeButton === 'TimeTable' ? 'active' : ''}`}>
                    <Link
                        to="TimeTable"
                        smooth={true}
                        duration={500}
                        className="RiseUp_Menu_TimeTable-Text"
                        spy={true}
                        onSetActive={() => setActiveButton('TimeTable')}
                    >
                        TIME TABLE
                    </Link>
                </div>
                <div className={`RiseUp_Menu_LineUp ${activeButton === 'LineUp' ? 'active' : ''}`}>
                    <Link
                        to="LineUp"
                        smooth={true}
                        duration={500}
                        className="RiseUp_Menu_LineUp-Text"
                        spy={true}
                        onSetActive={() => setActiveButton('LineUp')}
                    >
                        LINE UP
                    </Link>
                </div>
                <div className={`RiseUp_Menu_About ${activeButton === 'About' ? 'active' : ''}`}>
                    <Link
                        to="ABOUT"
                        smooth={true}
                        duration={500}
                        className="RiseUp_Menu_About-Text"
                        spy={true}
                        onSetActive={() => setActiveButton('About')}
                    >
                        ABOUT
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default FestivalPage_Menu;
