"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';

const Onboarding = () => {
  const router = useRouter();
  const { user, isLoading } = useKindeBrowserClient();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (user?.email) {
      setEmail(user.email);
    }
  }, [user]);

  const handleOnboarding = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/add-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, userId: user?.id }),
      });

      if (response.ok) {
        router.push('/Dashboard');
      } else {
        console.error('Failed to onboard user');
      }
    } catch (error) {
      console.error('An error occurred during onboarding:', error);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>; 
  }

  return (
    <div>
      <h1>Onboarding</h1>
      <form onSubmit={handleOnboarding}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          readOnly
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Onboarding;