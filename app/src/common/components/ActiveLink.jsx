import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const ActiveLink = ({ active, children, onClick, url='#' }) => {
  if (active) {
    return <span>{children}</span>
  }

  return (
    <Link to={url}
       onClick={e => {
         e.preventDefault()
         onClick()
       }}
    >
      {children}
    </Link>
  )
}

ActiveLink.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  url: PropTypes.string
}

export default ActiveLink
