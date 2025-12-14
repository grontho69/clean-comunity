import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";

import Home from "../pages/Home";
import AddIssue from "../pages/AddIssue";
import AllIssues from "../pages/AllIssues";
import Register from "../pages/Register";
import Login from "../pages/Login";
import IssueDetails from "../pages/IssueDetails";
import MyContribution from "../pages/MyContribution";
import MyIssues from "../pages/MyIssues";
import NotFound from "../pages/NotFound";

import IssueCard from "../components/IssueCard";
import PrivateRoute from "../components/Privateroute";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
        loader:()=> fetch('http://localhost:3000/recent-complaints')
      },

      {
        path: "all-issues",
        element: <AllIssues />,
        loader:()=> fetch('http://localhost:3000/issues')
       
      },


      {
        path: "issue-card",
        element: <IssueCard />,
      },

      {
        path: "issue-details/:id",
        element: (
          <PrivateRoute>
             <IssueDetails />
          </PrivateRoute>
        ),
      },

      {
        path: "add-issue",
        element: (
          <PrivateRoute>
             <AddIssue />
          </PrivateRoute>
        ),
      },

      {
        path: "my-contributions",
        element: (
          <PrivateRoute>
            <MyContribution />
          </PrivateRoute>
        ),
      },

      {
        path: "my-issues",
        element: (
          <PrivateRoute>
            <MyIssues />
          </PrivateRoute>
        ),
      },

      {
        path: "register",
        element: <Register />,
      },

      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);
