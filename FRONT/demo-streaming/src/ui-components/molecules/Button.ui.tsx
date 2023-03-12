import styled from 'styled-components'
import Spacing from '../../styles/Spacing'
import Palette from '../../styles/Palette'
type ButtonStyledProps = {
  action?: string
  border?: string
  variant?: string
  width?: string
  height?: string
  padding?: string
  children?: JSX.Element
}
const ButtonStyled = styled.button<ButtonStyledProps>`
  width: ${({ width }) => (width ? width : 'max-content')};
  height: ${({ height }) => (height ? height : '100%')};
  padding: ${({ padding }) =>
    padding ? padding : `${Spacing._2} ${Spacing._4}`};
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: ${({ border }) =>
    border == 'right' ? `2px solid ${Palette.font._white}` : 'none'};
  background-color: ${({ variant }) =>
    variant == 'solid' ? Palette.header.grey : Palette.transparent};
  &:hover {
    filter: ${({ variant }) =>
      variant == 'transparent' ? 'brightness(102%)' : 'brightness(98%)'};
  }
  &:active {
    filter: ${({ variant }) =>
      variant == 'solid' ? 'brightness(105%)' : 'brightness(96%)'};
    transform: ${({ variant }) =>
      variant == 'solid' ? 'scale(98%)' : 'scaleX(105%)'};
  }
`
const Button = ({
  action,
  border,
  variant,
  width,
  height,
  padding,
  children,
}: ButtonStyledProps) => {
  return (
    <ButtonStyled
      action={action}
      border={border}
      variant={variant}
      width={width}
      height={height}
      padding={padding}
    >
      {children}
    </ButtonStyled>
  )
}
export default Button
