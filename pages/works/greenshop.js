import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Greenshop">
    <Container>
      <Title>
        Greenshop <Badge>2024</Badge>
      </Title>
      <P>
        Greenshop is a web application which I am developing to prove my full
        stack skills. It is still in the process of development.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/Ilkhomjon2002/fullstack-greenshop">
            Greenshop <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web application</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, TypeScript, Zustand, Nodejs, Express, Mongo Db</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/greenshop.png" alt="greenshop" />
      {/* <WorkImage src="/images/works/imezy_generated.png" alt="imezy" />
      <WorkImage src="/images/works/imezy_main.png" alt="imezy" /> */}
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
