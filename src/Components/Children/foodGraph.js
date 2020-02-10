import React, { useState, useEffect } from 'react';
import AxiosWithAuth from '../../Utils/AxiosWithAuth';
import { CircularProgress, Typography } from '@material-ui/core';
import { ResponsivePie } from '@nivo/pie';

export default function FoodGraph(props)
{
    //  Store graph data
    //  -> childs diet intake
    const [graphData, setGraphData] = useState([]);

    //  Is graph data being loaded
    const [isLoading, setIsLoading] = useState(true);

    //  Fetch all of users food entries
    useEffect(() =>
    {
        AxiosWithAuth()
          .get(`/api/food`)
          .then((res) =>
          {
              //  Add data to graph
              setGraphData([
                  ...graphData,
                  ...res.data.map((item, array) =>
                  {
                      return {
                          id: item.name,
                          label: item.name,
                          value: item.quantity
                      }
                  })
              ]);

              //  Show graph + hide loader
              setIsLoading(false);
          })
          .catch((err) =>
          {
              console.log('[FoodGraph] Unable to get graph data', err);
          });
    }, []);

    return (
        <div className='foodGraph separator'>
            <Typography variant="h3" component="h1">
                Breakdown of Food <strong>Intake</strong>
            </Typography>
            <div style={{position: 'relative'}}>
                {
                    /* Show loading icon when fetching graph data */
                    isLoading &&
                    <div className='center center-full'>
                        <CircularProgress />
                    </div>
                }
                <div className={isLoading ? 'hide' : 'graph'} style={{position: 'relative', width: '100%', height: '500px'}}>
                    <ResponsivePie
                        data={graphData}
                        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                        innerRadius={0.5}
                        padAngle={0.7}
                        legends={[
                            {
                                anchor: 'bottom',
                                direction: 'row',
                                translateY: 56,
                                itemWidth: 100,
                                itemHeight: 18,
                                itemTextColor: '#999',
                                symbolSize: 18,
                                symbolShape: 'circle',
                                effects: [
                                    {
                                        on: 'hover',
                                        style: {
                                            itemTextColor: '#000'
                                        }
                                    }
                                ]
                            }
                        ]}
                    />
                </div>
            </div>
        </div>
    )
}
