import React from "react";
import { useHistory } from "react-router-dom";
import { Auth0Provider} from "@auth0/auth0-react";

export default function Auth0ProviderContext({ children }) {
  const history = useHistory();
  const onRedirectCallback = (appState) => {
    history.push(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN} 
      clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
      redirectUri={process.env.REACT_APP_REDIRECT_URI}
      onRedirectCallback={onRedirectCallback}
      audience={process.env.REACT_APP_AUTH0_AUDIENCE}
      scope="openid email profile">
      {children}
    </Auth0Provider>
  );
};
