import Link from 'next/Link'

const Navbar = () => (
    <nav className="navbar navbar-expand vavbar-dark bg-dark mb-4">
        <div className="container">

        <a className="navbar-brand" href="#">BitRatez</a>
        <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link href="/">
                        <a className="nav-link">Home</a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href="/about">
                        <a className="nav-link">About Us</a>
                    </Link>
                </li>
            </ul>
        </div>
        </div>
    </nav>
);

export default Navbar;