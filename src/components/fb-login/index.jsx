import * as React from  "react";

const Container = () => {
    const fbLoginStatusResponse = React.useCallback(res => {
        console.log(res)
    }, [])

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
            <div 
                className="fb-login-button" 
                data-width="" 
                data-size="large" 
                data-button-type="continue_with" 
                data-layout="default" 
                data-auto-logout-link="false" 
                data-use-continue-as="true">
            </div>
        </div>
    );
};

export default Container;