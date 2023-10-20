import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { NavBar } from 'components/NavBar/NavBar';
import { Page, Header, Container, Footer } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <Page>
        <Header>
          <Container>
            <NavBar />
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
          <Container>©2023 Click and drive. All rights reserved.</Container>
        </Footer>
      </Page>

      <ToastContainer autoClose={3000} position="bottom-right" />
    </>
  );
};
