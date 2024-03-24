import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Guest App">
    <Container>
      <Title>
        Guest App <Badge>2023</Badge>
      </Title>
      <P>
        Guest app is a mobile app that helps users to control hotel doors and
        elevators during some certain time.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Google Play</Meta>
          <Link href="https://play.google.com/store/apps/details?id=com.estech.android.lock&hl=en-KR">
            Guest Android <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>App Store</Meta>
          <Link href="https://apps.apple.com/kr/app/est-lock/id6450660712?l=en-GB">
            Guest IOS <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>IOS / Android application</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Swift, Java, Nodejs, MySql</span>
        </ListItem>
      </List>
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/guest.png" alt="guest" />
        <WorkImage src="/images/works/guest-2.png" alt="guest" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
