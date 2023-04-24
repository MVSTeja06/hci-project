import { useSelector } from 'react-redux';

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import logo from 'assets/images/logo.svg';
// routing
import Routes from 'routes';

// defaultTheme
import themes from 'themes';

// project imports
import NavigationScroll from 'layout/NavigationScroll';

// ==============================|| APP ||============================== //
import { Widget, addResponseMessage } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';
import { useEffect } from 'react';
import Logo from 'ui-component/Logo';

const App = () => {
    const customization = useSelector((state) => state.customization);

    useEffect(() => {
        addResponseMessage('Welcome to this **awesome** chat!');
    }, []);

    const handleNewUserMessage = (newMessage) => {
        console.log(`New message incoming! ${newMessage}`);
        // Now send the message throught the backend API
    };
    const userAuth = localStorage.getItem('dashboard');
    let isAdmin = userAuth == 'admin';
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={themes(customization)}>
                <CssBaseline />
                <NavigationScroll>
                    <Routes />
                    {!isAdmin && (
                        <Widget
                            handleNewUserMessage={handleNewUserMessage}
                            profileAvatar={logo}
                            title="Customer support"
                            subtitle="Fruit fresh center"
                        />
                    )}
                </NavigationScroll>
            </ThemeProvider>
        </StyledEngineProvider>
    );
};

export default App;
