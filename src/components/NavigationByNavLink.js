import { routes } from '../core/constants';
import { NavLink } from 'react-router-dom';

function NavigationByNavLink() {
    return (
        <div className='navigation-container'
             style={{
                 display: 'flex',
                 flexDirection: 'row',
                 gap: '5px',
                 justifyContent: 'space-between',
                 margin: '0 10px 50px',
             }}
        >
            {Object.keys(routes).map(route => {
                return (
                    <NavLink
                        key={route}
                        to={routes[route].link}
                        className={({isActive, isPending}) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                        style={{
                            alignItems: 'center',
                            border: '1px solid green',
                            display: 'flex',
                            flex: 1,
                            justifyContent: 'center',
                            padding: '5px',
                            textDecoration: 'none',
                        }}
                    >
                        {routes[route].label}
                    </NavLink>
                )
            })}
        </div>
    );
}

export default NavigationByNavLink;
