
import { createBrowserRouter } from 'react-router';
import MainLayout from '../Layout/MainLayout';
import Home from '../pages/Home';
import AddIssue from '../pages/AddIssue';
import AllIssues from '../pages/AllIssues';
import IssueDetails from '../pages/IssueDetails';
import MyContribution from '../pages/MyContribution';
import MyIssues from '../pages/MyIssues';
import Register from '../pages/Register';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import IssueCard from '../components/IssueCard';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [{
      index: true,
      element:<Home/>,
    },
      {
        path: '/add-issue',
        element:<AddIssue/>,
      },
      {
      path:'/all-issue',
      element:<AllIssues/>,
      
      },
      {
        path: "/issue-details",
        element:<IssueDetails/>,
      },
      {
        path: '/my-contributions',
        element:<MyContribution/>,
      },
      {
        path: '/my-issues',
        element: <MyIssues />,
        
      },
      {
        path: '/register',
        element:<Register/>,
      },
      {
        path: '/login',
        element:<Login/>,
      },
      {
        path: '/error',
        element:<NotFound/>,
      },
      {
        path: '/issue-card',
        element:<IssueCard/>,
      },
    
    ]
    
  }
])
