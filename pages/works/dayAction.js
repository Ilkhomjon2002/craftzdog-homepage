import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="DayAction Admin">
    <Container>
      <Title>
        DayAction Admin <Badge>2023-2024</Badge>
      </Title>
      <P>
        DayAction admin is a web application which is used for managing,
        monitoring and analaysing. It is part of an IOT project. Where indoor
        training activities of users are monitored.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.day-action-user.com:8091">
            https://www.day-action-user.com/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web application</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Vuejs, TypeScript, Nodejs, Express, MySql, Pinia</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/tesfy_eye_catch.png" alt="Tesfy" />
      <WorkImage src="/images/works/tesfy_exercise.png" alt="Tesfy_exercise" />
      {/* <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="https://www.youtube.com/embed/-qBavwqc_mY"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </AspectRatio> */}
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
