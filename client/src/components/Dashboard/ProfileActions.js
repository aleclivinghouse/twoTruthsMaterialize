import React from 'react';
import {Link} from 'react-router-dom';

const ProfileActions = () => {
  return (
    <div className="btn-group mb-4">
      <a href="/edit-profile" className="btn btn-light">
        <i class="fas fa-user-circle text-info mr-1" /> Edit Profile
      </a>
    </div>
  );
};

export default ProfileActions;
