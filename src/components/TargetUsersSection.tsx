
import React, { ReactNode } from 'react';

interface TargetUser {
  icon: ReactNode;
  title: string;
  description: string;
}

interface TargetUsersSectionProps {
  title?: string;
  subtitle?: string;
  users: TargetUser[];
}

const TargetUsersSection: React.FC<TargetUsersSectionProps> = ({
  title = "Target Users",
  subtitle = "Who can benefit from our solution",
  users
}) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gowith-dark-blue mb-4">{title}</h2>
          <p className="text-lg text-gray-600">{subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {users.map((user, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 border-t-4 border-gowith-medium-blue">
              <div className="h-14 w-14 rounded-full bg-gowith-light-blue bg-opacity-20 flex items-center justify-center mb-4">
                {React.cloneElement(user.icon as React.ReactElement, {
                  className: "w-7 h-7 text-gowith-medium-blue"
                })}
              </div>
              
              <h3 className="text-xl font-bold text-gowith-dark-blue mb-2">{user.title}</h3>
              <p className="text-gray-600">{user.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetUsersSection;
