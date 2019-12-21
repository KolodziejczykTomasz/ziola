import React from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

const ButtonBackFlat = () => (
    <div>
        <Link as={Link} to="/flat">
            <Button>Powrót</Button>
        </Link>
    </div>
);

export default ButtonBackFlat;