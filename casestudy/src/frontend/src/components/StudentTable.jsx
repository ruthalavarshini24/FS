export default function StudentTable({ students, onEdit, onDelete }) {
  if (!students.length) return <p className="card">No students yet. Add one above.</p>;
  return (
    <div className="card">
      <h2>Students ({students.length})</h2>
      <table>
        <thead>
          <tr><th>Reg No</th><th>Name</th><th>Branch</th><th>Section</th><th>CGPA</th><th></th></tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <tr key={s._id}>
              <td>{s.regNo}</td>
              <td>{s.name}</td>
              <td>{s.branch}</td>
              <td>{s.section}</td>
              <td>{s.cgpa ?? '-'}</td>
              <td className="actions">
                <button className="secondary" onClick={() => onEdit(s)}>Edit</button>
                <button className="danger" onClick={() => onDelete(s)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
