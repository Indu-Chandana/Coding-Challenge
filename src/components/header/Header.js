import React from 'react'
import styles from './header.module.css'

const { container } = styles;

const Header = (props) => {

  const { winner } = props;

  return (
    <div className={container}>
      {!winner?.name ? <p>Click & Win</p> : <p>congratulations ...</p>}
    </div>
  )
}

export default Header