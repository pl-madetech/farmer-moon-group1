import React from "react";
import { Redirect, Route } from "react-router-dom";
import useConfig from "../components/useConfig";

// const PrivateRoute = ({ component: Component, logged, setLogged, ...rest }) => {
//   return (
//     <Route
//       {...rest}
//       render={(props) => {
//         if (!logged) {
//           return (
//             <Redirect
//               to={{
//                 pathname: "/dev",
//                 state: { flashInfo: "Please log in to continue." },
//               }}
//             />
//           );
//         } else {
//           return <Component {...props} logged={logged} setLogged={setLogged} />;
//         }
//       }}
//     />
//   );
// };

const PrivateRoute = ({ children, ...rest }) => {
  const config = useConfig();
  
  return (
    <Route {...rest} render={({ location }) => {

      
      alert(config.app.IS_AUTHENTICATED);

      return config.app.IS_AUTHENTICATED === "true"
        ? children
        : <Redirect to={{
            pathname: '/dev',
            state: { from: location }
          }}
 />
    }} />
  )
}

export default PrivateRoute;
