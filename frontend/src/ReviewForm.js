import React, { Component } from "react";
import { Form, Button, Col } from "react-bootstrap";

export class ReviewForm extends Component {
  render() {
    return (
      <div>
        <Form onSubmit={(e) => this.props.newReview(e)}>
          <Form.Row className="align-items-center">
            <Col xs="auto">
              <Form.Group controlId="new-review-form">
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Leave a review"
                />
              </Form.Group>
              <Form.Group controlId="new-review-form">
                <Form.Control size="med" placeholder="Username" />
              </Form.Group>

              <Form.Group controlId="new-review-form">
                <Form.Control
                  size="lg"
                  type="hidden"
                  //   value={this.props.movie.id}
                />
              </Form.Group>
              <Form.Group controlId="new-review-form">
                <Form.Control
                  size="lg"
                  type="hidden"
                  //   value={this.props.user.id}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Col>
          </Form.Row>
        </Form>
      </div>
    );
  }
}
export default ReviewForm;
