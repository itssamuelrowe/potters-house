"use client";

import styles from "./page.module.css";
import {
  AppBar,
  CssBaseline,
  Toolbar,
  Typography,
  keyframes,
  styled,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

const Content = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 200px;

  height: calc(100vh - 96px);
  row-gap: ${({ theme }) => theme.spacing(4)};

  ${({ theme }) => `
  ${theme.breakpoints.down("sm")}{
      padding: 16px;
      align-items: center;
  }
  `}
`;

const StyledAppBar = styled(AppBar)`
  background: transparent;
`;

const StyledToolbar = styled(Toolbar)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Logo = styled(Typography)`
  font-size: 30px;
  font-weight: 800;

  text-decoration: underline;
  text-underline-offset: 16px;

  ${({ theme }) => `
  ${theme.breakpoints.down("sm")}{
      font-size: 20px;
      text-underline-offset: 8px;
  }
  `}
`;

const Title = styled(Typography)`
  font-size: 40px;
  font-weight: 800;
  max-width: 600px;
  line-height: 46px;
  color: white;

  ${({ theme }) => `
  ${theme.breakpoints.down("sm")}{
      font-size: 30px;
      max-width: 100%;
      line-height: 36px;
      text-align: center;

      margin-top: ${theme.spacing(10)};
  }
  `}
`;

const VerseText = styled(Typography)`
  font-size: 20px;
  color: white;
  font-weight: 500;
  line-height: 32px;
  opacity: 0.8;
  max-width: 500px;

  ${({ theme }) => `
  ${theme.breakpoints.down("sm")}{
      font-size: 18px;
      font-weight: 500;
      line-height: 24px;

      text-align: center;
      opacity: 0.9;

  }
  `}
`;

const BounceAnimation = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
`;

const StyledExpandMore = styled(ExpandMore)`
  animation: ${BounceAnimation} 2s infinite;
  color: white;
  font-size: 40px;
`;

const Leader = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  column-gap: ${({ theme }) => theme.spacing(10)};

  background-color: #f5f5f5;

  ${({ theme }) => `
  ${theme.breakpoints.down("sm")}{
      flex-direction: column;
      column-gap: ${theme.spacing(2)};

      padding: ${theme.spacing(8, 4)};
  }
  `}
`;

const LeaderImage = styled("img")`
  width: auto;
  height: 400px;
  border-radius: 50%;

  box-shadow: -30px 30px #e5e5e5;

  ${({ theme }) => `
  ${theme.breakpoints.down("sm")}{
      height: 200px;
      box-shadow: -10px 10px #e5e5e5;
  }
  `}
`;

const MemberItem = styled("div")`
  display: flex;
  flex-direction: row;
  column-gap: ${({ theme }) => theme.spacing(8)};

  ${({ theme }) => `
  ${theme.breakpoints.down("sm")}{
      flex-direction: column;
      row-gap: ${theme.spacing(8)};
  }
  `}
`;

const LeaderTexts = styled("div")`
  display: flex;
  flex-direction: column;
  row-gap: ${({ theme }) => theme.spacing(2)};
`;

const LeaderTitle = styled(Typography)`
  font-size: 30px;
  color: ${({ theme }) => theme.palette.text.primary};
  font-weight: 800;
  line-height: 50px;

  ${({ theme }) => `
  ${theme.breakpoints.down("sm")}{
    text-align: center;  
    font-size: 24px;
    line-height: 30px;
    margin-top: ${theme.spacing(4)};
  }
  `}
`;

const MemberContent = styled("div")`
  display: flex;
  flex-direction: column;
  row-gap: ${({ theme }) => theme.spacing(4)};

  margin-top: ${({ theme }) => theme.spacing(4)};
`;

const LeaderDescriptions = styled("div")`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
`;

const LeaderDescription = styled(Typography)`
  font-size: 20px;
  font-weight: 500;
  line-height: 34px;
  color: #748182;
  max-width: 600px;

  ${({ theme }) => `
  ${theme.breakpoints.down("sm")}{
    font-size: 18px;
  }
  `}
`;

const Members = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  column-gap: ${({ theme }) => theme.spacing(10)};

  background-color: white;

  padding: ${({ theme }) => theme.spacing(8, 4)};

  ${({ theme }) => `
  ${theme.breakpoints.down("sm")}{
      flex-direction: column;
      column-gap: ${theme.spacing(2)};

      padding: ${theme.spacing(8, 4)};
  }
  `}
`;

const MembersTitle = styled(Typography)`
  font-size: 30px;
  color: ${({ theme }) => theme.palette.text.primary};
  font-weight: 800;
  line-height: 40px;
  text-align: center;
  max-width: 800px;

  ${({ theme }) => `
  ${theme.breakpoints.down("sm")}{
    text-align: center;  
    font-size: 24px;
    line-height: 30px;
    margin-top: ${theme.spacing(4)};
  }
  `}
`;
const MemberImage = styled("img")`
  width: auto;
  height: 400px;
  box-shadow: -20px 20px #e5e5e5;

  ${({ theme }) => `
  ${theme.breakpoints.down("sm")}{
      height: 200px;

      width: 100%;
      height: auto;
  }
  `}
`;

const MemberDescription = styled(Typography)`
  font-size: 20px;
  font-weight: 500;
  line-height: 34px;
  color: #748182;
  max-width: 600px;

  ${({ theme }) => `
  ${theme.breakpoints.down("sm")}{
    font-size: 18px;
  }
  `}
`;

const Footer = styled("div")`
  text-align: center;
  background-color: #f5f5f5;
  color: ${({ theme }) => theme.palette.text.secondary};
  padding: ${({ theme }) => theme.spacing(4, 2)};
`;

const LoaderComponent: React.FC = () => {
  return (
    <>
      <div className={styles.root}>
        <CssBaseline />
        <div className={styles.loaderWrapper}>
          <div id="loader" className={styles.loader}></div>
        </div>

        <div className={styles.rootParallax}>
          <StyledAppBar elevation={0} position="static">
            <StyledToolbar>
              <Logo>THE POTTER&apos;S HOUSE</Logo>
            </StyledToolbar>
          </StyledAppBar>
          <Content>
            <Title>Come and experience the warmth of Jesus Christ</Title>

            <VerseText>
              &quot;I am the way and the truth and the life. No one comes to the
              Father except through me.&quot; — John 14:6
            </VerseText>
            <StyledExpandMore />
          </Content>
        </div>
      </div>
      <Leader>
        <LeaderImage src="leader.jpeg" />
        <LeaderTexts>
          <LeaderTitle>THE HEART OF OUR CONGREGATION</LeaderTitle>
          <LeaderDescriptions>
            <LeaderDescription>
              Meet our cherished leader, Pastor Arun Matthew and his wife, Manju
              Matthew. They stand as beacons of love and guidance.
            </LeaderDescription>
            <LeaderDescription>
              Pastor Arun, known for his warmth and understanding, welcomes all
              into our spiritual family, inspiring us with his teachings.
              Alongside him, Sister Manju nurtures a sense of togetherness,
              fostering unity within our congregation.
            </LeaderDescription>
            <LeaderDescription>
              Together, Pastor Arun and Sister Manju extend their care beyond
              our church walls, working tirelessly for a positive change.
            </LeaderDescription>
          </LeaderDescriptions>
        </LeaderTexts>
      </Leader>
      <Members>
        <MembersTitle>
          OUR CHURCH FAMILY:
          <br />
          DIVERSE, UNITED, AND FULL OF LOVE
        </MembersTitle>
        <MemberContent>
          <MemberItem>
            <MemberImage src="collage-1.jpeg" />
            <MemberDescription>
              Our congregation is made up of wonderful people from all walks of
              life who come together as a family in our church. Each member
              brings their own unique experiences, stories, and backgrounds, yet
              we are united by our faith and shared values.
              <br />
              <br />
              Together, we worship, learn, and grow spiritually, fostering a
              community where everyone is welcomed, respected, and cherished. We
              support each other through joys and challenges, offering
              friendship, kindness, and a helping hand whenever needed.
            </MemberDescription>
          </MemberItem>

          <MemberItem>
            <MemberImage src="collage-3.jpeg" />
            <MemberImage src="collage-4.jpeg" />
            <MemberImage src="collage-2.jpeg" />
          </MemberItem>
        </MemberContent>
      </Members>
      <Footer>
        The Potter&apos;s House Christian Church
        <br />
        Kammanahalli, Bengaluru, India
        <br />
        <br />© 2024 Copyright. All rights reserved.
      </Footer>
    </>
  );
};

export default LoaderComponent;
