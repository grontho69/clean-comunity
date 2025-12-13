import React from 'react'

const MyIssues = () => {
  return (
    <div className="min-h-screen p-6">
      <h2 className="text-3xl font-bold mb-6">My Issues</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {[1, 2].map((i) => (
          <div key={i} className="card bg-base-100 shadow">
            <div className="card-body">
              <h3 className="card-title">My Issue</h3>
              <p>Status: Pending</p>
              <button className="btn btn-outline btn-sm">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyIssues
