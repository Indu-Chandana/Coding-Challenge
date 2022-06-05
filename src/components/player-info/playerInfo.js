import React from 'react'
import RenderSVG from '../render-SVG/RenderSVG';

import styles from './playerInfo.module.css';

const { container } = styles;

const PlayerInfo = (props) => {
  const { winner, turn } = props;

  const element = winner ?
    <div className={container}>
      <p>Winner: </p>
      <RenderSVG svg={winner} />
    </div>
    :
    <div className={container}>
      <p>Turn: </p>
      <RenderSVG svg={turn} />
    </div>


  return element
}

export default PlayerInfo