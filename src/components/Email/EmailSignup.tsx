import React, { useState } from "react";
import { TextField, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

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

const EmailSignup: React.FC = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const classes = useStyles();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);

    try {
      await axios.post("https://wydxqjqwk3.execute-api.us-east-1.amazonaws.com/dev/email-signup", { email });
      setMessage("A confirmation email has been sent. Please check your inbox.");
    } catch (error) {
      setMessage("An error occurred. Please try again later.");
      setIsSubmitted(false);
    }
  };

  return (
    
    <form className={classes.form} onSubmit={handleSubmit}>
      <TextField
        className={classes.textField}
        label="Email Address"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        disabled={isSubmitted}
      />
      <Button
        className={classes.customButton}
        type="submit"
        variant="contained"
        color="primary"
        disabled={isSubmitted}
      >
        Join Waitlist
      </Button>
      {message && (
        <Typography className={classes.message} variant="body2" color="textSecondary">
          {message}
        </Typography>
      )}
    </form>
  );
};

export default EmailSignup;
