import PropTypes from 'prop-types';
import { BsPercent } from "react-icons/bs";

import { StatSection,
    StatList,
    StatItem,
    SpanLabel,
    SpanData } from './Statistics.styled'


export const Statistics = ({ 
    title, stats
 }) => {
 return (<StatSection>
 {title && <h2>{title}</h2>}

 <StatList>
    {stats.map(({ label, percentage, id }) => {
        return ( 
<StatItem style={{backgroundColor: randomColor()}} key={id}>
     <SpanLabel>{label}</SpanLabel>
     <SpanData>{percentage}<BsPercent /></SpanData>
   </StatItem>
        )
    })}
   
 </StatList>
</StatSection>);
 };

 Statistics.propTypes = {
    title:PropTypes.string, 
    stats:PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage:PropTypes.number.isRequired,
        }).isRequired
    ).isRequired
  };

  function randomColor () { 
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
 }
