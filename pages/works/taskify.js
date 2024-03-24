import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Taskify">
    <Container>
      <Title>
        Taskify <Badge>2023</Badge>
      </Title>
      <P>
        Taskify is a mobile application that developed in a team for Mobile
        application class at University. Where all team members got A+.
      </P>
      <P>The service is stopped now.</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/jt1402/Taskify_app">
            GITHUB <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Docs</Meta>
          <Link href="https://docs.google.com/document/d/14QS9YH5L5qGbhrmugbf5d1M2TCvVU_x3/edit?usp=sharing&ouid=101733510478539311437&rtpof=true&sd=true">
            Google Drive <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Cross (IOS, Android) Platform application</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Dart, Flutter, SqlLite</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/taskify.png" alt="taskify" />
      <WorkImage src="/images/works/taskify_login.png" alt="taskify" />
      <WorkImage src="/images/works/taskify_signup.png" alt="taskify" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
