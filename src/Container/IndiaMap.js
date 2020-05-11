import React , {useState} from "react";
import {ComposableMap , Geographies , Geography} from "react-simple-maps";
import  {scaleQuantile} from "d3-scale";
import ReactTooltip from "react-tooltip";
import INDIA_TOPO_JSON from "./india.topo.json";
import LinearGradient from "../Components/LinearGradient";
import "./IndiaMap.css";
const PROJECTION_CONFIG = {
    scale: 350,
    center: [78.9629, 22.5937] // always in [East Latitude, North Longitude]
  };
  
  // Red Variants
  const COLOR_RANGE = [
    '#ffedea',
    '#ffcec5',
    '#ffad9f',
    '#ff8a75',
    '#ff5533',
    '#e2492d',
    '#be3d26',
    '#9a311f',
    '#782618'
  ];
  const DEFAULT_COLOR = '#EEE';
  const geographyStyle = {
    default: {
      outline: 'none'
    },
    hover: {
      fill: '#ccc',
      transition: 'all 250ms',
      outline: 'none'
    },
    pressed: {
      outline: 'none'
    }
  };
 
const IndiaMap =(props) =>{
    const [tooltipContent, setTooltipContent] = useState('');
    const data = props.MapData;
    
    if(data !== null)
   { 
        
        const gradientData = {
        fromColor: COLOR_RANGE[0],
        toColor: COLOR_RANGE[COLOR_RANGE.length - 1],
        min: 0,
        max: data.reduce((max, item) =>{
            console.log("dd "+max);   
            return (item.confirmed > max ? item.confirmed : max);
        }, 0)
      };
      const colorScale = scaleQuantile()
      .domain(data.map(d => d.confirmed))
      .range(COLOR_RANGE);
  
    const onMouseEnter = (geo, current = { confirmed: 'NA' }) => {
      return () => {
        setTooltipContent(`${geo.properties.name}: ${current.confirmed}`);
      };
    };
  
    const onMouseLeave = () => {
      setTooltipContent('');
    };
  
    return (
        <div className=" container">
         
          <ReactTooltip>{tooltipContent}</ReactTooltip>
            <ComposableMap
              projectionConfig={PROJECTION_CONFIG}
              
              projection="geoMercator"
              width={600}
              height={320}
              data-tip=""
            >
              <Geographies geography={INDIA_TOPO_JSON} className="states">
                {({ geographies }) =>
                  geographies.map(geo => {
                    //console.log(geo.id);
                    const current = data.find(s => s.id === geo.id);
                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill={current ? colorScale(current.confirmed) : DEFAULT_COLOR}
                        style={geographyStyle}
                        onMouseEnter={onMouseEnter(geo, current)}
                        onMouseLeave={onMouseLeave}
                      />
                    );
                  })
                }
              </Geographies>
            </ComposableMap>
            
            
        </div>
      );  
   }else{
       return (<h1>Loading...</h1>);
   }
      
}

export default IndiaMap;