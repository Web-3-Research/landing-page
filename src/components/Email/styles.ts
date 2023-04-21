import { createStyles, makeStyles } from "@material-ui/core/styles";

export const darkColor = "#18216d";

export const useStyles = makeStyles((theme) =>
  createStyles({
    form: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      maxWidth: 400,
      margin: "0 auto",
      padding: theme.spacing(3),
      borderRadius: theme.shape.borderRadius,
      boxShadow: theme.shadows[3],
      backgroundColor: theme.palette.background.paper,
      outline: 'none!important',
    },
    
    
    textField: {
      marginBottom: theme.spacing(2),
      '& .MuiOutlinedInput-root': {
        border: 'none',
        boxShadow: 'none',
        '&:hover': {
          boxShadow: 'none',
        },
        '&:focus': {
          outline: 'none',
        },
      },
    },
    
    customButton: {
      textTransform: "none",
      fontWeight: 600,
      backgroundColor: darkColor,
      color: theme.palette.primary.contrastText,
      "&:hover": {
        backgroundColor: theme.palette.primary.dark,
      },
    },

    message: {
      marginTop: theme.spacing(1),
    },
  })
);