import React, {Profiler} from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import App from './components/App';
import Bye from './components/Bye';
import Hello from './components/Hello';
import { routes } from './core/constants';
import './index.css';

const onRender = (id, phase, actualDuration, baseDuration, startTime, commitTime) => {
    console.log(`Profiler [${id}] - phase: ${phase} - actualDuration: ${actualDuration} ms - baseDuration: ${baseDuration} ms - startTime: ${startTime} - commitTime: ${commitTime}`);
}

const router = createBrowserRouter([
    {
        path: routes.main.link,
        element: <App/>,
    },
    {
        path: routes.hello.link,
        element: <Hello/>,
    },
    {
        path: routes.bye.link,
        element: <Bye/>,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Profiler id='Root' onRender={onRender}>
            <RouterProvider router={router}/>
        </Profiler>
    </React.StrictMode>
);
