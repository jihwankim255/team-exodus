import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Styled from './Footer.styled'

function Footer() {
  return (
    <Styled.FooterWrapper className="footer">
      <Styled.FooterPadding className="sb__footer section__padding">
        <Styled.FooterLinks className="sb__footer-links">
          <Styled.FooterLinksDiv className="sb__footer-links_div">
            <Styled.H4>For Business</Styled.H4>
            <Styled.Link>
              <Styled.P>Employer</Styled.P>
            </Styled.Link>
            <Styled.Link>
              <Styled.P>Health Plan</Styled.P>
            </Styled.Link>
            <Styled.Link>
              <Styled.P>Individual</Styled.P>
            </Styled.Link>
          </Styled.FooterLinksDiv>

          <Styled.FooterLinksDiv className="sb__footer-links_div">
            <Styled.H4>Resources</Styled.H4>
            <Styled.Link>
              <Styled.P>resource center</Styled.P>
            </Styled.Link>
            <Styled.Link>
              <Styled.P>Testimonials</Styled.P>
            </Styled.Link>
            <Styled.Link>
              <Styled.P>STV</Styled.P>
            </Styled.Link>
          </Styled.FooterLinksDiv>

          <Styled.FooterLinksDiv className="sb__footer-links_div">
            <Styled.H4>Partners</Styled.H4>
            <Styled.Link>
              <Styled.P>Swing Tech</Styled.P>
            </Styled.Link>
          </Styled.FooterLinksDiv>
          <Styled.FooterLinksDiv className="sb__footer-links_div">
            <Styled.H4>Company</Styled.H4>
            <Styled.Link>
              <Styled.P>About</Styled.P>
            </Styled.Link>
            <Styled.Link>
              <Styled.P>Prress</Styled.P>
            </Styled.Link>
            <Styled.Link>
              <Styled.P>Career</Styled.P>
            </Styled.Link>
            <Styled.Link>
              <Styled.P>Contact</Styled.P>
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
              Copyrightⓒ {new Date().getFullYear()} ExodusInc. All right
              reserved.
            </Styled.FooterCopyrightP>
          </div>
          <Styled.FooterBelowLinks className="sb__footer-below-links">
            <Styled.Link>
              <div>
                <Styled.BelowP>Terms &Conditions</Styled.BelowP>
              </div>
            </Styled.Link>
            <Styled.Link>
              <div>
                <Styled.BelowP>Privacy</Styled.BelowP>
              </div>
            </Styled.Link>
            <Styled.Link>
              <div>
                <Styled.BelowP>Security</Styled.BelowP>
              </div>
            </Styled.Link>
            <Styled.Link>
              <div>
                <Styled.BelowP>Cookie Declaration</Styled.BelowP>
              </div>
            </Styled.Link>
          </Styled.FooterBelowLinks>
        </Styled.FooterBelow>
      </Styled.FooterPadding>
    </Styled.FooterWrapper>
  )
}

export default Footer
