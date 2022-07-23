import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import {
  Routes,
  BrowserRouter,
  Route,
  Link,
  Outlet,
  NavLink,
  useParams,
} from 'react-router-dom';

import ProblemList from './problemList';

import './style.css';

const theme = createTheme({
  components: {
    // Name of the component ⚛️
    MuiButtonBase: {
      defaultProps: {
        // The default props to change
        disableRipple: false, // No more ripple, on the whole application 💣!
      },
    },
  },
  palette: {
    secondary: {
      main: '#0044ff',
    },
  },
});

const Main = () => {
  return (
    <ThemeProvider theme={theme}>
      <Link to="/">
        <Button color="secondary">This button has disabled ripples.</Button>
      </Link>
    </ThemeProvider>
  );
};

const bottonStyle = {
  with: '70px',
  height: '30px',
  borderRadius: '6px',
  fontWeight: 'bold',
  fontSize: '16px',
};

const Header = () => {
  return (
    <div className="header">
      <Stack
        className="innerHeader"
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          width: '1200px',
          margin: 'auto',
        }}
      >
        <Stack
          className="left-entry navBar"
          direction="row"
          justifyContent="left"
          spacing={2}
        >
          <NavLink
            onClick={() => console.log('click')}
            className="navItem"
            to="/"
          >
            主页
          </NavLink>
          <NavLink className="navItem" to="/list">
            题库
          </NavLink>
          <NavLink className="navItem" to="/contest">
            比赛
          </NavLink>
          <NavLink className="navItem" to="/rank">
            排名
          </NavLink>
        </Stack>
        <Stack
          className="right-entry navBar"
          direction="row"
          justifyContent="left"
          spacing={1}
        >
          <Button sx={bottonStyle} variant="text">
            登录
          </Button>
          <div>或</div>
          <Button sx={bottonStyle} variant="text">
            注册
          </Button>
        </Stack>
      </Stack>
    </div>
  );
};

const Layout = () => {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
    </React.Fragment>
  );
};

const Home = () => <div>公告</div>;
const List = () => (
  <div style={{ width: '1000px', margin: 'auto', marginTop: '40px' }}>
    <ProblemList />
  </div>
);
const Contest = () => <div>比赛</div>;
const Rank = () => <div>排名</div>;
const Problem = () => {
  const c = useParams();

  return <div>{JSON.stringify(c, null, '  ')}</div>;
};

export default function DefaultProps() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="list" element={<List />} />
          <Route path="problem/:id" element={<Problem />} />
          <Route path="contest" element={<Contest />} />
          <Route path="rank" element={<Rank />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
