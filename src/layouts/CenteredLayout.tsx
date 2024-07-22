import { Outlet } from 'react-router-dom';

export default function CenteredLayout() {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <header className="header">Header Content</header>
      <main className="main-content">
        <Outlet />
      </main>
      <footer className="footer">Footer Content</footer>
    </div>
  );
};