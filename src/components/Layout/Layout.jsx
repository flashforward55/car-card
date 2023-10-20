import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Page, Header, Container, Footer } from './Layout.styled';

export const Layout = () => {
    return (
        <Page>
            <Header>
                <Container>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/rental">Rental</NavLink>
                    <NavLink to="/favorite">Favorite</NavLink>
                </Container>
            </Header>
            <main>
                <Container>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Outlet />
                    </Suspense>
                </Container>
            </main>
            <Footer>
                <Container>Footer</Container>
            </Footer>
        </Page>
    );
};
