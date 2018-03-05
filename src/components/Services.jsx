import React from "react";
import styled from "react-emotion";

//Import core
import { Section, SectionContent, Button } from "./core";

//Import assets
import swedish from "assets/services/swedish.jpg";
import deeptissue from "assets/services/deeptissue.jpg";
import shiatsu from "assets/services/shiatsu.jpg";
import aromatherapy from "assets/services/aromatherapy.jpg";
import reflexology from "assets/services/reflexology.jpg";
import integrated from "assets/services/integrated.jpg";

const Content = styled(SectionContent)`
  max-width: 1100px;
`;

const ServiceWrapper = styled("div")`
  padding: 20px 0 20px 0;
`;
const Img = styled("img")`
  display: inline-block;
  background: green;
  width: 180px;
  height: 180px;
  @media (max-width: 750px) {
    display: none;
  }
`;
const Service = styled("div")`
  display: inline-flex;
  flex-direction: column;
  vertical-align: top;
  text-align: left;
  margin-left: 20px;
  width: calc(100% - 200px - 20px);
  position: relative;
  height: 180px;
  justify-content: space-between;
  @media (max-width: 750px) {
    width: 100%;
    height: auto;
    text-align: center;
    margin-left: 0px;
  }
`;

const ServiceTitle = styled("h3")`
  font-weight: 500;
  margin: 0;
`;

const ServiceDesc = styled("p")`
  margin: 5px 0 5px 0;
`;

const BookingSection = styled("div")`
  position: relative;
  bottom: 0;
`;

export default function Services(props) {
  return (
    <Section id='services'>
      <Content>
        <h2>Services Offered</h2>
        <h5>
          All services are offered in the comfort of your own home. We bring all
          the equipment, techniques and knowledge to help you relax and heal -
          without you even leaving your home.
        </h5>
        <br />
        <ServiceWrapper>
          <Img src={swedish} />
          <Service>
            <div>
              <ServiceTitle>Traditional Swedish Massage</ServiceTitle>
              <ServiceDesc>
                The basic techniques to this are: effleurage, petrissage,
                friction and tapotement. These movements warm up the muscle
                tissue releasing and breaking up the tension. This releaves
                stress and improves lymph and blood circulation, promotes deeper
                breathing, increases and promotes joint flexibility and mental
                awareness.
              </ServiceDesc>
            </div>
            <BookingSection>
              <h4>
                Book Now <i>(Taxes Included)</i>
              </h4>
              <a
                href={
                  "https://calendly.com/anatamassage/swedish-massage-60-min"
                }
              >
                <Button small color="grey">
                  60 min -- $100
                </Button>
              </a>{" "}
              <a
                href={
                  "https://calendly.com/anatamassage/swedish-massage-90-min"
                }
              >
                <Button small color="grey">
                  90 min -- $130
                </Button>
              </a>
            </BookingSection>
          </Service>
        </ServiceWrapper>
        <ServiceWrapper>
          <Img src={deeptissue} />
          <Service>
            <div>
              <ServiceTitle>Deep Tissue Massage</ServiceTitle>
              <ServiceDesc>
                A muscle-specific modality that involes slow strokes and direct
                pressure. It's highly effective for releasing chronic pain and
                stress in muscles that are over-used or have had past injuries.
              </ServiceDesc>
            </div>
            <BookingSection>
              <h4>
                Book Now <i>(Taxes Included)</i>
              </h4>
              <a
                href={
                  "https://calendly.com/anatamassage/deep-tissue-massage-60-min"
                }
              >
                <Button small color="grey">
                  60 min -- $110
                </Button>
              </a>{" "}
              <a
                href={
                  "https://calendly.com/anatamassage/deep-tissue-massage-90-min"
                }
              >
                <Button small color="grey">
                  90 min -- $140
                </Button>
              </a>
            </BookingSection>
          </Service>
        </ServiceWrapper>
        <ServiceWrapper>
          <Img src={shiatsu} />
          <Service>
            <div>
              <ServiceTitle>Shiatsu Massage</ServiceTitle>
              <ServiceDesc>
                Shiatsu in Japanese means finger pressure - precise, comfortable
                pressure applied to all parts of the body effectively balancing
                body and mind triggering our own natural healing power.
              </ServiceDesc>
            </div>
            <BookingSection>
              <h4>
                Book Now <i>(Taxes Included)</i>
              </h4>
              <a
                href={
                  "https://calendly.com/anatamassage/shiatsu-massage-60-min"
                }
              >
              <Button small color="grey">
                60 min -- $100
              </Button></a>{" "}
              <a
                href={
                  "https://calendly.com/anatamassage/shiatsu-massage-90-min"
                }
              >
              <Button small color="grey">
                90 min -- $130
              </Button></a>
            </BookingSection>
          </Service>
        </ServiceWrapper>
        <ServiceWrapper>
          <Img src={aromatherapy} />
          <Service>
            <div>
              <ServiceTitle>Aromatherapy</ServiceTitle>
              <ServiceDesc>
                Aromatherapy is the practice of using essential plant oils for
                healing body, mind and spirit.
              </ServiceDesc>
            </div>
            <BookingSection>
              <h4>
                Book Now <i>(Taxes Included)</i>
              </h4>
              <a
                href={
                  "https://calendly.com/anatamassage/aromatherapy-60-min"
                }
              >
              <Button small color="grey">
                60 min -- $115
              </Button></a>{" "}
              <a
                href={
                  "https://calendly.com/anatamassage/aromatherapy-90-min"
                }
              >
              <Button small color="grey">
                90 min -- $150
              </Button>
            </a>
            </BookingSection>
          </Service>
        </ServiceWrapper>
        <ServiceWrapper>
          <Img src={reflexology} />
          <Service>
            <div>
              <ServiceTitle>Reflexology Foot Massage</ServiceTitle>
              <ServiceDesc>
                This holistic healing therapy works on the principle that each
                body part is represented on the feet and hands of an individual.
                The foot acts as a map of the entire body - when the areas are
                pressed, they simulate the flow of energy and release blockages.
              </ServiceDesc>
            </div>
            <BookingSection>
              <h4>
                Book Now <i>(Taxes Included)</i>
              </h4>
              <a
                href={
                  "https://calendly.com/anatamassage/reflexology-foot-massage-60-min"
                }
              >
              <Button small color="grey">
                60 min -- $100
              </Button></a>{" "}
              <a
                href={
                  "https://calendly.com/anatamassage/reflexology-foot-massage-90-min"
                }
              >
              <Button small color="grey">
                90 min -- $140
              </Button>
            </a>
            </BookingSection>
          </Service>
        </ServiceWrapper>
        <ServiceWrapper>
          <Img src={integrated} />
          <Service>
            <div>
              <ServiceTitle>
                Integrated Holistic Whole Body Massage
              </ServiceTitle>
              <ServiceDesc>
                This treatment combines techniques from many different massage
                styles and traditions as appropriate to give you a truly
                individual treatment that meets your physical and emotional
                needs on the day.
              </ServiceDesc>
            </div>
            <BookingSection>
              <h4>
                Book Now <i>(Taxes Included)</i>
              </h4>
              <a
                href={
                  "https://calendly.com/anatamassage/integrated-whole-body-massage-60-min"
                }
              >
              <Button small color="grey">
                60 min -- $130
              </Button></a>{" "}
              <a
                href={
                  "https://calendly.com/anatamassage/integrated-whole-body-massage-90-min"
                }
              >
              <Button small color="grey">
                90 min -- $170
              </Button>
            </a>
            </BookingSection>
          </Service>
        </ServiceWrapper>
      </Content>
    </Section>
  );
}
