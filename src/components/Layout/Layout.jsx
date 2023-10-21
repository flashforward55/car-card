import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { ScaleLoader } from 'react-spinners';
import { NavBar } from 'components/NavBar/NavBar';
import { Page, Header, Container, SectionWrapper, Footer } from './Layout.styled';
import { Overlay } from 'components/Shared/Modal/Modal.styled';
import { theme } from 'styles';

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
            <SectionWrapper>
              <Suspense
                fallback={
                  <Overlay>
                    <ScaleLoader color={theme.colors.bgAccent} size={20} />
                  </Overlay>
                }
              >
                <Outlet />
              </Suspense>
            </SectionWrapper>
          </Container>
        </main>
        <Footer>
          <Container>©2023 Choose and Ride. All rights reserved.</Container>
        </Footer>
      </Page>
      <Toaster />
    </>
  );
};
