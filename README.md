# react-router-quick-sample
Quick reference for react router

## Author

wintersocram@gmail.com

## Date and Versions

Created at: November 2024
React: 18.3.1
Node: 20.18.0
Npx: 10.2.2 

## Installing

Step 1 : install react router: it does not come as default:

```npm install --save react-router-dom```

After install, it should have this package, in the package.json: "react-router-dom": "^6.28.0"

## Adding routes

In the main file (probably index.js), CREATE the router:

```
const router = createBrowserRouter([
  {
    path: "/",
    element: <App>,
  },
  {
    path: "/hello",
    element: <div>Hello world!</div>,
  },
  {
    path: "/bye",
    element: <div>Bye world!</div>,
  },
]);
```

In the main file (probably index.js), REPLACE the App by the created router:
From:

```
<React.StrictMode>
  <App />
</React.StrictMode>
```

To:

```
<React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>
```

## Navigating

To navigate, it can either use the NavLink component, from react-router-dom:

```
import { NavLink } from 'react-router-dom';
...
<NavLink to="/hello">
  Hello
</NavLink>
```

Or by javascript:

```
import { useNavigate } from 'react-router-dom';
...
const navigate = useNavigate();
...
<div onClick={() => navigate('/hello')}>
    Hello
</div>
```
