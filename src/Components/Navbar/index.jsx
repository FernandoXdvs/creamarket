import { NavLink } from "react-router-dom";


const Navbar = () => {
    const activeStyle = 'underline underline-offset-4';

    return (
        <nav className="flex w-full justify-between items-center py-5 px-8 text-sm font-light fixed z10 top-0 bg-purple-300">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink
                        to='/' className='text-white'>
                        Creamarket <span className='text-yellow-300'>Mx</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/'
                        className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Todo
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/zapatitos'
                        className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Zapatitos
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/amigurumis'
                        className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Amigurumis
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/llaveros'
                        className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Llaveros
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/plantas'
                        className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Plantas
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/otros'
                        className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Otros
                    </NavLink>
                </li>
            </ul>

            <ul className="flex items-center gap-3">
                <li className="text-black/50">
                    creamarketmx@gmail.com
                </li>
                <li>
                    <NavLink to='/my-orders'>
                        Mis Ordenes
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/my-account'>
                        Mi cuenta
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/sign-in'>
                        Iniciar sesion
                    </NavLink>
                </li>
                <li>
                    <i class="bi bi-cart-fill"></i> 0
                </li>
            </ul>


        </nav>
    );
}

export { Navbar };