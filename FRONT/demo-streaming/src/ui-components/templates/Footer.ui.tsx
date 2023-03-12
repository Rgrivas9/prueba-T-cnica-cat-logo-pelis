import styled from 'styled-components'
import Icons from '../../styles/Icons'
import Palette from '../../styles/Palette'
import Spacing from '../../styles/Spacing'
import Icon from '../atoms/Icon.ui'
import Anchor from '../molecules/Anchor.ui'
import DivCustom from '../molecules/DivCustom.ui'
import { Heading_4, Heading_5, Heading_6 } from '../molecules/Headings.us'
import Nav from '../organism/Nav.ui'
type FooterStyledProps = {
  height?: string
}
const FooterStyled = styled.footer<FooterStyledProps>`
  height: ${({ height }) => (height ? height : 'max-content')};
  width: 100%;
  background-color: ${Palette.footer};
  padding: ${Spacing.main_padding};
`
const Footer = ({ height }: FooterStyledProps) => {
  return (
    <FooterStyled height={height}>
      <Nav />
      <DivCustom padding={`0 0 0 ${Spacing._2}`}><Heading_4 text="Copyright © 2016 DEMO Streaming. All Rights Reserved." /></DivCustom>
      
      <DivCustom padding={`${Spacing._8} 0`}>
        <DivCustom display='flex-start' padding='0'>
          <Anchor padding='0'>
            <Icon
              src={Icons.facebook}
              alt="Facebook icon"
              variant="inverted"
              width={Spacing._10}
              padding={`0 ${Spacing._3} 0 0`}
            />
          </Anchor>
          <Anchor>
            <Icon
              src={Icons.twitter}
              alt="Twitter icon"
              variant="inverted"
              width={Spacing._9}
              padding={`0 ${Spacing._2} 0 0`}
            />
          </Anchor>
          <Anchor>
            <Icon
              src={Icons.instagram}
              alt="Instagram Icon"
              variant="inverted"
              width={Spacing._8}
            />
          </Anchor>
        </DivCustom>
        <DivCustom gap={Spacing._6} display='flex-end' padding='0'>
          <Anchor variant="solid" radius="yes">
            <Icon
              src={Icons.apple}
              alt="Apple Icon"
              variant="inverted"
              width={Spacing._8}
              padding={`0 ${Spacing._2} 0 0`}
            />
            <div>
              <Heading_6
                text="Download on the"
                font='"san francisco"'
                size={Spacing._3}
              />
              <Heading_5
                text="App Store"
                font='"san francisco"'
                size={Spacing._4}
              />
            </div>
          </Anchor>
          <Anchor variant="solid" radius="yes">
            <Icon
              src={Icons.google}
              alt="Google play icon"
              width={Spacing._8}
              padding={`0 ${Spacing._2} 0 0`}
            />
            <div>
              <Heading_6
                text="GET IT ON"
                font='"open sans"'
                size={Spacing._2}
              />
              <Heading_4
                text="Google Play"
                font='"open sans"'
                size={Spacing._4}
              />
            </div>
          </Anchor>
          <Anchor variant="solid">
            <Icon
              src={Icons.microsoft}
              alt="Microsoft icon"
              width={Spacing._8}
              padding={`0 ${Spacing._2} 0 0`}
            />
            <div>
              <Heading_6
                text="Get it from"
                font='"Segoe UI", sans-serif'
                size={Spacing._3}
              />
              <Heading_5
                text="Microsoft"
                font='"Segoe UI", sans-serif'
                size={Spacing._4}
              />
            </div>
          </Anchor>
        </DivCustom>
      </DivCustom>
    </FooterStyled>
  )
}
export default Footer
