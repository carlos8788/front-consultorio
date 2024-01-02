import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

interface LayoutProps {
    children: React.ReactNode; // Explicitly typing the children prop
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Header />
            <Main>{children}</Main>
            <Footer />
        </>
    );
};

export default Layout;
