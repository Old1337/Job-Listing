import styled from "styled-components";

const HeaderBg = styled.header`
  background-color: hsl(180, 29%, 50%);
  height: 8rem;
  background-image: url("images/bg-header-mobile.svg");

  @media (min-width: 767px) {
    background-image: url("images/bg-header-desktop.svg");
    background-size: cover;
  }
`;
export default function Header() {
  return <HeaderBg />;
}
