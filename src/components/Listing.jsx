import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  CardLink
} from "reactstrap";
import "../App.css";

const Listing = ({ img, alt, title, subtitle, url }) => {
  return (
    <Card>
      <CardImg top width="100%" src={img} alt={alt} />
      <CardBody>
        <div className="btn">
            <Button outline color="secondary" className="float-right" href={url}>
                See more
            </Button>
        </div>
        <CardTitle tag='h5'>{title}</CardTitle>
        <CardSubtitle tag='h6'>{subtitle}</CardSubtitle>
      </CardBody>
    </Card>
  );
};
export default Listing;
