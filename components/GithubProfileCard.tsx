import React from 'react';
import { Card, Col, Row, Container } from 'reactstrap';
import { Icon } from '@iconify/react';
import FeedbackCard from '../components/FeedbackCard';
import { feedbacks } from '../portfolio';

const GithubProfileCard = () => {
  return (
    <Card className="section bg-gradient-info shadow-lg border-0">
      <Container style={{ marginBottom: '100px' }}>
        <Container>
          <div className="d-flex p-4">
            <div>
              <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                <i className="fa fa-star text-info" />
              </div>
            </div>
            <div className="pl-4">
              <h4 className="display-3" style={{ color: '#fff' }}>
                Our Founders
              </h4>
            </div>
          </div>
          <Row className="row-grid align-items-center">
            {feedbacks.map((data, i) => {
              return (
                <Col
                  style={{ display: 'flex', justifyContent: 'center' }}
                  key={i}
                  lg={6}
                >
                  <FeedbackCard {...data} />
                </Col>
              );
            })}
          </Row>
        </Container>
      </Container>
      <Row
        xs="3"
        style={{
          bottom: '0',
          position: 'absolute',
          width: '100%',
          marginBottom: '15px',
        }}
      >
        <Col style={{ display: 'flex', justifyContent: 'center' }}>
          <div
            style={{
              marginTop: '20px',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Icon color="#fff" icon={'bi:phone'} data-inline="false"></Icon>
            <p
              className="mt-0"
              style={{
                marginBottom: '0px',
                marginLeft: '10px',
                color: '#fff',
              }}
            >
              +919731079079
            </p>
          </div>
        </Col>
        <Col style={{ display: 'flex', justifyContent: 'center' }}>
          <div
            style={{
              marginTop: '20px',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Icon color="#fff" icon={'ion:location'} data-inline="false"></Icon>
            <p
              className="mt-0"
              style={{
                marginBottom: '0px',
                marginLeft: '10px',
                color: '#fff',
              }}
            >
              Bangalore, India
            </p>
          </div>
        </Col>
        <Col style={{ display: 'flex', justifyContent: 'center' }}>
          <div
            style={{
              marginTop: '20px',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Icon
              color="#fff"
              icon={'iconamoon:email-duotone'}
              data-inline="false"
            ></Icon>
            <p
              className="mt-0"
              style={{
                marginBottom: '0px',
                marginLeft: '10px',
                color: '#fff',
              }}
            >
              curiosityintech@gmail.com
            </p>
          </div>
        </Col>
      </Row>
    </Card>
  );
};

export default GithubProfileCard;
