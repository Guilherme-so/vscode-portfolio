import React from 'react'

const Head = (props:any) => {
  React.useEffect(() => {
    document.title = props.title + ' | Gui'
  }, [props])

  return null
}

export default Head