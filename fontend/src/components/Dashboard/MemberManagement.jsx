import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MemberManagement = () => {
  const [members, setMembers] = useState([]);
  const [search, setSearch] = useState('');
  const [newMember, setNewMember] = useState({
    email: '',
    password: '',
    phone: '',
    role: 'membre'
  });
  const [editMember, setEditMember] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:3000/api/auth/members', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setMembers(response.data);
    } catch (error) {
      console.error('Error fetching members', error);
      setError('Failed to fetch members');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (editMember) {
      setEditMember({ ...editMember, [name]: value });
    } else {
      setNewMember({ ...newMember, [name]: value });
    }
  };

  const handleAddMember = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:3000/api/auth/signup', newMember, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      fetchMembers();
      setNewMember({ email: '', password: '', phone: '', role: 'membre' });
    } catch (error) {
      console.error('Error adding member', error);
      setError('Failed to add member');
    }
  };

  const handleDeleteMember = async (id) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:3000/api/auth/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      fetchMembers();
    } catch (error) {
      console.error('Error deleting member', error);
      setError('Failed to delete member');
    }
  };

  const handleEditMember = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.put(`http://localhost:3000/api/auth/users/${editMember._id}`, editMember, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      fetchMembers();
      setEditMember(null);
    } catch (error) {
      console.error('Error updating member', error);
      setError('Failed to update member');
    }
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredMembers = members.filter(member =>
    member.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Manage Members</h2>
      {error && <p>{error}</p>}
      <input
        type="text"
        placeholder="Search members"
        value={search}
        onChange={handleSearch}
      />
      <div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={editMember ? editMember.email : newMember.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={editMember ? editMember.password : newMember.password}
          onChange={handleChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={editMember ? editMember.phone : newMember.phone}
          onChange={handleChange}
        />
        <select name="role" value={editMember ? editMember.role : newMember.role} onChange={handleChange}>
          <option value="membre">Membre</option>
          <option value="admin">Admin</option>
          <option value="super-admin">Super-Admin</option>
        </select>
        <button onClick={editMember ? handleEditMember : handleAddMember}>
          {editMember ? 'Update Member' : 'Add Member'}
        </button>
      </div>
      <ul>
        {filteredMembers.map((member) => (
          <li key={member._id} class="membres">
            <p>Email: {member.email}</p>
            <p>Phone: {member.phone}</p>
            <p>Role: {member.role}</p>
            <button onClick={() => setEditMember(member)}>Edit</button>
            <button onClick={() => handleDeleteMember(member._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MemberManagement;
