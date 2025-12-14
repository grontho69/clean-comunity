import React, { use } from 'react'
import IssueCard from './IssueCard';
import RecentCard from './RecentCard';

const RecentComplaints = ({ RecentComplaintsPromise }) => {
  const recent = use(RecentComplaintsPromise);
  console.log(recent)
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {
        recent.map(recent => <RecentCard key={recent._id}
        recent={recent}
        >
          
        </RecentCard>)
      }
    </div>
  )
}

export default RecentComplaints
