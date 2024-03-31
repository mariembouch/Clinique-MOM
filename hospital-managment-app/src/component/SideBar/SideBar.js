import React from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar'; 
import "./SideBar.css"; // Import CSS for custom styling

const SideBar = ({ collapsed, toggleCollapsed }) => {
  return (
    <Sidebar collapsed={collapsed} transitionDuration={1000}  className="fixed-sidebar" style={{
      overflowY: 'auto', // Make sidebar container scrollable
      flexShrink: 0, // Prevent sidebar from shrinking
      position: 'fixed' // Fix the sidebar position
    }}>
      <Menu>
        <MenuItem className='btn1'>Profile</MenuItem>
        <MenuItem className='btn1'>Add doctor </MenuItem>
        <MenuItem className='btn1'>Add Patient</MenuItem>
        <MenuItem className='btn1'>Add assistant</MenuItem>
      </Menu>
     
    
    </Sidebar>
  );
}

export default SideBar;
