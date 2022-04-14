import React from "react";
import { Button, Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div
      style={{ height: "300px" }}
      className="d-flex justify-content-center align-items-center w-100"
    >
      <>
        <Button variant="primary" disabled>
          <Spinner
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          Please Wait...
        </Button>
      </>
    </div>
  );
};

export default Loading;
