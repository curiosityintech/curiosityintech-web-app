import React from 'react';
import { Card, CardBody } from 'reactstrap';
import Fade from 'react-reveal/Fade';
import { FeedbackType } from '../types/sections';

const FeedbackCard = ({ name, profilePic }: FeedbackType) => {
  return (
    <Fade bottom duration={500}>
      <div className="d-flex px-3">
        <div
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            display: 'flex',
          }}
        >
          <div
            style={{
              backgroundColor: 'rgba(89, 180, 199, 0.8)',
              width: '12rem',
              height: '12rem',
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '10px',
            }}
          >
            <img
              src={profilePic}
              style={{
                width: '10rem',
                height: '10rem',
                borderRadius: '50%',
              }}
              className="mb-3"
              alt={profilePic}
            />
          </div>
          <h5
            style={{ color: '#fff', justifyContent: 'center', display: 'flex' }}
          >
            {name}
          </h5>
          <h5
            style={{ color: '#fff', justifyContent: 'center', display: 'flex' }}
          >
            Co-founder
          </h5>
        </div>
      </div>
    </Fade>
  );
};

export default FeedbackCard;
