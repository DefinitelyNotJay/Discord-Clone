import { UserButton } from '@clerk/nextjs';
import { ModeToggle } from '@/components/ui/mode-toggle';
import React from 'react';

const Home = () => {
  return (
    <div>
      <UserButton afterSignOutUrl="/"></UserButton>
      <ModeToggle></ModeToggle>
    </div>
  );
};

export default Home;
