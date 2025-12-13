import React from 'react'
import { Link } from 'react-router'

const Home = () => {
  return (
   <div className="space-y-20 mt-10">

      {/* ================= HERO SECTION ================= */}
      <section className="hero min-h-[80vh] bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co/7vYV3Tn/clean-city.png"
            className="max-w-sm rounded-lg shadow-2xl"
            alt="Clean Community"
          />
          <div>
            <h1 className="text-5xl font-bold">
              Clean Community
            </h1>
            <p className="py-6 text-lg">
              Report local issues like garbage, broken roads, waterlogging and
              help build a cleaner, safer community together.
            </p>
            <Link to="/register" className="btn btn-primary">
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          What You Can Do
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body text-center">
              <h3 className="card-title justify-center">Report Issues</h3>
              <p>
                Report garbage, broken footpaths, illegal dumping and more in
                your local area.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body text-center">
              <h3 className="card-title justify-center">Track Status</h3>
              <p>
                Track the progress of reported issues and see community actions.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body text-center">
              <h3 className="card-title justify-center">Contribute</h3>
              <p>
                Join cleanup drives, contribute time or money and help your
                community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="bg-base-200 py-20">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            How It Works
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-6xl font-bold text-primary">1</div>
              <h4 className="text-xl font-semibold mt-4">Register / Login</h4>
              <p>Create an account to start reporting issues.</p>
            </div>

            <div className="text-center">
              <div className="text-6xl font-bold text-primary">2</div>
              <h4 className="text-xl font-semibold mt-4">Report Issue</h4>
              <p>Submit issue details with location and description.</p>
            </div>

            <div className="text-center">
              <div className="text-6xl font-bold text-primary">3</div>
              <h4 className="text-xl font-semibold mt-4">Community Action</h4>
              <p>Authorities or volunteers take action to resolve it.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATISTICS ================= */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="stats shadow w-full">

          <div className="stat text-center">
            <div className="stat-title">Total Issues</div>
            <div className="stat-value text-primary">120+</div>
          </div>

          <div className="stat text-center">
            <div className="stat-title">Active Users</div>
            <div className="stat-value text-secondary">80+</div>
          </div>

          <div className="stat text-center">
            <div className="stat-title">Contributions</div>
            <div className="stat-value text-accent">45+</div>
          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-primary text-primary-content py-20 mb-10">
        <div className="text-center space-y-6">
          <h2 className="text-4xl font-bold">
            Be a Part of the Change
          </h2>
          <p className="text-lg">
            Join Clean Community today and help make your city cleaner.
          </p>
          <Link to="/register" className="btn btn-secondary">
            Join Now
          </Link>
        </div>
      </section>

    </div>
  )
}

export default Home
