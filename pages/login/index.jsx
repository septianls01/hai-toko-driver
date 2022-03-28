import React, { useEffect, useState } from "react";
import { Container, Grid, makeStyles, Box } from "@material-ui/core";
import { connect } from "react-redux";
import { submitLogin, setIsLogin } from "@src/redux/actions/auth";
import { useRouter } from "next/router";
import Layout from "@components/Layout";
import LoginForm from "./component/LoginForm";
import WelcomeMessage from "./component/WelcomeMessage";
import ResponseDialog from "./component/ResponseDialog";

const style = makeStyles((theme) => ({
  bottomGap: {
    paddingBottom: 25,
    height: "100vh",
  },
}));

const Login = (props) => {
  const { submitLogin, auth, setIsLogin } = props;
  const [openDialog, setOpenDialog] = useState(false);
  const [driverStatus, setDriverStatus] = useState(null);
  const [error, setError] = useState({
    error: false,
    message: "",
  });
  const router = useRouter();
  const classes = style();

  const onSubmitLogin = (payload) => {
    if (payload.username === "" || payload.password === "") {
      setError({ ...error, status: true, message: "Form must be filled" });
      return;
    }
    submitLogin(payload, async (res) => {
      if (!res.error) {
        await setIsLogin(true);
        router.push("/");
      } else {
        setError({
          status: true,
          message: res.message,
        });
      }
    });
  };

  const onChangeForm = () => {
    setError({ ...error, status: false });
  };

  useEffect(() => {
    if (router.pathname === "/login") {
      if (auth.isLogin) {
        router.back();
      }
    }
  }, [router.pathname]);

  if (auth.isLogin) {
    return <Box style={{ backgroundColor: "#ffff" }} />;
  }

  const onCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <Grid container>
      <Layout>
        <Container className={classes.bottomGap}>
          <WelcomeMessage />
          <LoginForm
            auth={auth}
            onChangeForm={onChangeForm}
            onSubmitLogin={onSubmitLogin}
            error={error}
          />
        </Container>
        <ResponseDialog
          isOpen={openDialog}
          onClose={onCloseDialog}
          driverStatus={driverStatus}
        />
      </Layout>
    </Grid>
  );
};

// map local variable to reducer
const mapStoreToProps = (state) => ({
  auth: state.auth,
});

// map dispatch to reducer
const mapDispatchToProps = (dispatch) => ({
  submitLogin: (data, callback) => dispatch(submitLogin(data, callback)),
  setIsLogin: (status) => dispatch(setIsLogin(status)),
});

export default connect(mapStoreToProps, mapDispatchToProps)(Login);
