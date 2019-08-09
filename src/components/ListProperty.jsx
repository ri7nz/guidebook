import React from "react";
import { array } from "prop-types";
import { Col, Row, Div, Text, Label, Image } from "atomize";

export default function CheckboxList({ data, onClick }) {
  const renderItem = (item, index) => (
    <Col
      size={{ md: 3, s: 6 }}
      key={index}
      onClick={onClick.bind(CheckboxList, item)}
    >
      <Div p=".5rem" m=".5rem" shadow="3">
        <Image src="https://www.fillmurray.com/640/360" />
        <Text tag="h1" color="black">
          {item.name}
        </Text>
        <Label color="black">{item.address}</Label>
      </Div>
    </Col>
  );
  return (
    <Row data-testid="listProperty" p={{ xs: ".5rem", md: "1rem" }}>
      {data.map(renderItem)}
    </Row>
  );
}

CheckboxList.defaultProps = {
  onClick: Function
};
CheckboxList.propTypes = {
  data: array.isRequired
};