import React from "react";
import { Box, styled, Button, Typography } from "@mui/material";
import Link from "next/link";

const landingMenu = [
  { title: "Home", href: "/" },
  { title: "About", href: "/" },
  { title: "Tour List", href: "/" },
  { title: "Room List", href: "/" },
  { title: "Tour Search", href: "/" },
  { title: "Blog", href: "/" },
];

const Header = () => {
  return (
    <Container>
      <LeftSide>
        <StyledImage src="/images/icon.png" alt="" />
        {landingMenu.map((v, i) => (
          <Link passHref href={v.href}>
            <LinkMenu>{v.title}</LinkMenu>
          </Link>
        ))}
      </LeftSide>
      <RightSide>
        <StyledButton variant="contained" color="white" sx={{ color: "black" }}>
          Signup
        </StyledButton>
        <StyledButton variant="contained" color="primary">
          Login
        </StyledButton>
      </RightSide>
    </Container>
  );
};

const Container = styled(Box)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  column-gap: 1rem;
  padding: 1.85rem 0;
  background-color: transparent;
`;
const LeftSide = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 2.5rem;
`;
const RightSide = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 2rem;
`;
const StyledImage = styled("img")`
  width: 2.5rem;
  height: 2.5rem;
  margin-right: 2rem;
  cursor: pointer;
  transition: 0.3s;
  :hover {
    opacity: 0.8;
  }
`;
const LinkMenu = styled(Typography)`
  cursor: pointer;
  color: white;
  font-size: 1rem;
  transition: 0.3s;
  :hover {
    opacity: 0.8;
  }
`;
const StyledButton = styled(Button)`
  text-transform: capitalize;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  width: 6.56rem;
`;

export default Header;
