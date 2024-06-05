import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white">
      <nav className="container mx-auto py-4">
        <ul className="flex justify-between">
          <li>
            <Link href="/" legacyBehavior>
              <a className="hover:text-gray-300">Главная</a>
            </Link>
          </li>
          <li>
            <Link href="/articles" legacyBehavior>
              <a className="hover:text-gray-300">Статьи</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
