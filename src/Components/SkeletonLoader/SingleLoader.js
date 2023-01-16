import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export default function SkeletonSingleLoader() {
  return (
<Stack spacing={1}>
    <Skeleton variant="text" sx={{ fontSize: '1rem' }} height={50} />
    <Skeleton variant="circular"  width={40} height={40} />
    <Skeleton variant="rectangular" sx={{ fontSize: '1rem' }} height={60} />
    <Skeleton variant="rounded" sx={{ fontSize: '1rem' }} height={60} />
  </Stack>
  );
}