import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Imezy">
    <Container>
      <Title>
        Imezy <Badge>2022 - 2023</Badge>
      </Title>
      <P>
        Imezy is a web application based on stable diffusion which is a model
        for generating images. Imezy has features such as image to image, text
        to image and image enhancer.
      </P>
      <P>The service is stopped now.</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.aivill.co.kr/">
            AIVILL <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web application</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, Javascript, Scss, Redux, Python, Django</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/imezy_eye_catch.png" alt="imezy" />
      <WorkImage src="/images/works/imezy_generated.png" alt="imezy" />
      <WorkImage src="/images/works/imezy_main.png" alt="imezy" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
