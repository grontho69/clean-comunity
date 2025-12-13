import React from 'react'

const AddIssue = () => {
  return (
   <div className="min-h-screen p-6">
      <h2 className="text-3xl font-bold mb-6">Report an Issue</h2>

      <form className="card bg-base-100 shadow p-6 max-w-lg">
        <input
          type="text"
          placeholder="Issue Title"
          className="input input-bordered w-full mb-4"
        />

        <textarea
          placeholder="Issue Description"
          className="textarea textarea-bordered w-full mb-4"
        ></textarea>

        <select className="select select-bordered w-full mb-4">
          <option disabled selected>
            Select Issue Type
          </option>
          <option>Garbage</option>
          <option>Broken Road</option>
          <option>Water Logging</option>
        </select>

        <button className="btn btn-primary w-full">
          Submit Issue
        </button>
      </form>
    </div>
  )
}

export default AddIssue
