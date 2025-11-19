import React from 'react'

const Descreption = ({ stepper, type, courseDetails }) => {
  console.log('desc:',courseDetails)
  return (
    <div>
      <h3>توضیحات دوره: </h3>
      <h5>{courseDetails.describe}</h5>
    </div>
  )
}

export default Descreption
