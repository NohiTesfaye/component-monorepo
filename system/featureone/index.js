import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { UserCard, LoadingSpinner } from 'your-ui-components'; // Importing UI components
import { fetchUserData } from 'your-utils'; // Importing a utility function

const UserProfile = ({ userId }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadUserData = async () => {
      try {
        setLoading(true);
        const data = await fetchUserData(userId);
        setUser(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    loadUserData();
  }, [userId]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <div className="error-message">Error: {error}</div>;
  }

  return (
    <section className="user-profile">
      <header>
        <h1>User Profile</h1>
      </header>
      <main>
        <UserCard user={user} />
      </main>
    </section>
  );
};

UserProfile.propTypes = {
  userId: PropTypes.string.isRequired
};

UserProfile.defaultProps = {
  userId: 'current' // Default value if none provided
};

export default UserProfile;
