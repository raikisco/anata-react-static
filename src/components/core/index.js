import styled from "react-emotion";

export const Section = styled("div")`
  position: relative;
  background-color: ${props => (props.green ? "#f4ffc5" : "white")};
  min-height: 50vh;
  text-align: center;
  color: grey;
`;
export const SectionContent = styled("div")`
  max-width: 800px;
  padding: 30px;
  margin: auto;
`;

export const Button = styled("button")`
  cursor: pointer;
  color: ${props=>props.color || 'white'};
  border: 2px solid ${props=>props.color || 'white'};
  background-color: rgba(0, 171, 0, 0);
  border-radius: ${props=>props.small ? '5px' : '10px'};
  padding: ${props=>props.small ? '5px 10px 5px 10px' :'10px 20px 10px 20px'};
  margin: ${props=>!props.small && '0px 5px'};
  font-size: ${props=>props.small ? '1em' : '1.7em'};
  min-width: ${props=>(props.small ? '120px' : '230px')};
  @media (max-width: 750px) {
    font-size: 1.2em;
    min-width: 180px;
    margin: 2px;
  }
  @media (max-width: 500px) {
    font-size: 1.0em;
    min-width: 160px;
    margin: 2px;
  }
  &:hover {
    background-color: rgba(0, 171, 0, 0.2);
  }
  &:active {
    background-color: rgba(0, 171, 0, 0.4);
  }
  transition: all 0.3s;
`;
