import { Box, Button, Grid, Typography } from "@mui/material";
import { base_api_url } from "api";
import axios from "axios";
import { getItem } from "lcoalStorage";
import { useState } from "react";
import { useEffect } from "react";
import {
  buttonStyles,
  containerStyles,
  contentStyles,
  itemsContainerStyles,
} from "./ticketsStyles";

function Tickets() {
  const [tickets, setTickets] = useState();

  useEffect(() => {
    const accessToken = getItem("access");
    axios
      .get(`${base_api_url}/tickets/`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        const { data } = res;
        data.results && setTickets(data.results);
      });
  }, []);

  const priorityValue = (priority) => {
    console.log(priority);
    let result;
    switch (parseInt(priority)) {
      case 1:
        result = "سطح بالا";
        break;
      case 2:
        result = "سطح متوسط";
        break;
      case 3:
        result = "سطح پایین";
        break;

      default:
        break;
    }
    return result;
  };

  const statusValue = (status) => {
    let result;
    switch (status) {
      case "P":
        result = "در حال بررسی";
        break;
      case "R":
        result = "خوانده شده";
        break;
      case "U":
        result = "خوانده نشده";
        break;
      case "N":
        result = "پاسخ داد نشده";
        break;
      case "C":
        result = "بسته شده";
        break;

      default:
        break;
    }
    return result;
  };

  const renderedTicketsContainer = (items) =>
    items?.map(({ title, priority, pk, status }) => {
      return (
        <Grid container flexWrap="nowrap" sx={itemsContainerStyles} key={pk}>
          <Typography variant="h6" component="h3">
            {title}
          </Typography>
          <Typography variant="body1" component="p">
            اولویت: {priorityValue(priority)}
          </Typography>
          <Typography variant="body1" component="p">
            وضعیت: {statusValue(status)}
          </Typography>
        </Grid>
      );
    });

  return (
    <>
      <Box sx={containerStyles}>
        <Box sx={contentStyles}>{renderedTicketsContainer(tickets)}</Box>
      </Box>
    </>
  );
}

export default Tickets;
