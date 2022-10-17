import React from "react";
import { Button, Label, Input, Form, Col } from "reactstrap";

const Search = (props) => {
  return (
    // <div className="input-group mb-3 mt-4 weather">
    //     <div>
    //     <Label for="city" sm={12}>City name</Label>
    //     <Input type="city" name="city" label="City" placeholder="Enter a City." className="border-none" value={props.value} onChange={props.onChange}  />
    //     </div>
    //     <div>
    //     <Button className="btn" type="button" onClick={props.onClick}> Search </Button>
    //     </div>

    <div className="center">
      <Form model="city">
        <Col sm={12}>
          <Label for="City" className="form-label">
            {" "}
            City{" "}
          </Label>
        </Col>
        <div className="input-group mb-3">
          <Col>
            <Input
              type="text"
              className="form-control"
              placeholder="Enter the City"
              aria-label="city"
              aria-describedby="cityname"
              onChange={props.onChange}
            />
          </Col>
          <Button
            className="btn btn-secondary"
            type="button"
            id="cityname"
            onClick={props.onClick}
          >
            {" "}
            search{" "}
          </Button>
          <Button
            className="btn btn-primary"
            type="button"
            id="clear"
            onClick={props.onClick}
          >
            {" "}
            Clear{" "}
          </Button>
        </div>
      </Form>
    </div>
  );
};
export default Search;
