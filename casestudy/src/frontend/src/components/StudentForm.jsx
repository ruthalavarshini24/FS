import { useEffect, useState } from 'react';

const EMPTY = { regNo: '', name: '', branch: '', section: '', cgpa: '' };

export default function StudentForm({ editing, onSave, onCancel }) {
  const [form, setForm] = useState(EMPTY);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    setForm(editing
      ? { regNo: editing.regNo, name: editing.name, branch: editing.branch,
          section: editing.section, cgpa: editing.cgpa ?? '' }
      : EMPTY);
  }, [editing]);

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setSaving(true);
    const payload = { ...form, cgpa: form.cgpa === '' ? undefined : Number(form.cgpa) };
    const ok = await onSave(payload);
    if (ok) setForm(EMPTY);
    setSaving(false);
  };

  return (
    <form className="card form" onSubmit={submit}>
      <h2>{editing ? 'Edit Student' : 'Add Student'}</h2>
      <div className="grid">
        <input name="regNo" placeholder="Registration No" value={form.regNo} onChange={change} required />
        <input name="name" placeholder="Name" value={form.name} onChange={change} required />
        <input name="branch" placeholder="Branch (e.g. CSE-AIML)" value={form.branch} onChange={change} required />
        <input name="section" placeholder="Section" value={form.section} onChange={change} required />
        <input name="cgpa" type="number" step="0.01" min="0" max="10" placeholder="CGPA (0-10)" value={form.cgpa} onChange={change} />
      </div>
      <div className="actions">
        <button type="submit" disabled={saving}>{saving ? 'Saving...' : editing ? 'Update' : 'Add'}</button>
        {editing && <button type="button" className="secondary" onClick={onCancel}>Cancel</button>}
      </div>
    </form>
  );
}
