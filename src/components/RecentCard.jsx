import React from 'react'
import { Link } from 'react-router'

const RecentCard = ({recent}) => {
  const { image, title, description, category, status, _id } = recent
  return (
  <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={image}
      alt={title}
      className="h-48 w-full object-cover"
    />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {title}
      <div className={`badge ${
        status === "Pending" ? "badge-warning" :
        status === "Completed" ? "badge-success" :
        "badge-outline"
      }`}>
        {status}
      </div>
    </h2>
    <p>{description}</p>
    <div className="card-actions justify-start mt-2">
      <div className="badge badge-outline">{category}</div>
    </div>
    <div className="card-actions justify-end mt-2">
      <Link to={`/issue-details/${_id}`} className="btn btn-sm btn-primary">
        View Details
      </Link>
    </div>
  </div>
</div>

  )
}

export default RecentCard
