import styled from 'styled-components'
import Palette from '../../styles/Palette'
import Spacing from '../../styles/Spacing'
type MainStyledProps = {
  height?: string
  children?: JSX.Element
}
const MainStyled = styled.main<MainStyledProps>`
  height: 63.35vh;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  background-color: ${Palette.main};
  padding: ${Spacing._2} ${Spacing._10};
`
const Main = ({ height, children }: MainStyledProps) => {
  return <MainStyled height={height}>{children}</MainStyled>
}
export default Main
