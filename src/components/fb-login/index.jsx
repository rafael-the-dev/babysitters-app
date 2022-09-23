import * as React from  "react";
import Button from "@mui/material/Button";
import jwtDecode from "jwt-decode";

import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';

const Container = () => {
    const fbLoginStatusResponse = React.useCallback(res => {
        console.log(res)
    }, []);

    const clickHandler = () => {
        FB.login(function(res) {
            if (res.status === 'connected') {
              // Logged into your webpage and Facebook.
              const { signedRequest } = res.authResponse;
              const user = jwtDecode(signedRequest);
              console.log(user);
              console.log(res)
            } else {
              // The person is not logged into your webpage or we are unable to tell. 
            }
          });
    };

    React.useEffect(() => {
        /* global FB */
        FB.init({
            appId            : process.env.FB_APP_ID,
            autoLogAppEvents : true,
            xfbml            : true,
            version          : 'v15.0'
        });

        FB.getLoginStatus(fbLoginStatusResponse);
    }, [ fbLoginStatusResponse ]);

    return (
        <div className="mt-3">
            <Button
                className="normal-case py-2 px-8 text-white"
                onClick={clickHandler}
                startIcon={<FacebookOutlinedIcon />}
                variant="contained">
                Fazer login com facebook
            </Button>
        </div>
    );
};

export default Container;