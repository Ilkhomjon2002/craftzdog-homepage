import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="ZIP">
    <Container>
      <Title>
        ZIP <Badge>2023</Badge>
      </Title>
      <P>
        ZIP is an ecommerce website that I have developed as a school project.
        Also, it helped me to get A+ from that school project.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://zip-9yyv-keodyiu86-ilkhomjon2002.vercel.app/">
            ZIP <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/Ilkhomjon2002/zip">
            GITHUB <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web application</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Next js, TypeScript, Chakra UI </span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/zip_eye_catch.png" alt="zip" />
      <WorkImage src="/images/works/zip_cart.png" alt="zip" />
      <WorkImage src="/images/works/zip_wishlist.png" alt="zip" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
