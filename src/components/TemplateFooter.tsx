import * as React from 'react';
import "../App.css";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import "../App.css";

export default function TemplateFooter() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <footer id="footer" className="fixed-bottom" style={{color: "gray", position: "fixed", bottom: 0}}>
      <div className="container">
        <div className="copyright">
          &copy; Copyright <strong><span>Kaaruba Transport Group Cooperative</span></strong>. All Rights Reserved
        </div>
        <div className="credits">

          Designed by <a href="/">GDMR</a>
        </div>
      </div>
    </footer>
  );
}