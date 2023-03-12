import styled from 'styled-components'
import Spacing from '../../styles/Spacing'
import Palette from '../../styles/Palette'
type DivStyledProps = {
  display?: string
  variant?: string
  width?: string
  gap?: string
  height?: string
  padding?: string
  children?: JSX.Element[] | JSX.Element
}
const DivStyled = styled.div<DivStyledProps>`
  height: ${({ height }) => (height ? height : 'max-content')};
  gap: ${({ gap }) => (gap ? gap : '0px')};
  background-color: ${({ variant }) =>
    variant == 'header1'
      ? Palette.header.blue
      : variant == 'header2'
      ? Palette.header.grey
      : Palette.transparent};
  background: ${({ variant }) =>
    variant == 'header1'
      ? Palette.header.blue_gradient
      : variant == 'header2'
      ? Palette.header.grey
      : 'none'};
  display: flex;
  justify-content: ${({ display }) => (display ? display : 'space-between')};
  align-items: center;
  padding: ${({ padding }) =>
    padding ? padding : `${Spacing.main_padding}`};
  box-shadow: ${({ variant }) =>
    variant == 'header1'
      ? '0px 30px 10px 3px #000000;' :
      variant == 'header2' ? '0px 13px 10px 3px rgba(0,0,0,0.29);'
      : 'none'};
`
const DivCustom = ({
  display,
  variant,
  width,
  gap,
  height,
  padding,
  children,
}: DivStyledProps) => {
  return (
    <DivStyled
      padding={padding}
      height={height}
      gap={gap}
      display={display}
      variant={variant}
      width={width}
    >
      {children}
    </DivStyled>
  )
}
export default DivCustom
