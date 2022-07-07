import React from 'react';
import fishingRegulations from '../../mock-data/fishes';
import {Card, CardContent, Typography} from "@mui/material";
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
            Below is a list of fishes along with their applicable fishing regulations, which can include:
            <ul>
              <li>Fishing seasons</li>
              <li>Minimum and maximum sizes in inches</li>
              <li>Bag limits</li>
              <li>Fish nicknames</li>
            </ul>
            Click a fish to see season information, and click a season to see applicable size and bag limits.
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