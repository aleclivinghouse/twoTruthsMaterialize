import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import isEmpty from '../../validation/is-empty';


class ProfileItem extends Component {
  render(){
    const profile = this.props.profile;
    return(
      <div className="card card-body bg-light mb-3">
        <div className="row">
          <div className="col-lg-6 col-md-4 col-8">
              <h3>{profile.user.name}</h3>
              <p>{profile.bio}</p>
              <p>{profile.handle}</p>
          </div>
        </div>
        <div className="cold-md-4 d-none d-md-block">
          <h4>Skill Set</h4>
          <ul className="list-group">
            {profile.skills.map((skill, index) => (
              <li key={index} className="list-group-item">
                <p>
                {skill}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default ProfileItem;
