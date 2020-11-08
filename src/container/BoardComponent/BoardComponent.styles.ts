import styled from "styled-components";

export const Wrapper = styled.div`
  font-family: "Open Sans", sans-serif;
  display: flex;
  flex: 1;
  flex-direction: column;
  position: relative,
  top: 100px,
  left: calc(50% - 500px),
  width: 1000px,
  background: #ffffff,
  boxShadow: 0px 1px 1px rgba(0, 0, 0, 0.1),
  borderRadius: 2px,
`;

export const RowWrapper = styled.div`
  display: flex;
  flex-basis: 100%;
  flex-direction: column;
  justify-content: space-between;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Label = styled.span`
  font-weight: 600;
  font-size: 14px;
  color: #607389;
  margin-right: 5px;
`;

export const Value = styled.span`
  font-size: 14px;
  color: #607389;
`;

export const Title = styled.span`
  font-size: 21px;
  color: #607389;
  font-weight: 600;
  align-self: center;
`;

export const boardWrapper = {
  display: "flex",
  justifyContent: "space-around",
  borderRadius: "2px",
  background: "white",
  width: "900px",
  marginLeft: "calc(50% - 425px)",
};
