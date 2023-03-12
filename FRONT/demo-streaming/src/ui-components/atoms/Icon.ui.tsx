import styled from 'styled-components'
type IconStyledProps = {
  src: string
  alt: string
  variant?: string
  width?: string
  padding?: string
}
const IconStyled = styled.img<IconStyledProps>`
  filter: ${({ variant }) =>
    variant == 'inverted' ? 'invert(100%)' : 'invert(0%)'};
  width: ${({ width }) => (width ? width : '44px')};
  padding: ${({ padding }) => (padding ? padding : '0')};
`
const Icon = ({ src, alt, variant, width, padding }: IconStyledProps) => {
  return (
    <IconStyled
      src={src}
      padding={padding}
      alt={alt}
      variant={variant}
      width={width}
    ></IconStyled>
  )
}
export default Icon
