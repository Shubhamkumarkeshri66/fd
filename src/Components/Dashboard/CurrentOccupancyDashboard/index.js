import { Box, Card, Grid, Typography } from "@mui/material";
import React,{useState} from "react";
import {OverviewCards} from "../../OverviewCards";
import { RoomGrid } from "../../Rooms/RoomGrid";
import CustomerSatisfaction from "../../CustomerSatisfaction";
import { StaffSchedule } from "../../StaffSchedule";
import DashboardPriceGraph from "../../DashboardPriceGraph";
import Checkincheckout from "../../Checkincheckout";
import Loader from "../../Loader";

const CurrentOccupancyDashboard = () => {
  const [loadingCount, setLoadingCount] = useState(0);

  const startLoading = () => setLoadingCount((prev) => prev + 1);
  const stopLoading = () => setLoadingCount((prev) => Math.max(prev - 1, 0));

  const isLoading = loadingCount > 0;
  console.log("Loading Count",loadingCount);
  return (
    <>
      <Box sx={{ p: 1 }}>
        {/* Page Title */}
        <Typography variant="h4" gutterBottom>
          Hotel's Name
        </Typography>

        {/* <Typography color="text.secondary" paragraph>
        Gain valuable insights into the overall performance of your business.
        Explore key metrics, room details, customer satisfaction, and staff
        schedules, all in one place to help you make informed decisions.
      </Typography> */}
          {/* {isLoading && <Loader/>} */}

        {/* Main Grid Layout */}
        <Grid container spacing={3}>
          {" "}
          {/* Adjusted spacing */}
          {/* Left Column */}
          <Grid item xs={12} md={8}>
            {/* OverviewCards Section */}
            <Box sx={{ mb: 4 }}>
              {" "}
              {/* Reduced gap */}
              <OverviewCards startLoading={startLoading} stopLoading={stopLoading} isLoading={isLoading} />
            </Box>

            {/* RoomGrid Section */}
            <Box>
              <RoomGrid startLoading={startLoading} stopLoading={stopLoading} isLoading={isLoading}/>
            </Box>
          </Grid>
          {/* Right Column */}
          <Grid item xs={12} md={4}>
            <Card sx={{ mb: 3, boxShadow: 3 }}>
              <CustomerSatisfaction startLoading={startLoading} stopLoading={stopLoading} isLoading={isLoading} />
            </Card>
            <Card sx={{mb:2}}>
                  <Checkincheckout startLoading={startLoading} stopLoading={stopLoading} isLoading={isLoading} />
            </Card>
           
            <Card sx={{ minHeight:"465px",borderRadius:"10px"}}>
             
              <StaffSchedule startLoading={startLoading} stopLoading={stopLoading} isLoading={isLoading} />
            
            </Card>
          
          </Grid>
        </Grid>

        <DashboardPriceGraph startLoading={startLoading} stopLoading={stopLoading} isLoading={isLoading}  />
      </Box>
    </>
  );
};

export default CurrentOccupancyDashboard;
