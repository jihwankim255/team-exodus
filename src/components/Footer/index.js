import React from 'react'
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Styled from './footer.styled'

function Footer() {
  return (
    <Styled.FooterWrapper className="footer">
      <Styled.FooterPadding className="sb__footer section__padding">
        <Styled.FooterLinks className="sb__footer-links">
          <Styled.FooterLinksDiv className="sb__footer-links_div">
            <Styled.H4>this is a clone project</Styled.H4>
            <Styled.Link>
              <Styled.P>Lorem</Styled.P>
            </Styled.Link>
            <Styled.Link>
              <Styled.P>Ipsum</Styled.P>
            </Styled.Link>
            <Styled.Link>
              <Styled.P>my portfolio</Styled.P>
            </Styled.Link>
          </Styled.FooterLinksDiv>

          <Styled.FooterLinksDiv className="sb__footer-links_div">
            <Styled.H4>My careet</Styled.H4>
            <Styled.Link>
              <Styled.P>study hard</Styled.P>
            </Styled.Link>
            <Styled.Link>
              <Styled.P>good at problem solving</Styled.P>
            </Styled.Link>
            <Styled.Link>
              <Styled.P>like coding</Styled.P>
            </Styled.Link>
          </Styled.FooterLinksDiv>

          <Styled.FooterLinksDiv className="sb__footer-links_div">
            <Styled.H4>hire me</Styled.H4>
            <Styled.Link>
              <Styled.P>i want to work</Styled.P>
            </Styled.Link>
          </Styled.FooterLinksDiv>
          <Styled.FooterLinksDiv className="sb__footer-links_div">
            <Styled.H4>I'm the one</Styled.H4>
            <Styled.Link>
              <Styled.P>you've</Styled.P>
            </Styled.Link>
            <Styled.Link>
              <Styled.P>been</Styled.P>
            </Styled.Link>
            <Styled.Link>
              <Styled.P>looking</Styled.P>
            </Styled.Link>
            <Styled.Link>
              <Styled.P>for</Styled.P>
            </Styled.Link>
          </Styled.FooterLinksDiv>
          <Styled.FooterLinksDiv className="sb__footer-links_div">
            <Styled.H4>Coming Soon on</Styled.H4>
            <Styled.Socialmedia className="socialmedia">
              <Styled.Img>
                <FontAwesomeIcon icon={faFacebook} />
              </Styled.Img>
              <Styled.Img>
                <FontAwesomeIcon icon={faTwitter} />
              </Styled.Img>
              <Styled.Img>
                <FontAwesomeIcon icon={faLinkedin} />
              </Styled.Img>
              <Styled.Img>
                <FontAwesomeIcon icon={faInstagram} />
              </Styled.Img>
            </Styled.Socialmedia>
          </Styled.FooterLinksDiv>
        </Styled.FooterLinks>
        <Styled.Hr></Styled.Hr>
        <Styled.FooterBelow className="sb__footer-below">
          <div className="sb__footer-copyright">
            <Styled.FooterCopyrightP>
              2023 TeamExodus my portfolio
            </Styled.FooterCopyrightP>
          </div>
          <Styled.FooterBelowLinks className="sb__footer-below-links">
            <Styled.Link>
              <div>
                <Styled.BelowP>Lorem Ipsum</Styled.BelowP>
              </div>
            </Styled.Link>
            <Styled.Link>
              <div>
                <Styled.BelowP> is simply dummy text </Styled.BelowP>
              </div>
            </Styled.Link>
            <Styled.Link>
              <div>
                <Styled.BelowP>of the printing </Styled.BelowP>
              </div>
            </Styled.Link>
            <Styled.Link>
              <div>
                <Styled.BelowP>and typesetting industry</Styled.BelowP>
              </div>
            </Styled.Link>
          </Styled.FooterBelowLinks>
        </Styled.FooterBelow>
      </Styled.FooterPadding>
    </Styled.FooterWrapper>
  )
}

export default Footer
