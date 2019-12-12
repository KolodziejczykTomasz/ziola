import React from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

const ButtonBack = () => (
  <div>
    <Link as={Link} to="/herbs">
      <Button>Powrót</Button>
    </Link>
  </div>
);

export default ButtonBack;
