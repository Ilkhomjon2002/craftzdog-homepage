import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbInkdrop from '../public/images/works/tesfy_eye_catch.png'
import thumbWalknote from '../public/images/works/dayaction_eye_catch.png'
import thumbFourPainters from '../public/images/works/imezy_eye_catch.png'
import thumbMenkiki from '../public/images/works/memory_game_eye_catch.png'
import taskManager from '../public/images/works/task_manager_eye_catch.png'
import trillo from '../public/images/works/trillo_eye_catch.png'
import zipEyeCatch from '../public/images/works/zip_eye_catch.png'
import reactDashboard from '../public/images/works/react_dashboard_eye_catch.png'
import rockPaper from '../public/images/works/rock_paper_eye_catch.png'
import bankist from '../public/images/works/bankist.png'
import socketIO from '../public/images/works/socket_io_eye_catch.png'
import GreenShop from '../public/images/works/greenshop.png'
import Guest from '../public/images/works/guest.png'
import Taskify from '../public/images/works/taskify.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="dayAction"
            title="DayAction Admin"
            thumbnail={thumbInkdrop}
          >
            DayAction Admin dashboard is a platform where admins of DayAction
            can manage, monitor and analayse users.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="dayAction-user"
            title="DayAction"
            thumbnail={thumbWalknote}
          >
            DayAction is a web application where users can see their activities,
            and participate in events and buy or subscribe to some products
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="imezy" title="Imezy" thumbnail={thumbFourPainters}>
            Imezy is web application based on AI (stable diffusion). Where users
            can use features like text to image, image to image, image enhancer
          </WorkGridItem>
        </Section>{' '}
        <Section delay={0.1}>
          <WorkGridItem id="greenshop" title="GreenShop" thumbnail={GreenShop}>
            Green shop is a full stack application that I am working on now.
            Still developing....
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
            id="taskManager"
            thumbnail={taskManager}
            title="Task manager"
          >
            Task manager app helps you stay organized and focused. Easily
            create, track, and prioritize tasks, set reminders.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="zip" thumbnail={zipEyeCatch} title="Zip">
            Zip is an ecommerce web application that I have developed for class
            called Advanced Web Programming when I was in third grade
          </WorkGridItem>
        </Section>
      </SimpleGrid>
      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Mobile Applications
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem id="guest" thumbnail={Guest} title="Guest Home">
            Guest app is a mobile app that helps users to control hotel doors
            and elevators.
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="taskify" thumbnail={Taskify} title="Taskify">
            Taskify is a cross platform flutter application that is developed
            for Mobile application class.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Old works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem
            target={'blank'}
            id="https://trillo-2-jrdi1wiw3-ilkhomjon2002.vercel.app/"
            thumbnail={trillo}
            title="Trillo"
          >
            Trillo is a website for tour agencies that I have developed for
            advancing my SCSS and Responsiveness skills
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            target={'blank'}
            id="https://react-dashboard-topaz.vercel.app/"
            thumbnail={reactDashboard}
            title="Dashboard"
          >
            Another work that I have developed for advancing skills related to
            React and React libraries.
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id="https://rock-paper-scissors-three-tawny.vercel.app/"
            target={'blank'}
            thumbnail={rockPaper}
            title="Rock Paper Scissors"
          >
            Rock Paper Scissors is game developed for learning javascript.
          </WorkGridItem>
        </Section>{' '}
        <Section delay={0.3}>
          <WorkGridItem
            id="https://advanced-dom-ashy.vercel.app/"
            target={'blank'}
            thumbnail={bankist}
            title="Bankist"
          >
            Bankist is a project that I have developed for learning advanced DOM
            features. Moreover I used things like Observer and INTL.
          </WorkGridItem>
        </Section>{' '}
        <Section delay={0.3}>
          <WorkGridItem
            id="https://socket-io-client-blush.vercel.app/"
            target={'blank'}
            thumbnail={socketIO}
            title="Socket IO"
          >
            Socket IO is a simple web chat application where I gained experience
            by working with Web Sockets
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
            id="https://memory-game2-delta.vercel.app/"
            target={'blank'}
            thumbnail={thumbMenkiki}
            title="Memory Game"
          >
            Introducing our memory game - a fun and engaging way to challenge
            your memory skills! Test your brain ability to recall and match
            pairs of cards in this classic game format.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
