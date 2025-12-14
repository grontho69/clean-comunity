import React from 'react'

const MyIssues = () => {
  return (
  <div className="max-w-6xl mx-auto px-4 py-10">
    <h2 className="text-3xl font-bold mb-6">My Issues</h2>

    {/* ISSUES TABLE */}
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {/* Only logged-in user's issues will be rendered here */}
        </tbody>
      </table>
    </div>

    {/* UPDATE ISSUE MODAL */}
    <dialog className="modal">
      <div className="modal-box max-w-lg">
        <h3 className="font-bold text-xl mb-4">
          Update Issue
        </h3>

        <form className="space-y-3">
          <input
            type="text"
            className="input input-bordered w-full"
            placeholder="Issue Title"
          />

          <select className="select select-bordered w-full">
            <option>Garbage</option>
            <option>Road Damage</option>
            <option>Broken Public Property</option>
            <option>Illegal Construction</option>
          </select>

          <input
            type="number"
            className="input input-bordered w-full"
            placeholder="Suggested Budget"
          />

          <textarea
            className="textarea textarea-bordered w-full"
            placeholder="Issue Description"
          ></textarea>

          {/* STATUS OPTION */}
          <div>
            <p className="font-semibold mb-1">Status</p>
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input type="radio" name="status" />
                <span>Ongoing</span>
              </label>

              <label className="flex items-center gap-2">
                <input type="radio" name="status" />
                <span>Ended</span>
              </label>
            </div>
          </div>

          <button className="btn btn-primary w-full">
            Update Issue
          </button>
        </form>
      </div>
    </dialog>

    {/* DELETE CONFIRMATION MODAL */}
    <dialog className="modal">
      <div className="modal-box text-center">
        <h3 className="font-bold text-xl mb-4">
          Confirm Delete
        </h3>

        <p className="mb-6">
          Are you sure you want to permanently delete this issue?
        </p>

        <div className="flex justify-center gap-4">
          <button className="btn btn-error">
            Yes, Delete
          </button>

          <button className="btn">
            Cancel
          </button>
        </div>
      </div>
    </dialog>
  </div>
);

}

export default MyIssues
