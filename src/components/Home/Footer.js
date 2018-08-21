import React from 'react';
import styled from 'styled-components';
import FacebookIcon from './images/facebook.png';
import TwitterIcon from './images/twitter.png';
import PinterestIcon from './images/pinterest.png';
import GoTopIcon from './images/go-top-button.png';

const FooterContainer = styled.div`
  background-color: #4b4b4b;
  padding-bottom: 80px;

  display: flex;
  align-items: center;
  flex-direction: column;
  flex: 1;

  @media (min-width: 320px) and (max-width: 480px) {
    height: auto;
  }
`;

const TopInfo = styled.div`
  width: 80%;
  display: flex;
  flex: 1;
  align-items: flex-start;
  justify-content: space-between;

  @media (min-width: 320px) and (max-width: 480px) {
    width: 100%;
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
  }
`;

const BottomInfo = styled.div`
  width: 80%;
  display: flex;
  flex: 1;
  align-items: flex-start;
  justify-content: space-between;

  @media (min-width: 320px) and (max-width: 480px) {
    width: 100%;
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
  }
`;

const InfoBlock = styled.div`
  font-family: 'Source Sans Pro', sans-serif;
`;

const InfoBlockH4 = styled.h4`
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 1.6px;
  line-height: normal;
  color: #ffffff;
`;

const InfoBlockSpan = styled.span`
  font-size: 18px;
  font-weight: lighter;
  line-height: 1.44;
  color: #ffffff;
  opacity: 0.5;
`;

const Footer = props => (
  <FooterContainer>
    <TopInfo>
      <InfoBlock className="contact extendedContentSmall">
        <InfoBlockH4>CONTACT US</InfoBlockH4>
        <InfoBlockSpan>+235 555-555-7938</InfoBlockSpan>
        <InfoBlockSpan>contact@petfinder.org</InfoBlockSpan>
      </InfoBlock>
      <InfoBlock className="about extendedContent extendedContentSmall">
        <InfoBlockH4>ABOUT US</InfoBlockH4>
        <InfoBlockSpan>
          Petfinder is an online, searchable database of animals who need homes.
          It is also a directory of nearly 11,000 animal shelters and adoption
          organizations across the U.S.
        </InfoBlockSpan>
      </InfoBlock>
      <InfoBlock className="follow">
        <InfoBlockH4>FOLLOW US</InfoBlockH4>
        <div className="socialBox">

          <div className="socialIconsContainer">
            <div className="socialIcon">
              <img src={PinterestIcon} />
            </div>
            <div className="socialIcon">
              <img src={TwitterIcon} />
            </div>
            <div className="socialIcon">
              <img src={FacebookIcon} />
            </div>
          </div>
          <div className="emptyBox extendedContent"></div>
        </div>
      </InfoBlock>
    </TopInfo>
    <BottomInfo>
      <div className="copyright">
        <hr></hr>
        <span>© 2019 Petfinder.org</span>
      </div>
      <div className="goTop">
        <div><span class="extendedContent">To the Top</span></div>
        <div><img src={GoTopIcon} /></div>
      </div>
    </BottomInfo>
    <div className="box"></div>
  </FooterContainer>
)

export default Footer
