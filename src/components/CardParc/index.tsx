import { Container } from "./styles";

type BoxProps = {
  children: React.ReactNode; // 👈️ define children prop
};

const CardParc = (props: BoxProps) => {
  return <Container>{props.children}</Container>;
};
export { CardParc };
