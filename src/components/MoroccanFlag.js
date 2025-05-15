import React from 'react';
import { Box } from '@mui/material';

function MoroccanFlag({ width = 40, height = 30 }) {
  return (
    <Box sx={{ width, height, position: 'relative' }}>
      <svg width={width} height={height} viewBox="0 0 40 30">
        <rect width="40" height="30" fill="#c1272d"/>
        <path
          d="M20 6 l5.8779 17.9421 -15.3884 -11.1803h19.0211l-15.3884 11.1803z"
          fill="#006233"
        />
      </svg>
    </Box>
  );
}

export default MoroccanFlag;
