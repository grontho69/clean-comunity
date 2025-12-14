const MyContribution = () => {
  return (
    <div className="max-w-6xl mx-auto mt-10 px-4">
      <h2 className="text-3xl font-bold mb-6">My Contributions</h2>

      <table className="table w-full">
        <thead>
          <tr>
            <th>Issue</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {[1, 2].map((i) => (
            <tr key={i}>
              <td>Issue Title</td>
              <td>৳200</td>
              <td>2025-01-01</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="btn btn-outline mt-6">
        Download PDF
      </button>
    </div>
  );
};

export default MyContribution;
