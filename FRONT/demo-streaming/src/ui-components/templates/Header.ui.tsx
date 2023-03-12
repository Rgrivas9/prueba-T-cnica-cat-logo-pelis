import styled from 'styled-components'
import { usePageContext } from '../../context/page.Context'
import Spacing from '../../styles/Spacing'
import Button from '../molecules/Button.ui'
import DivCustom from '../molecules/DivCustom.ui'
import { Heading_1, Heading_2, Heading_5 } from '../molecules/Headings.us'
type HeaderStyledProps = {
  height?: string
}
const HeaderStyled = styled.header<HeaderStyledProps>`
  height: ${({ height }) => (height ? height : 'min-content')};
  width: 100%;
`
const Header = ({ height }: HeaderStyledProps) => {
  const { page } = usePageContext()
  return (
    <HeaderStyled height={height}>
      <DivCustom variant='header1'>
        <Heading_1 text="DEMO Streaming" size='35px'/>
        <DivCustom padding={`0 ${Spacing._2}`}>
          <Button>
            <Heading_5 text='Log in' size={Spacing._4}/>
          </Button>
          <Button variant={'solid'}>
            <Heading_5 text='Start your free trial' size={Spacing._4}/>
          </Button>
        </DivCustom>
      </DivCustom>
      <DivCustom variant='header2'>
        <Heading_2
        size={Spacing._6}
          text={
            page == 'Home'
              ? 'Popular Titles'
              : page == 'Movies'
              ? 'Popular Movies'
              : 'Popular Series'
          }
        />
      </DivCustom>
    </HeaderStyled>
  )
}
export default Header
