import React from "react";
import { useHistory } from "react-router-dom";
import useConfig from "../components/useConfig";
import { RouteProps } from "../Routes/RouteProps";

export default function AuthButton() {
  const history = useHistory();
  const config = useConfig();
  return (
    <p>
      <button className="btn btn-sm btn-outline-secondary"
        onClick={() => {
          config.app.IS_AUTHENTICATED = false;
          history.push(RouteProps.LOGIN_URL);
        }}
      >
        Sign out
      </button>
    </p>
  );
}
