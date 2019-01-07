import React from 'react';
import {Link} from 'react-router-dom';

const ProfileActions = () => {
  return (
    <div className="btn-group mb-4">
      <a href="/edit-profile" className="btn btn-light">
        <i class="fas fa-user-circle text-info mr-1" /> Edit Profile
      </a>
      <a href="#" className="btn btn-light">
        <i className="fab fa-black-tie text-info mr-1" />
        Add Experience
      </a>
      <a href="#" className="btn btn-light">
        <i className="fas fa-graduation-cap text-info mr-1" />
        Add Education
      </a>
    </div>
  );
};

export default ProfileActions;
