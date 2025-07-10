import { BrowserRouter, Routes, Route, Link, Outlet, useNavigate } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Landing />} />
            <Route path="neet/online-coaching-class-11" element={<Class11Program />} />
            <Route path="neet/online-coaching-class-12" element={<Class12Program />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Layout() {
  return (
    <div>
      <Header />
      <div>
        <Outlet />
      </div>
      <footer style={{ marginTop: '20px' }}>Footer | Contact Us</footer>
    </div>
  );
}

function Header() {
  return (
    <div style={{ background: 'yellow', padding: '10px' }}>
      <Link to="/" style={{ marginRight: '10px' }}>Allen</Link>
      <Link to="/neet/online-coaching-class-11" style={{ marginRight: '10px' }}>Class 11</Link>
      <Link to="/neet/online-coaching-class-12">Class 12</Link>
    </div>
  );
}

function Class11Program() {
  return <div>NEET Program For Class 11</div>;
}

function Class12Program() {
  const navigate = useNavigate();

  const redirectUser = () => navigate('/');

  return (
    <div>
      NEET Program for Class 12
      <br />
      <button onClick={redirectUser}>Go TO Home Page</button>
    </div>
  );
}

function Landing() {
  return <div>Landing Page : Welcome to Allen</div>;
}

export default App;
