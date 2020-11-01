import React from "react"
import {Link} from 'gatsby'
import {Row, Col, Tag, Card, Icon} from "antd"
import { EnvironmentFilled, PhoneFilled, MailFilled } from "@ant-design/icons"

import './index.css'

const EventCard = props => {
  console.log('data', props.data)
  return (
    <Link to={`/events/1`}>
      <Card style={{color: "#333333" }} hoverable >
        <Row className="event-card">
          <Col md={3}>
            <div className="image-holder"></div>
          </Col>
          <Col md={21}>
            <Row>
              <Col md={6}>
                <b>{props.data.date}</b>
              </Col>
              <Col md={4}>
                <Tag color="blue">{`${props.data.type}`}</Tag>
              </Col>
              <Col md={6}>
                <PhoneFilled style={{ marginRight: 4 }} />
                +91 9673682842
              </Col>
            </Row>
            <Row>
              <Col className="event-name" span={8}>
                {props.data.title}
              </Col>
              <Col offset={2} md={6}>
                <MailFilled style={{ marginRight: 4 }} />
                email@startupgoa.org
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <EnvironmentFilled style={{ marginRight: 4 }} />
                Dona Paula
              </Col>
            </Row>
          </Col>
        </Row>
      </Card>
    </Link>
  )
}

export default EventCard
