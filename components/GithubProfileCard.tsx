import React from 'react';
import { Card, Col, Row, Container } from 'reactstrap';
import { GithubUserType } from '../types';
import SocialLinks from './SocialLinks';

const GithubProfileCard = () => {
  return (
    <Card className="section-lg bg-gradient-info shadow-lg border-0">
      <Container className="">
        <div className="p-2">
          <Row className="">
            <Col lg="8" className="order-lg-1">
              <h2 className="text-white">Reach Out to us!</h2>
              <p className="text-white mt-3">
                DISCUSS A PROJECT OR JUST WANT TO SAY HI? GET YOUR FREE
                CONSULTATION NOW
              </p>

              <SocialLinks />
            </Col>
          </Row>
        </div>
      </Container>
    </Card>
  );
};

export default GithubProfileCard;
