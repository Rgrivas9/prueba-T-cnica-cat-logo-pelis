import styled from 'styled-components'
import Spacing from '../../styles/Spacing'
import Button from '../molecules/Button.ui'
import { Heading_5 } from '../molecules/Headings.us'
type NavStyledProps = {
  height?: string
}
const NavStyled = styled.nav<NavStyledProps>`
  height: ${({ height }) => (height ? height : 'min-content')};
  width: 100%;
  display: flex;
  justify-content: flex-start;
  padding: ${Spacing._6} 0;
`
const Nav = ({ height }: NavStyledProps) => {
  return (
    <NavStyled height={height}>
      <Button border="right" variant="transparent" height='min-content' padding={`0 ${Spacing._4} 0 ${Spacing._2}`}>
        <Heading_5 text="Home" size={Spacing._4}/>
      </Button>
      <Button border="right" variant="transparent" height='min-content' padding={`0 ${Spacing._4}`}>
        <Heading_5 text="Terms and Conditions" size={Spacing._4}/>
      </Button>
      <Button border="right" variant="transparent" height='min-content' padding={`0 ${Spacing._4}`}>
        <Heading_5 text="Privacy Policy" size={Spacing._4}/>
      </Button>
      <Button border="right" variant="transparent" height='min-content' padding={`0 ${Spacing._4}`}>
        <Heading_5 text="Collection Statement" size={Spacing._4}/>
      </Button>
      <Button border="right" variant="transparent" height='min-content' padding={`0 ${Spacing._4}`}>
        <Heading_5 text="Help" size={Spacing._4}/>
      </Button>
      <Button height='min-content' variant="transparent" padding={`0 ${Spacing._4}`}>
        <Heading_5 text="Manage Acount" size={Spacing._4}/>
      </Button>
    </NavStyled>
  )
}
export default Nav
