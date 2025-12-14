import React from 'react'
import { useLoaderData } from 'react-router';
import IssueCard from '../components/IssueCard';

const AllIssues = () => {
  const data = useLoaderData()
  console.log(data)
  return (
   <div className="max-w-7xl mx-auto px-4 mt-10 mb-10">
      <h2 className="text-3xl font-bold mb-6 text-center">All Issues</h2>

      <div className="grid md:grid-cols-3 gap-6">
       {data.map(issue => <IssueCard key={issue._id} issue={issue}/>)}
      </div>
    </div>
  )
}

export default AllIssues
