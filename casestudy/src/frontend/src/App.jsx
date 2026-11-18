import { useEffect, useState, useCallback } from 'react';
import { fetchStudents, addStudent, updateStudent, deleteStudent } from './services/api';
import StudentForm from './components/StudentForm.jsx';
import StudentTable from './components/StudentTable.jsx';

const errMsg = (e) =>
  e.response?.data?.message ||
  (e.code === 'ECONNABORTED' ? 'Request timed out - the server may be waking up, try again.' : e.message);

export default function App() {
  const [students, setStudents] = useState([]);
  const [editing, setEditing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const load = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetchStudents();
      setStudents(res.data.data);
    } catch (e) {
      setError(errMsg(e));
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { load(); }, [load]);

  const handleSave = async (payload) => {
    setError('');
    try {
      if (editing) await updateStudent(editing._id, payload);
      else await addStudent(payload);
      setEditing(null);
      await load();
      return true;
    } catch (e) {
      setError(errMsg(e));
      return false;
    }
  };

  const handleDelete = async (s) => {
    if (!window.confirm(`Delete ${s.name} (${s.regNo})?`)) return;
    setError('');
    try {
      await deleteStudent(s._id);
      await load();
    } catch (e) {
      setError(errMsg(e));
    }
  };

  return (
    <div className="container">
      <h1>Student Management System</h1>
      {error && <div className="alert">{error}</div>}
      <StudentForm editing={editing} onSave={handleSave} onCancel={() => setEditing(null)} />
      {loading
        ? <p className="loader">Loading students... (the first request can take up to 50 s while the server wakes up)</p>
        : <StudentTable students={students} onEdit={setEditing} onDelete={handleDelete} />}
    </div>
  );
}
