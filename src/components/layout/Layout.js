import { useEffect, useState } from 'react';
import classes from './Layout.module.css';

export default function Layout({children}) {
  const [headerHeight, setHeaderHeight] = useState('5rem');

  useEffect(() => {
    const header = document.querySelector('header');
    if (header) {
      setHeaderHeight(header.offsetHeight + 'px');
    }
  }, []);

  return (
    <div>
      <main className={classes.main} style={{ marginTop: headerHeight }}>
        {children}
      </main>
    </div>
  );
}