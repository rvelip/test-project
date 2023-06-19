import { useMsal } from '@azure/msal-react';
import { createContext, useContext, useEffect, useState } from 'react';

interface AuthContextType {
  accessToken: string;
  userRole: string[];
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

//@ts-ignore
export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState<string>('');
  const [userRole, setUserRole] = useState<string[]>([]);

  const { accounts, instance } = useMsal();

  function RequestAccessToken() {
    const request = {
      scopes: ['User.Read'],
      account: accounts[0],
    };

    // Silently acquires an access token which is then attached to a request for Microsoft Graph data
    instance.acquireTokenSilent(request).then((response) => {
        //@ts-ignore
        
        setUserRole(response.idTokenClaims.roles);
        setAccessToken(response.accessToken);
      })
      .catch((_e) => {
        instance.acquireTokenPopup(request).then((response) => {
           setAccessToken(response.accessToken);
       });
      });
  }

  useEffect(() => {
    RequestAccessToken();
  }, []);

  return (
    <>
      {accessToken && (
        <AuthContext.Provider value={{ accessToken, userRole }}>
          {children}
        </AuthContext.Provider>
      )}
      {!accessToken && <></>}
    </>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}