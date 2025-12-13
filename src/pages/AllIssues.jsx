import React from 'react'

const AllIssues = () => {
  return (
    <div className="min-h-screen p-6">
      <h2 className="text-3xl font-bold mb-6">All Reported Issues</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="card bg-base-100 shadow">
            <div className="card-body">
              <h3 className="card-title">Issue Title</h3>
              <p>Short issue description goes here.</p>
              <span className="badge badge-info">Garbage</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllIssues
