import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { toast } from "react-toastify";

const AddIssue = () => {
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const issueData = {
      title: form.title.value,
      category: form.category.value,
      location: form.location.value,
      description: form.description.value,
      image: form.image.value,
      amount: form.amount.value,
      status: "ongoing",
      
      email: user?.email,
      date: new Date(),
    };

    console.log("Issue Data:", issueData);

    toast.success("Issue added successfully!");
    form.reset();
    fetch('http://localhost:3000/issues', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify(issueData)
    })
      .then(res => res.json())
      .then(data => {
      console.log(data)
      })
      .catch(err => {
      console.log(err)
    })
  };

  return (
    <div className="max-w-xl mx-auto mt-10 mb-10 p-6 bg-white rounded-md shadow">
      <h2 className="text-2xl font-bold mb-6">Add New Issue</h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Issue Title */}
        <input
          type="text"
          name="title"
          placeholder="Issue Title"
          className="input input-bordered w-full"
          required
        />

        {/* Category */}
        <select
          name="category"
          className="select select-bordered w-full"
          required
        >
          <option value="">Select Category</option>
          <option value="Garbage">Garbage</option>
          <option value="Road Damage">Road Damage</option>
          <option value="Broken Public Property">Broken Public Property</option>
          <option value="Illegal Construction">Illegal Construction</option>
        </select>

        {/* Location */}
        <input
          type="text"
          name="location"
          placeholder="Location"
          className="input input-bordered w-full"
          required
        />

        {/* Description */}
        <textarea
          name="description"
          placeholder="Issue Description"
          className="textarea textarea-bordered w-full"
          required
        />

        {/* Image URL */}
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          className="input input-bordered w-full"
        />

        {/* Suggested Budget */}
        <input
          type="number"
          name="amount"
          placeholder="Suggested Fix Budget"
          className="input input-bordered w-full"
          required
        />

        {/* Email (Read Only) */}
        <input
          type="email"
          value={user?.email || ""}
          readOnly
          className="input input-bordered w-full bg-gray-100"
        />

        <button className="btn btn-primary w-full">
          Submit Issue
        </button>
      </form>
    </div>
  );
};

export default AddIssue;
