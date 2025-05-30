import React from 'react';
import { UserCard } from 'your-ui-components'; // Importing a UI component
import { fetchUserData } from 'your-utils'; // Importing a utility function

const UserProfile = () => {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    const loadUserData = async () => {
      const data = await fetchUserData();
      setUser(data);
    };
    loadUserData();
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>User Profile</h1>
      <UserCard user={user} />
    </div>
  );
};

export default UserProfile;