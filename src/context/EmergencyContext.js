
import React, { createContext, useState } from 'react';

export const EmergencyContext = createContext();

export const EmergencyProvider = ({ children }) => {
  const [emergencyState, setEmergencyState] = useState(false);

  return (
    <EmergencyContext.Provider value={{ emergencyState, setEmergencyState }}>
      {children}
    </EmergencyContext.Provider>
  );
};
