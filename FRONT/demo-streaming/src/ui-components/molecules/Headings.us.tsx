import styled from 'styled-components'
import Palette from '../../styles/Palette'
import Spacing from '../../styles/Spacing'
type HeadingStyledProps = {
  font?: string
  size?: string
  color?: string
  text?: string
}
const Heading1Styled = styled.h1<HeadingStyledProps>`
  font-family: ${({ font }) => (font ? font : 'Helvetica, Arial, sans-serif')};
  font-size: ${({ size }) => (size ? size : Spacing._5)};
  color: ${({ color }) => (color ? color : Palette.font._white)};
  font-weight: 550;
  
`
export const Heading_1 = ({ font, size, color, text }: HeadingStyledProps) => {
  return (
    <Heading1Styled
      font={font}
      size={size}
      color={color}
      text={text}
    >{text}</Heading1Styled>
  )
}
const Heading2Styled = styled.h2<HeadingStyledProps>`
  font-family: ${({ font }) => (font ? font : 'Helvetica, Arial, sans-serif')};
  font-size: ${({ size }) => (size ? size : Spacing._4)};
  color: ${({ color }) => (color ? color : Palette.font._white)};
  font-weight: 300;
`
export const Heading_2 = ({ font, size, color, text }: HeadingStyledProps) => {
  return (
    <Heading2Styled
      font={font}
      size={size}
      color={color}
      text={text}
    >{text}</Heading2Styled>
  )
}
const Heading3Styled = styled.h3<HeadingStyledProps>`
  font-family: ${({ font }) => (font ? font : 'Helvetica, Arial, sans-serif')};
  font-size: ${({ size }) => (size ? size : Spacing._4)};
  color: ${({ color }) => (color ? color : Palette.font._white)};
  font-weight: 300;
`
export const Heading_3 = ({ font, size, color, text }: HeadingStyledProps) => {
  return (
    <Heading3Styled
      font={font}
      size={size}
      color={color}
      text={text}
    >{text}</Heading3Styled>
  )
}
const Heading4Styled = styled.h4<HeadingStyledProps>`
  font-family: ${({ font }) => (font ? font : 'Helvetica, Arial, sans-serif')};
  font-size: ${({ size }) => (size ? size : Spacing._3)};
  color: ${({ color }) => (color ? color : Palette.font._white)};
  font-weight: 300;
`
export const Heading_4 = ({ font, size, color, text }: HeadingStyledProps) => {
  return (
    <Heading4Styled
      font={font}
      size={size}
      color={color}
      text={text}
    >{text}</Heading4Styled>
  )
}
const Heading5Styled = styled.h5<HeadingStyledProps>`
  font-family: ${({ font }) => (font ? font : 'Helvetica, Arial, sans-serif')};
  font-size: ${({ size }) => (size ? size : Spacing._3)};
  color: ${({ color }) => (color ? color : Palette.font._white)};
  font-weight: 200;
`
export const Heading_5 = ({ font, size, color, text }: HeadingStyledProps) => {
  return (
    <Heading5Styled
      font={font}
      size={size}
      color={color}
      text={text}
    >{text}</Heading5Styled>
  )
}
const Heading6Styled = styled.h6<HeadingStyledProps>`
  font-family: ${({ font }) => (font ? font : 'Helvetica, Arial, sans-serif')};
  font-size: ${({ size }) => (size ? size : Spacing._2)};
  color: ${({ color }) => (color ? color : Palette.font._white)};
  font-weight: 200;
`
export const Heading_6 = ({ font, size, color, text }: HeadingStyledProps) => {
  return (
    <Heading6Styled
      font={font}
      size={size}
      color={color}
      text={text}
    >{text}</Heading6Styled>
  )
}
