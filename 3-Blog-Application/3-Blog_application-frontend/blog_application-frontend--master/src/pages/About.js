import Base from "../components/Base";
import { Card, CardText, CardTitle, Col, Container, Row } from "reactstrap";

const About = () => {
  return (
    <Base>
      <Container>
        <Card className="mt-4" color="dark" inverse>
          <Row>
            <Col
              sm={{
                size: 10,
                offset: 1,
              }}
            >
              <CardTitle>
                <h1>
                  <b>About My Blogs:</b>
                </h1>
              </CardTitle>
              <CardText>Welcome to My Blogs – Your Creative Space!</CardText>
              <CardTitle>
                <h3>Our Mission</h3>
              </CardTitle>
              <CardText>
                At My Blogs, we believe in the power of words and the magic of
                self-expression. Our mission is to provide a platform where
                individuals can share their thoughts, stories, and passions with
                the world. We're here to empower writers, bloggers, and content
                creators of all kinds to connect, inspire, and build
                communities.
              </CardText>
              <CardTitle>
                <h3>What Sets Us Apart</h3>
              </CardTitle>
              <CardText>
                <b>Innovation:</b> We're not just a blogging platform; we're a
                hub for innovation. Our cutting-edge features, intuitive design,
                and user-friendly interface make My Blogs the perfect canvas for
                your creativity.
              </CardText>
              <CardText>
                <b>Community Focus:</b> We value the sense of community. Whether
                you're a seasoned blogger or just starting, our platform is
                designed to foster connections, conversations, and
                collaborations. Your voice matters, and we're here to amplify
                it.
              </CardText>
              <CardText>
                <b>Diversity and Inclusivity:</b> Every story is unique, and we
                celebrate diversity. My Blogs is a space that welcomes creators
                from all walks of life. We strive to create an inclusive
                environment where everyone feels heard and respected.
              </CardText>
              <CardTitle>
                <h3>Our Features</h3>
              </CardTitle>
              <CardText>
                <ul>
                  <li>
                    <b>Seamless Writing Experience:</b> Our distraction-free
                    writing environment lets you focus on what matters – your
                    content.
                  </li>
                  <li>
                    <b>Beautiful Themes:</b> Customize your blog with a range of
                    stunning themes to reflect your style and personality.
                  </li>
                  <li>
                    <b>Built-in Social Sharing:</b> Share your content
                    effortlessly across social media platforms and grow your
                    audience.
                  </li>
                  <li>
                    <b>Analytics Dashboard:</b> Track your blog's performance
                    with our user-friendly analytics tools.
                  </li>
                </ul>
              </CardText>
              <CardTitle>
                <h3>Join Us on the Journey</h3>
              </CardTitle>
              <CardText>
                Thank you for being a part of the My Blogs community. Join us on
                this exciting journey of creativity, expression, and connection.
                <br />
                <br />
                Happy blogging!
                <br />
                <br />
                My Blogs Team
              </CardText>
            </Col>
          </Row>
        </Card>
      </Container>
    </Base>
  );
};

export default About;
