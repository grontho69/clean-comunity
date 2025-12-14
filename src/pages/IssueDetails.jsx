import React from 'react'

const IssueDetails = () => {
return (
  <div className="max-w-6xl mx-auto py-10 px-4">
    {/* ISSUE DETAILS */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* LEFT: IMAGE */}
      <div>
        <img
          src=""
          alt="Issue"
          className="w-full h-80 object-cover rounded-lg border"
        />
      </div>

      {/* RIGHT: DETAILS */}
      <div className="space-y-3">
        <h2 className="text-3xl font-bold">Issue Title</h2>

        <p>
          <span className="font-semibold">Category:</span> Category Name
        </p>

        <p>
          <span className="font-semibold">Location:</span> Location Name
        </p>

        <p>
          <span className="font-semibold">Date:</span> Date Here
        </p>

        <p>
          <span className="font-semibold">Suggested Budget:</span> ৳ Amount
        </p>

        <p className="pt-2 text-gray-700">
          Issue description will be shown here.
        </p>

        <button className="btn btn-primary mt-4">
          Pay Clean-Up Contribution
        </button>
      </div>
    </div>

    {/* CONTRIBUTION MODAL */}
    <dialog className="modal">
      <div className="modal-box max-w-lg">
        <h3 className="font-bold text-xl mb-4">
          Clean-Up Contribution
        </h3>

        <form className="space-y-3">
          <input
            type="text"
            className="input input-bordered w-full"
            placeholder="Issue Title"
            readOnly
          />

          <input
            type="number"
            className="input input-bordered w-full"
            placeholder="Amount"
          />

          <input
            type="text"
            className="input input-bordered w-full"
            placeholder="Contributor Name"
          />

          <input
            type="email"
            className="input input-bordered w-full"
            placeholder="Email"
            readOnly
          />

          <input
            type="text"
            className="input input-bordered w-full"
            placeholder="Phone Number"
          />

          <input
            type="text"
            className="input input-bordered w-full"
            placeholder="Address"
          />

          <textarea
            className="textarea textarea-bordered w-full"
            placeholder="Additional Info (optional)"
          ></textarea>

          <button className="btn btn-success w-full">
            Submit Contribution
          </button>
        </form>
      </div>
    </dialog>

    {/* CONTRIBUTORS TABLE */}
    <div className="mt-12">
      <h3 className="text-2xl font-bold mb-4">
        Contributors
      </h3>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {/* contributors rows will go here */}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

}

export default IssueDetails
