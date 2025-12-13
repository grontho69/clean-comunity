import React from 'react'

const MyContribution = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">My Contribution</h2>

      <table className="table">
        <thead>
          <tr>
            <th>Issue</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Report</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="4" className="text-center text-gray-500">
              No contribution found
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default MyContribution
