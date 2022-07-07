import React from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography
} from "@mui/material";
import {FishesEntity} from "../../mock-data/fishes";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

type MicroCardProps = {
  children: React.ReactNode,
  header?: string
};
const MicroCard = ({children, header}: MicroCardProps): JSX.Element => {
  return (
    <Card style={{
      textAlign: 'center',
      margin: '0 6px',
      height: '100%'
    }}>
      <CardContent sx={{
        padding: '6px !important'
      }}>
        {
          header && (
            <Typography style={{
              color: "#595959",
              fontWeight: 'bold',
              paddingBottom: '12px'
            }}>{header}</Typography>
          )
        }
        {children}
      </CardContent>
    </Card>
  );
}

type SeasonRangeProps = {
  start: Date,
  end: Date
};
const SeasonRange = ({start, end}: SeasonRangeProps): JSX.Element => {
  const seasonLengthInMs = start && end ? (
    end.getTime() - start.getTime()
  ) : 0;
  const seasonLengthInDays = seasonLengthInMs / 1000 / 60 / 60/ 24;

  return (
    <Grid container>
      <Grid item xs={4}>
        {
          start && (
            <MicroCard header={'Starts'}>
              <Typography>{start.toLocaleDateString('default', { month: 'long', day: 'numeric' })}</Typography>
              <Typography>{start.toLocaleDateString('default', { year: 'numeric' })}</Typography>
            </MicroCard>
          )
        }
      </Grid>
      <Grid item xs={4}>
        {
          end && (
            <MicroCard header={'Ends'}>
              <Typography>{end.toLocaleDateString('default', { month: 'long', day: 'numeric' })}</Typography>
              <Typography>{end.toLocaleDateString('default', { year: 'numeric' })}</Typography>
            </MicroCard>
          )
        }
      </Grid>
      <Grid item xs={4}>
        <MicroCard  header={'Duration'}>
          <Typography>{seasonLengthInDays} day{seasonLengthInDays > 1 && 's'}</Typography>
        </MicroCard>
      </Grid>
    </Grid>
  );
}

type RegulationItemProps = {
  fish: FishesEntity,
  index: number
};
const RegulationItem = ({fish, index}: RegulationItemProps): JSX.Element => {
  const nicknames = fish.nicknames ? (
    Array.isArray(fish.nicknames) ? (fish.nicknames.join(', ')): fish.nicknames
  ) : "No nicknames";

  const fishingProhibited = (!fish.seasons || fish.seasons.length <= 0);

  const infoSectorStyle = {
    margin: '12px 0',
    border: '1px solid #d9d9d9',
    borderRadius: '6px',
    padding: '6px'
  };

  return (
    <Accordion sx={{
      '&:not(:first-child)': {
        marginTop: '32px'
      }
    }}>
      <AccordionSummary
        style={{
          backgroundColor: index % 2 === 1 ? ('#e6f7ff') : ('#cceeff')
        }}
        expandIcon={<ExpandMoreIcon />}>
        <div>
          <Typography variant={'h1'}>{fish.species}</Typography>
          <Typography>{nicknames}</Typography>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        {
          fishingProhibited ? (
            <Typography sx={{
              color: 'red',
              fontWeight: 'bold',
              fontStyle: 'italic'
            }}>
              Fishing prohibited!
            </Typography>
          ) : (
            // @ts-ignore
            fish.seasons.map((season, seasonIndex) => {
              const isOpenSeason = !season.opening && !season.close;
              const start = season.opening && new Date(season.opening);
              const end = season.close && new Date(season.close);
              const isSizeRestricted = season.minimumSize || season.maximumSize;

              return(
                <Accordion>
                  <AccordionSummary
                    style={{
                      backgroundColor: isOpenSeason ? '#ccffcc' : (seasonIndex % 2 === 1 ? ('#e6f7ff') : ('#cceeff'))
                    }}
                    expandIcon={<ExpandMoreIcon />}>
                    <Typography variant={'h5'}>{isOpenSeason ? "Open Season" : `${start && start.toLocaleDateString('default', { month: 'numeric', day: 'numeric', year: 'numeric' })} to ${end && end.toLocaleDateString('default', { month: 'numeric', day: 'numeric', year: 'numeric' })}`}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Card sx={{
                      '&:not(:first-child)': {
                        marginTop: '12px'
                      }
                    }}>
                      <CardContent sx={{
                        padding: '16px !important',
                        backgroundColor: isOpenSeason ? '#ccffcc' : 'white'
                      }}>
                        <div style={{
                          textAlign: 'center'
                        }}>
                          {
                            (!isOpenSeason && start && end) && (
                              <div style={infoSectorStyle}>
                                <Typography
                                  variant={'h5'}
                                  style={{
                                    padding: '6px 0 12px 0'
                                  }}>Range</Typography>
                                <SeasonRange start={start} end={end}/>
                              </div>
                            )
                          }

                          <div style={infoSectorStyle}>
                            <Typography
                              variant={'h5'}
                              style={{
                                padding: '6px 0 12px 0'
                              }}>Size Limit</Typography>
                            <Card>
                              <CardContent sx={{
                                padding: '12px !important'
                              }}>
                                {isSizeRestricted ? (
                                  season.minimumSize && season.maximumSize ? (
                                    <Typography>{season.minimumSize} inch{season.minimumSize > 1 && 'es'} to {season.maximumSize} inch{season.maximumSize > 1 && 'es'}</Typography>
                                  ) : (<Typography>{season.minimumSize ? (season.minimumSize) : (season.maximumSize)} inch{(Number(season.maximumSize) + Number(season.minimumSize)) && 'es'} {season.maximumSize ? "or below" : "or above"}</Typography>)
                                ) : (
                                  <Typography>No size limit</Typography>
                                )}
                              </CardContent>
                            </Card>
                          </div>

                          <div style={infoSectorStyle}>
                            <Typography
                              variant={'h5'}
                              style={{
                                padding: '6px 0 12px 0'
                              }}>Bag Limit</Typography>
                            <Card>
                              <CardContent sx={{
                                padding: '12px !important'
                              }}>
                                {season.bagLimit ? (
                                  <Typography>{season.bagLimit} max catches</Typography>
                                ) : (
                                  <Typography>No bag limit!</Typography>
                                )}
                              </CardContent>
                            </Card>
                          </div>

                        </div>
                      </CardContent>
                    </Card>
                  </AccordionDetails>
                </Accordion>
              );
            })
          )
        }
      </AccordionDetails>
    </Accordion>
  );
}

export default RegulationItem;