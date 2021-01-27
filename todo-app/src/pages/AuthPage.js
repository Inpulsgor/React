import React, { useState } from "react";
// Layout
import { AppLayout, MainLayout, FooterLayout } from "../components/Layout";
// Components
import { SignIn, SignUp, Footer } from "../components";

const AuthPage = () => {
  const [signInType, setSignInType] = useState(false);

  return (
    <AppLayout>
      <MainLayout>
        {signInType ? (
          <SignUp signInType={signInType} setSignInType={setSignInType} />
        ) : (
          <SignIn signInType={signInType} setSignInType={setSignInType} />
        )}
      </MainLayout>

      <FooterLayout>
        <Footer />
      </FooterLayout>
    </AppLayout>
  );
};

export default AuthPage;
