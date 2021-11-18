
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import AdminRoute from '../../AdminRoute/AdminRoute';
import AddProduct from '../AddProduct/AddProduct';
import AddReviews from '../AddReviews/AddReviews';
import DeleteProduct from '../DeleteProduct/DeleteProduct';
import DeleteReviews from '../DeleteReviews/DeleteReviews';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import MyOrders from '../MyOrders/MyOrders';


const drawerWidth = 240;

export default function Dashboard() {

    const {logOut, admin} = useAuth();
    let { path, url } = useRouteMatch();
  return (
    
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar className="bg-danger" position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {[

                <Link className="text-decoration-none text-dark" to="/home">Home</Link>,
                <Link className="text-decoration-none text-dark" to={`${url}/myorders`}>My Orders</Link>,
                <Link className="text-decoration-none text-dark" to={`${url}/addreviews`}>Add Reviews</Link>,
                !admin && <Link className="text-decoration-none text-dark" onClick={logOut} to="/login">Log Out</Link>,
            
            ].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? '' : ''}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {[
                
                admin && <Link className="text-decoration-none text-dark" to={`${url}/addproduct`}>Add Product</Link>,
                admin && <Link className="text-decoration-none text-dark" to={`${url}/deleteproduct`}>Delete Product</Link>,
                admin && <Link className="text-decoration-none text-dark" to={`${url}/deletereviews`}>Delete Reviews</Link>,
                admin && <Link className="text-decoration-none text-dark" to={`${url}/makeadmin`}>Make Admin</Link>,
                admin && <Link className="text-decoration-none text-dark" onClick={logOut} to="/login">Log Out</Link>,

            ].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? '' : ''}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        
        
          <Switch>
            <Route exact path={path}>
              <MyOrders></MyOrders>
            </Route>

            <Route path={`${path}/myorders`}>
              <MyOrders></MyOrders>
            </Route>

            <Route path={`${path}/addreviews`}>
              <AddReviews></AddReviews>
            </Route>

            <AdminRoute path={`${path}/addproduct`}>
              <AddProduct></AddProduct>
            </AdminRoute>

            <AdminRoute path={`${path}/deleteproduct`}>
              <DeleteProduct></DeleteProduct>
            </AdminRoute>

            <AdminRoute path={`${path}/deletereviews`}>
              <DeleteReviews></DeleteReviews>
            </AdminRoute>

            <AdminRoute path={`${path}/makeadmin`}>
              <MakeAdmin></MakeAdmin>
            </AdminRoute>
        </Switch>


      </Box>
    </Box>
  );
}
