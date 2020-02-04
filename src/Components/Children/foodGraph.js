import React, { useState, useEffect } from 'react';
import AxiosWithAuth from '../../Utils/AxiosWithAuth';
import { CircularProgress, Typography } from '@material-ui/core';
import { ResponsivePie } from '@nivo/pie';

export default function FoodGraph(props) {

    //  Store graph data
    //  -> childs diet intake
    const [graphData, setGraphData] = useState([
        {id:"Fruit", label:"Fruit", value:1},
        {id:"Vegetable", label:"Vegetable", value:1},
        {id:"Whole Grains", label:"Whole Grains", value:1},
        {id:"Meat", label:"Meat", value:1},
        {id:"Dairy", label:"Dairy", value:1},
        {id:"Fats & Oils", label:"Fats & Oils", value:1},
        {id:"Treats", label:"Treats", value:1}
    ]);

    useEffect(() => {
        AxiosWithAuth()
          .get('/api/users/:id/children/:id/food')
          .then((res) => {
              console.log(res);
          })
          .catch((err) => {
              console.log('[FoodGraph] Unable to get graph data', err);
          })
    }, []);

    return (
        <div className='foodGraph separator'>
            <Typography variant="h3" component="h1">
                Breakdown of Food <strong>Intake</strong>
            </Typography>
            <div style={{width: '100%', height: '500px'}}>
                <div>
                    <CircularProgress />
                </div>
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
    )
}
