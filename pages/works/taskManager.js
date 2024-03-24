import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Task Manager">
    <Container>
      <Title>
        Task Manager <Badge>2023</Badge>
      </Title>
      <P>
        Task Manager is a web app built for organizing users time wisely and
        efficiently.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://task-manager-flax.vercel.app/">
            Task Manager <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/Ilkhomjon2002/Task-manager">
            GITHUB <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web application</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, Javascript, Scss, Redux</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/task_manager_eye_catch.png" alt="task" />
      <WorkImage src="/images/works/task_manager.png" alt="task" />
      <WorkImage src="/images/works/task_manager_dark.png" alt="task" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
