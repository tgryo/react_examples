import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import TodayIcon from '@material-ui/icons/Today';
// core components/views
import Dashboard from '../containers/Dashboard';
import Orders from '../containers/Orders';
import Customers from '../containers/Customers';
import Reports from '../containers/Reports';
import Integrations from '../containers/Integrations';
import Learnjs from '../containers/Learnjs';

const dashboardRoutes = [
  {
    path: '/dashboard',
    sidebarName: 'Dashboard',
    navbarName: 'Material Dashboard',
    icon: DashboardIcon,
    component: Dashboard
  },
  {
    path: '/dashboard/orders',
    sidebarName: 'Orders',
    navbarName: 'Orders',
    icon: ShoppingCartIcon,
    component: Orders
  },
  {
    path: '/dashboard/customers',
    sidebarName: 'Customers',
    navbarName: 'Customers',
    icon: PeopleIcon,
    component: Customers
  },
  {
    path: '/dashboard/reports',
    sidebarName: 'Reports',
    navbarName: 'Reports',
    icon: BarChartIcon,
    component: Reports
  },
  {
    path: '/dashboard/integrations',
    sidebarName: 'Integrations',
    navbarName: 'Integrations',
    icon: LayersIcon,
    component: Integrations
  },
  {
    path: '/dashboard/learnjs',
    sidebarName: 'learnjs',
    navbarName: 'learnjs',
    icon: TodayIcon,
    component: Learnjs
  },
  { redirect: true, path: '*', to: '/login', navbarName: 'Redirect' }
];

export default dashboardRoutes;
