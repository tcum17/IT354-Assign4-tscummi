import React from 'react';
import { useState } from 'react';
import BlogForm from './components/BlogForm';
import RemovePost from './components/RemovePost';
import posts from './components/Posts';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';

export default function App() {
  const [users, setUsers] = useState(posts);

  const submitPost = (user) => {
    const num = Math.floor(Math.random() * 10000) + 1;
    const newUser = { num, ...user };
    setUsers([...users, newUser]);
  };

  const deletePost = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div class="container">
      <div class="row">
        <BlogForm onAdd={submitPost} />
        {users.length > 0 ? (
          <RemovePost users={users} onDelete={deletePost} />
        ) : (
          'There are currently no posts'
        )}
      </div>
    </div>
  );
}
