import styled from 'styled-components'
import Palette from '../../styles/Palette'
import Spacing from '../../styles/Spacing'
type AnchorStyledProps = {
  href?: string
  padding?: string
  variant?: string
  radius?: string
  children?: JSX.Element[] | JSX.Element
}
const AnchorStyled = styled.a<AnchorStyledProps>`
  background-color: ${({ variant }) =>
    variant == 'solid' ? Palette.anchor_background : Palette.transparent};
  padding: ${({ padding }) =>
    padding ? padding : `${Spacing._1} ${Spacing._2}`};
  border: ${({ variant }) =>
    variant == 'solid'
      ? `1px solid ${Palette.font._white}`
      : Palette.transparent};
  border-radius: ${({ radius }) => (radius ? Spacing._1 : 'none')};
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    filter: brightness(120%);
  }
`
const Anchor = ({
  href,
  padding,
  variant,
  children,
  radius,
}: AnchorStyledProps) => {
  return (
    <AnchorStyled
      href={href}
      radius={radius}
      padding={padding}
      variant={variant}
    >
      {children}
    </AnchorStyled>
  )
}
export default Anchor
