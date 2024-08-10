import React, { useState } from 'react';
//import { Button } from "@/components/ui/button"
import { TaskAdd } from './components/TaskAdd.tsx';
import { Task } from './components/Task.tsx';

export function App() {
  return (
    
    <div><TaskAdd/><Task/></div>
    
  );
};

export default App