import { Box, Typography } from '@mui/material'
import React from 'react'

function DayHeader() {
  return (
    <Box sx = {{display : 'flex', alignItems: 'baseline'}}>
        <Typography variant = "h3" color = "#383838">Today</Typography>
        <Typography variant = "subtitle2" ml = {1} color = "#6f6f6f">Wed 11 Jan</Typography>
    </Box>
  )
}

export default DayHeader