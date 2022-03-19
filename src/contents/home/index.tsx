import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { api } from '../../services/api';

export function HomeContent() {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h1>HomeContents</h1>
      <p>{user?.name}</p>
    </div>
  );
}