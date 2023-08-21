import React from 'react';
import { Card, Col, Row, Container, Button } from 'reactstrap';
import { Icon } from '@iconify/react';
import FeedbackCard from '../components/FeedbackCard';
import { feedbacks } from '../portfolio';
import { socialLinks } from '../portfolio';

const GithubProfileCard = () => {
  return (
    <Card className="section-sm bg-gradient-info shadow-lg border-0">
      {/* <Container style={{ marginBottom: '100px' }}>
        <Container>
          <div className="d-flex p-4">
            <div>
              <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                <i className="fa fa-star text-info" />
              </div>
            </div>
            <div className="pl-4">
              <h4 className="display-3" style={{ color: '#fff' }}>
                Our Team
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
      </Container> */}
      <Row xs="1" sm="2" md="4">
        <Col
          style={{
            marginTop: '30px',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            flexDirection: 'column',
            paddingLeft: '40px',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              color: '#fff',
              fontFamily: 'sans-serif',
              fontSize: '20px',
              fontStyle: 'italic',
              textDecorationLine: 'overline',
            }}
          >
            Connect
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  marginTop: '20px',
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="twitter"
                  rel="noopener"
                  aria-label="Linkedin"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-linkedin" />
                  </span>
                </Button>
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                paddingLeft: '20px',
              }}
            >
              <div
                style={{
                  marginTop: '20px',
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="github"
                  rel="noopener"
                  aria-label="Github"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-github" />
                  </span>
                </Button>
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                paddingLeft: '20px',
              }}
            >
              <div
                style={{
                  marginTop: '20px',
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <Button
                  className="btn-icon-only rounded-circle"
                  color="twitter"
                  target="_blank"
                  rel="noopener"
                  aria-label="Twitter"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-twitter" />
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </Col>
        <Col
          style={{
            marginTop: '30px',
            paddingLeft: '40px',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            flexDirection: 'column',
            cursor: 'default',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              color: '#fff',
              fontFamily: 'sans-serif',
              fontSize: '20px',
              fontStyle: 'italic',
              textDecorationLine: 'overline',
            }}
          >
            Contact
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
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
                  +919932670114
                </p>
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
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
            </div>
          </div>
        </Col>
        <Col
          style={{
            marginTop: '30px',
            paddingLeft: '40px',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            flexDirection: 'column',
            cursor: 'default',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              color: '#fff',
              fontFamily: 'sans-serif',
              fontSize: '20px',
              fontStyle: 'italic',
              textDecorationLine: 'overline',
            }}
          >
            Locations
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              flexDirection: 'row',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                flexDirection: 'column',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'center' }}>
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
                    icon={'ion:location'}
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
                    Bangalore, India
                  </p>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
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
                    icon={'ion:location'}
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
                    Hyderabad, India
                  </p>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
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
                    icon={'ion:location'}
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
                    Kolkata, India
                  </p>
                </div>
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                flexDirection: 'column',
                marginLeft: '20px',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'center' }}>
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
                    icon={'ion:location'}
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
                    Seattle, USA
                  </p>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
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
                    icon={'ion:location'}
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
                    Toronto, Canada
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Card>
  );
};

export default GithubProfileCard;
