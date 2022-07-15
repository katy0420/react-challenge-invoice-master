import { useNavigate } from 'react-router-dom';
import classes from './Layout.module.css';

const Layout = (props: any) => {
  const navigate = useNavigate();
  const backHomepage = () => {
    navigate('/');
  }
  return (
    <div>
      <header className={classes.header}>
        <div className={classes.logo} onClick={backHomepage}>Wave Invoicing System</div>
      </header>
      <main className={classes.main}>{props.children}</main>
    </div>

  );
}

export default Layout;
