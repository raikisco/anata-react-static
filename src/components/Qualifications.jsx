import React from "react";
import styled from "react-emotion";

//Import core
import { Section, SectionContent } from "./core";

//Import assets
import reiki from "assets/reiki.png";
import firstplace from "assets/firstplace.png";
import certGreen from "assets/cert-green.png";
import certPurp from "assets/cert-purp.png";

const IconRow = styled("div")`
  margin-top: 50px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  @media(max-width: 950px){
    flex-direction: column;
  }
`;
const IconGroup = styled("div")`
  flex: 1;
  display: flex;
  justify-content: space-evenly;
`;
const Qualification = styled("div")`
  display: inline;
  padding: 15px;
  max-width: 150px;
  flex:1;
`;
const Icon = styled("img")`
  width: 150px;
  @media (max-width: 550px){
    width:100px;
  }
  display: block;
  margin: auto;
`;
const BoldHeading = styled('h4')`
  font-weight: 800;
`

export default function ProfileSection(props) {
  return (
    <Section green>
      <SectionContent>
        <h2>Qualifications</h2>
        <IconRow>
          <IconGroup>
            <Qualification>
              <Icon src={certPurp} />
              <BoldHeading>Spa Therapy Diploma</BoldHeading>
              <p>Vancouver School of Bodywork & Massage</p>
            </Qualification>
            <Qualification>
              <Icon src={reiki} />
              <BoldHeading>Reiki Certified</BoldHeading>
              <br/>
              <p>Level 1 Certification</p>
            </Qualification>
          </IconGroup>
          <IconGroup>
            <Qualification>
              <Icon src={certGreen} />
              <BoldHeading>Licensed & Insured</BoldHeading>
              <p>Holistic Bodywork & Massage</p>
            </Qualification>
            <Qualification>
              <Icon src={firstplace} />
              <BoldHeading>700+ Hours Experience</BoldHeading>
              <p>Experience in Spa & Therapy</p>
            </Qualification>
          </IconGroup>
        </IconRow>
      </SectionContent>
    </Section>
  );
}
