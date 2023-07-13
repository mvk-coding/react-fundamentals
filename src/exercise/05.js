// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// Basic
// const smallBox = (
//   <div
//     className="box box--small"
//     style={{backgroundColor: 'lightBlue', fontStyle: 'italic'}}
//   >
//     small lightblue box
//   </div>
// )
// const mediumBox = (
//   <div
//     className="box box--medium"
//     style={{backgroundColor: 'pink', fontStyle: 'italic'}}
//   >
//     medium pink box
//   </div>
// )
// const largeBox = (
//   <div
//     className="box box--large"
//     style={{backgroundColor: 'orange', fontStyle: 'italic'}}
//   >
//     large orange box
//   </div>
// )

//Extra credit 1
// function Box({className = '', style, ...otherProps}) {
//   return (
//     <div
//       className={`box ${className}`.trim()}
//       style={{fontStyle: 'italic', ...style}}
//       {...otherProps}
//     />
//   )
// }

// const smallBox = (
//   <Box className="box--small" style={{backgroundColor: 'lightBlue'}}>
//     small lightblue box
//   </Box>
// )
// const mediumBox = (
//   <Box className="box--medium" style={{backgroundColor: 'pink'}}>
//     medium pink box
//   </Box>
// )
// const largeBox = (
//   <Box className="box--large" style={{backgroundColor: 'orange'}}>
//     large orange box
//   </Box>
// )

// Extra credit 2
function Box({className="", size, style, ...otherProps}) {
  if (size) className += `box--${size}`

  return (
    <div
      className={`box box--${size}`}
      style={{fontStyle: 'italic', ...style}}
      {...otherProps}
    />
  )
}

const smallBox = (
  <Box size="small" style={{backgroundColor: 'lightblue'}}>
    small lightblue box
  </Box>
)
const mediumBox = (
  <Box size="medium" style={{backgroundColor: 'pink'}}>
    medium pink box
  </Box>
)
const largeBox = (
  <Box size="large" style={{backgroundColor: 'orange'}}>
    large orange box
  </Box>
)

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  )
}

export default App
