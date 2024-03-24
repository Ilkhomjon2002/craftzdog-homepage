import {
  Container,
  Heading,
  Divider,
  Spacer,
  Flex,
  Box,
  UnorderedList,
  ListItem,
  Button
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { BioSection, BioYear } from '../components/bio'

const Works = () => (
  <Layout title="Works">
    <Container>
      {/* <Heading as="h3" fontSize={20} mb={4}>
        Resume
      </Heading> */}

      <Section delay={0.2}>
        {/* <Divider my={6} /> */}

        <Heading as="h3" fontSize={20} mb={4}>
          Education
        </Heading>
      </Section>
      <Section delay={0.2}>
        {/* <Heading as="h3" variant="section-title">
          Education
        </Heading> */}
        <BioSection>
          <BioYear>2021 Mar - 2024 Dec</BioYear>
          <Spacer></Spacer>
          <Flex pl={'8'} justifyContent={'space-between'}>
            {' '}
            <Box fontWeight={'semibold'}>Bachelor`s degree</Box>{' '}
            <Box>Gachon University</Box>
          </Flex>
          <Flex pl={'8'} justifyContent={'space-between'}>
            {' '}
            <Box fontWeight={'semibold'}>Major</Box>{' '}
            <Box> Computer Science</Box>
          </Flex>
          <Flex pl={'8'} justifyContent={'space-between'}>
            {' '}
            <Box fontWeight={'semibold'}>GPA</Box> <Box> 4.49/4.5</Box>
          </Flex>
        </BioSection>
      </Section>

      <Section delay={0.1}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Experience
        </Heading>
      </Section>
      <Section delay={0.2}>
        <BioSection>
          <BioYear>2023 Apr - Present</BioYear>
          <Spacer></Spacer>
          <Flex pl={'8'} justifyContent={'space-between'}>
            {' '}
            <Box fontWeight={'semibold'}>LinkValue (Suwon ,Gyonggi-do)</Box>
          </Flex>
          <Flex pl={'8'} justifyContent={'space-between'}>
            {' '}
            <Box fontWeight={'semibold'}>
              Full Stack Developer (Frontend, Backend)
            </Box>{' '}
          </Flex>
        </BioSection>
        <Box pl={'8'} pt={'4'}>
          <UnorderedList className="">
            <ListItem>
              Developed high-performance web applications with Vue and
              Vue-related libraries, ensuring seamless user experiences.
            </ListItem>
            <ListItem>
              Implemented one-time and regular payment system with PortOne both
              in frontend and backend.
            </ListItem>
            <ListItem>
              Contributed to the successful implementation of an existing
              government project called “SCIST” that focused on managing and
              monitoring chemical ingredients stored in warehouses using KIOSK
              technology.
            </ListItem>
            <ListItem>
              Collaborated with the development team to create an efficient
              website for monitoring and managing Caravan IOT system, which led
              to a significant increase in operational efficiency compared to
              manual processes.
            </ListItem>
            <ListItem>Developed native mobile applications.</ListItem>
            <ListItem>Mentored newcomers.</ListItem>

            <ListItem>
              Vuejs,ReactJs, Vuex, TypeScript, Nodejs, Express js, MySql,
              Supabase, Amazon Web Service, Java, Swift, Arduino, Mqtt
            </ListItem>
          </UnorderedList>
        </Box>
      </Section>
      <Section delay={0.3}>
        <BioSection>
          <BioYear>2022 Sep - 2023 Apr</BioYear>
          <Spacer></Spacer>
          <Flex pl={'8'} justifyContent={'space-between'}>
            {' '}
            <Box fontWeight={'semibold'}>AIVILL (Yeuido ,Seoul)</Box>
          </Flex>
          <Flex pl={'8'} justifyContent={'space-between'}>
            {' '}
            <Box fontWeight={'semibold'}>Frontend Developer</Box>{' '}
          </Flex>
        </BioSection>
        <Box pl={'8'} pt={'4'}>
          <UnorderedList className="">
            <ListItem>
              As a Frontend Engineer, I leveraged a wide range of technologies
              to build responsive and performant applications. My primary focus
              was on building web applications using React.js, Javascript, Redux
              (including toolkit and thunk middleware implementations), Formik,
              and Antd.
            </ListItem>
            <ListItem>
              Worked on generative AI-based web applications. In addition to
              this, I implemented versatile payment features within the web app,
              enabling users to make payments using credit cards, Kakao Pay,
              Naver Pay.
            </ListItem>
            <ListItem>
              JavaScript, Formik, Ant-design, MUI, React, Hooks,
              Styled-Components, Redux, Figma GIT...
            </ListItem>
          </UnorderedList>
        </Box>
      </Section>
      <Section delay={0.4}>
        <BioSection>
          <BioYear>2022 Aug - 2022 Sep</BioYear>
          <Spacer></Spacer>
          <Flex pl={'8'} justifyContent={'space-between'}>
            {' '}
            <Box fontWeight={'semibold'}>
              WebBrain (Tashkent ,Uzbekistan) - Remote
            </Box>
          </Flex>
          <Flex pl={'8'} justifyContent={'space-between'}>
            {' '}
            <Box fontWeight={'semibold'}>Frontend Developer Intern</Box>{' '}
          </Flex>
        </BioSection>
        <Box pl={'8'} pt={'4'}>
          <UnorderedList className="">
            <ListItem>Assisted developers in real-life projects</ListItem>
            <ListItem>Assisted real-estate project</ListItem>
            <ListItem>
              Reviewing codes and helping learners to write better and cleaner
              code.
            </ListItem>
            <ListItem>
              Implemented complex user interfaces using React js and Angular 2+
            </ListItem>
          </UnorderedList>
        </Box>
      </Section>
      <Flex justifyContent={'center'} alignItems={'center'}>
        <Button
          as={NextLink}
          href="https://drive.google.com/file/d/1neZn78R6PS7ZHDTbxI03dgR8WFv5aZbf/view?usp=sharing"
          scroll={false}
          rightIcon={<ChevronRightIcon />}
          colorScheme="teal"
        >
          My Resume
        </Button>
      </Flex>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
