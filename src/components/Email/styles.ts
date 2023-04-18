import { createStyles, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    header: {
      backgroundColor: "rgba(0, 0, 0, 0.75)",
      color: "white",
    },
    title: {
      flexGrow: 1,
      display: "none",
    },
    body: {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#f5f5f5",
    },
  })
);
