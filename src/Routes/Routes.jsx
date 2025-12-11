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


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/all-issues",
        element: <AllIssues />,
      },
      {
        path: "/issue-card",
        element: <IssueCard/>
      },
      {
        path: "/add-issue",
        element: <AddIssue/>
          
        
      },
      {
        path: "/issue-details",
        elememnt:<IssueDetails/>,
      },
      {
        path: "/my-contributions",
        elememnt:<MyContribution/>,
      },
{
        path: "/my-issue",
        elememnt:<MyIssues/>,
      },
      {
        path: "/error",
        elememnt:<NotFound/>,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
