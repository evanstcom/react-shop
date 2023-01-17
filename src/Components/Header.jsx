function Header() {
    return (
        <div>
            <nav className="deep-purple darken-2">
                <div className="container nav-wrapper">
                    <a href="." className="brand-logo">
                        React SHOP
                    </a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li>
                            <a href="#!">Repo</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export { Header };
