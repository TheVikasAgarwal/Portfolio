import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({setSelectedTab}) {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  React.useEffect(() => {
    setSelectedTab(value)
  }, [value])

  return (
      <Box sx={{ borderBottom: 1, borderColor: 'divider', width: 182, marginLeft: 'auto', marginRight: 'auto' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Kanban" {...a11yProps(0)}/>
          <Tab label="Scrum" {...a11yProps(1)} />
        </Tabs>
      </Box>
  );
}