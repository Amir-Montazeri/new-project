import { Box, Divider, Grid, Typography } from "@mui/material";
import { iconsContainer } from "./leftSectionStyles";

const LeftSection = () => {
  return (
    <>
      <Box>
        <Typography variant="h5" component="h1" color="#005078">
          ساعات کار بخش اداری
        </Typography>
        <Typography
          variant="body1"
          component="pre"
          sx={{ direction: "rtl !important" }}
        >
          شنبه تا چهارشنبه
          <br /> پنجشنبه ها
          <br /> خارج از ساعات اداری می توانید از طریق چت پشتیبان
          <br /> سایت و یا اپلیکیشن با ما در ارتباط باشید
        </Typography>
      </Box>
      <Divider color="#707070" />
      <Box>
        <Typography
          variant="h5"
          component="h1"
          color="#005078"
          sx={{ direction: "rtl !important" }}
        >
          شماره های تماس
        </Typography>
        <Typography
          variant="body1"
          component="pre"
          sx={{ direction: "rtl !important" }}
        >
          ۰۲۱-۴۴۱۰۱۷۱۱ ۰۲۱-۴۴۱۰۱۷۸۸
          <br />
          ایمیل: Info@plastapp.ir
          <br />
          تهران،سازمان آب،اتوبان باکری،خ شربیانی شرقی،پ۱ط۳
        </Typography>
      </Box>
      <Divider color="#707070" />
      <Grid
        container
        flexDirection="row-reverse"
        justifyContent="center"
        wrap="wrap"
      >
        <Grid item sx={iconsContainer}>
          <Box component="div">
            <img src="./assets/icons/facebook.svg" alt="facebook" />
          </Box>
          <Box component="div">
            <img src="./assets/icons/instagram.svg" alt="facebook" />
          </Box>
          <Box component="div">
            <img src="./assets/icons/telegram.svg" alt="facebook" />
          </Box>
          <Box component="div">
            <img src="./assets/icons/twitter.svg" alt="facebook" />
          </Box>
        </Grid>
        <Grid item>
          <Typography variant="h5" component="h3">
            ما را در شبکه های اجتماعی دنبال کنید
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default LeftSection;
