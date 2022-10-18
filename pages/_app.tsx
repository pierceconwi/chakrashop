import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import theme from "../src/sections/theme";
import "../src/sections/theme/styles.css";

const App = ({ Component, pageProps }: AppProps) => {
    return (
    <ChakraProvider theme={theme}>
        <Component { ...pageProps } />
    </ChakraProvider>
    )
};

export default App;