import Button from "@mui/material/Button";

const MainButton = (props) => (
  <Button
    sx={{
      border: "none",
      backgroundColor: "#203c32",
      color: "#ffe7bf",
      fontWeight: "900",
      borderRadius: "50px",
      textTransform: "capitalize",
      padding: "10px 15px",
      '&:hover': {
        backgroundColor: "#315c4c"

      }
    }}
    variant="contained"
  >
    {props.children}
  </Button>
);

export default MainButton;
