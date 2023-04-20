import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  FormControlLabel,
  Checkbox,
  Link,
} from "@material-ui/core";
import LinkButton from "./LinkButton";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import LegalPopup from "../Legal/LegalPopup";
import { withTranslation } from "react-i18next";
import { Button as CustomButton } from "../../common/Button";


const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    maxWidth: 400,
    margin: "0 auto",
    padding: theme.spacing(3),
    paddingBottom: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[3],
    backgroundColor: theme.palette.background.paper,
  },
  textField: {
    marginBottom: theme.spacing(2),
  },
  customButton: {
    textTransform: "none",
    fontWeight: 600,
  },
  message: {
    marginTop: theme.spacing(1),
  },
}));

const EmailSignup: React.FC<{ t: any }> = ({ t }) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isLegalPopupVisible, setIsLegalPopupVisible] = useState(false);
  const classes = useStyles();
  const handlePrivacyPolicyClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setIsLegalPopupVisible(true);
  };
  const handleLegalPopupOpen = () => {
    setIsLegalPopupVisible(true);
  };

  const handleLegalPopupClose = () => {
    setIsLegalPopupVisible(false);
  };

  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isChecked) {
      setIsLegalPopupVisible(true);
      return;
    }

    setIsSubmitted(true);

    try {
      await axios.post(
        "https://wydxqjqwk3.execute-api.us-east-1.amazonaws.com/dev/email-signup",
        { email }
      );
      setMessage(
        "A confirmation email has been sent. Please check your inbox."
      );
    } catch (error) {
      setMessage("An error occurred. Please try again later.");
      setIsSubmitted(false);
    }
  };

  return (
    <>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          className={classes.textField}
          label={t("Email Address*")}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={isSubmitted}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
              name="privacyPolicy"
              color="primary"
            />
          }
          label={
            <span>
              <LinkButton onClick={handleLegalPopupOpen}>{t("By joining the waitlist you agree to the Privacy Policy")}</LinkButton>
              <LegalPopup onClose={handleLegalPopupClose} isVisible={isLegalPopupVisible} />
            </span>
          }
        />
      <CustomButton
        color="primary"
        type="submit"
        disabled={isSubmitted}
        className={classes.customButton}
      >
        {t("Join Waitlist")}
      </CustomButton>



        {message && (
          <Typography
            className={classes.message}
            variant="body2"
            color="textSecondary"
          >
            {message}
          </Typography>
        )}
      </form>
      <LegalPopup
        onClose={() => setIsLegalPopupVisible(false)}
        isVisible={isLegalPopupVisible}
      />
    </>
  );
};

export default withTranslation()(EmailSignup);