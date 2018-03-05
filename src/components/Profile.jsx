import React from "react";
import styled from "react-emotion";

//Import core
import { Section, SectionContent } from "./core";

//Import assets
// import profile from "assets/raiko-profile.jpg";
import profile from "assets/raiko-face.jpg";

const ProfilePic = styled("img")`
  position: relative;
  top: 0%;
  transform: translateY(-50%);
  border-radius: 50%;
  background: url(${profile});
  background-size: cover;
  width: 200px;
  padding-bottom: 200px;
  @media (max-width: 500px) {
    width: 35%;
    padding-bottom: 35%;
  }
`;

const ProfileDesc = styled(SectionContent)`
  margin-top: -100px;
  @media (max-width: 500px) {
    margin-top: -80px;
  }
`;

export default function ProfileSection(props) {
  return (
    <Section>
      <ProfilePic />
      <ProfileDesc>
        <h2>Hi, I'm Raiko.</h2>
        <h5>I am from Estonia.</h5>
        <br/>
        <h5>
          I have extensively travelled different countries and chose to make
          Canada my new home. I did my training and graduated at the Vancouver
          School of Bodywork and Massage.
        </h5>
        <br/>
        <h5>
          I enjoy connecting with people and helping them feel their best.
          Massages are like brain hugs - we all need one from time to time. I
          would love to be part of your wellness and self-care.
        </h5>
      </ProfileDesc>
    </Section>
  );
}
