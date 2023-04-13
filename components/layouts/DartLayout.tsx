import React, { FC, ReactNode } from 'react';

type DartLayoutProps = {
  children: ReactNode;
}

export const DartLayout: FC<DartLayoutProps> = ({ children }) => {
  return (
    <div style ={{
        backgroundColor:'rgba(0,0,0,0.3)',
        borderRadius:'5px',
        padding: '10px',
    }}>
        <h3>Dart-Layout</h3>
        <div>
        {children}
        </div>
    </div>
  )
}
