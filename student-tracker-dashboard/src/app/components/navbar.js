// src/app/components/Navbar.js
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{ backgroundColor: '#333', padding: '10px', color: '#fff' }}>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '20px' }}>
        <li>
          <Link href="/" style={{ color: '#fff', textDecoration: 'none' }}>
            Dashboard
          </Link>
        </li>
        <li>
          <Link href="/data-entry" style={{ color: '#fff', textDecoration: 'none' }}>
            Data Entry
          </Link>
        </li>
      </ul>
    </nav>
  );
}