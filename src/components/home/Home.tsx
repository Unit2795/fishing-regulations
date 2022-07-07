import React from 'react';
import fishingRegulations from '../../mock-data/fishes';
import {Accordion, AccordionDetails, AccordionSummary, Card, CardContent, CardHeader, Typography} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import RegulationItem from "./RegulationItem";

type HomeProps = {

};
const Home = (props: HomeProps): JSX.Element => {
  return (
    <div>
      <Typography variant={'h1'} style={{
        textAlign: "center",
        paddingTop: '24px'
      }}>🛥️ Fishing Regulations 🐟</Typography>
      <Card sx={{
        margin: '24px auto',
        maxWidth: 512,
        minWidth: 356
      }}>
        <CardContent>
          <Typography variant={'body1'}>
            Below is a list of fishes along with their applicable fishing regulations, which can include
            <ul>
              <li>Fishing seasons</li>
              <li>Minimum and maximum sizes in inches</li>
              <li>Bag limits</li>
              <li>Fish nicknames</li>
            </ul>
          </Typography>
        </CardContent>
      </Card>
      <hr style={{
        margin: '32px auto',
        maxWidth: '256px'
      }}/>
      <div style={{
        margin: '32px auto',
        maxWidth: '512px'
      }}>
        {
          fishingRegulations.fishes.map((item, index) => {
            return(
              <RegulationItem fish={item} index={index}/>
            );
          })
        }
      </div>
    </div>
  );
}

export default Home;