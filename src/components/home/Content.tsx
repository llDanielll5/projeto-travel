import React from "react";
import { Box, styled, Typography } from "@mui/material";
import { COLORS } from "@/utils/contants/colors";

const Content = () => {
  return (
    <Container>
      <Typography
        fontWeight={"bold"}
        fontSize={"1.5rem"}
        style={{ color: "white" }}
      >
        Book With Us!
      </Typography>
      <MegaText>
        Explore the Beauty of <span className="yellow">Jounery</span>
      </MegaText>
      <BlackText>
        We live in a world that is full of beauty, charm and adventure. There is
        no end to the adventures we can have if only we seek them with our eyes
        open
      </BlackText>

      <TabsContainer></TabsContainer>
    </Container>
  );
};

const Container = styled(Box)`
  padding: 7rem;
  width: 70%;
`;
const MegaText = styled(Typography)`
  margin: 0.625rem 0 2.125rem 0;
  font-size: 4.5rem;
  font-weight: 700;
  color: white;
  .yellow {
    color: ${COLORS.secondary};
  }
`;
const BlackText = styled(Typography)`
  color: #131313;
  font-weight: 600;
  margin-bottom: 3.75rem;
`;

const TabsContainer = styled(Box)`
  width: 100%;
`;

export default Content;
