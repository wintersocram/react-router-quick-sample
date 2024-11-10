import { routes } from '../core/constants';
import { useNavigate } from 'react-router-dom';

function NavigationByScript() {
    const navigate = useNavigate();

    const goTo = (e, link) => {
        e.preventDefault();
        navigate(link);
    }

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
                    <div
                        key={route}
                        onClick={(e) => goTo(e, routes[route].link)}
                        style={{
                            alignItems: 'center',
                            border: '1px solid green',
                            cursor: 'pointer',
                            display: 'flex',
                            flex: 1,
                            justifyContent: 'center',
                            padding: '5px',
                            textDecoration: 'none',
                        }}
                    >
                        {routes[route].label}
                    </div>
                )
            })}
        </div>
    );
}

export default NavigationByScript;
