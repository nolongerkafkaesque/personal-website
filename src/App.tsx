import { Title, Text, Image, Stack, Flex, Container, Button } from '@mantine/core';
import { ThemeProvider } from './ThemeProvider';
import YouTube, { YouTubeProps } from 'react-youtube';

export default function App() {

  const opts: YouTubeProps['opts'] = {
    height: '390',
    width: "800",
    playerVars: {

      autoplay: 1,
    },
  };

  return (
    <ThemeProvider>

      <Container style={{ display: "flex", flexDirection: "column", gap: 10 }}   >

        <Title style={{ alignSelf: "center" }} order={1} >Welcome To My Portfolio</Title>

        <Flex gap="md"
          justify="center"
          align="center"
          direction="column"
          wrap="wrap" >

          <Image width={300} radius="md" src="https://avatars.githubusercontent.com/u/142049191?v=4" alt="Random image" />

          <Stack >

            <Title td="underline" order={2}>Bio :</Title>
            <Text lineClamp={10} >I’m Mouad Tardaoui, 26 years old with a bachelor's degree in human sciences, I grew up in a
              middle class family where virtue and traditions were a necessity, which allowed me to follow a
              certain moral compass. My skills include fast learning, adaptability, and creativity. I would
              stand out in those fields because I believe Ive got a unique way of thinking, creating, and
              solving problems, thus allowing me to leave my mark. When collaborating with me, you can
              expect efficient and data-driven solutions tailored to your specific needs. Whether it's
              optimizing your business processes, identifying growth opportunities, or solving complex
              challenges, I'm here to provide the strategic insights that will make your professional life
              easier.
              So, let's team up and unleash the full potential of your data! Together, we'll turn information
              into action and propel your organization towards success in this data-driven era.</Text>

          </Stack>

        </Flex>
        <Title td="underline" order={2}>Portfolio :</Title>
        <Flex
          gap="md"
          justify="center"
          align="center"
          direction="column"
          wrap="wrap"
        >
          <Image maw="800px" radius="md" src="pitch.png" alt="Random image" />
          <Button size='xs' onClick={
            () => window.open("https://docs.google.com/presentation/d/1WdDnPYEb_US3EY_EW9PKf4UA1rT6oAwBgNU3R4R12dM/edit?usp=sharing")
          } >View Slides</Button>

          <YouTube videoId="naa3WCrm2ZE" opts={opts} />
        </Flex>
        <Title td="underline" order={2}>Elevator Pitch :</Title>

        <Flex
          gap="md"
          justify="center"
          align="center"
          direction="column"
          wrap="wrap"
        >

          <video controls width="35%">

            <source src="/video.mp4" type="video/mp4"
            />
            Sorry, your browser doesn't support videos.
          </video>

        </Flex>




      </Container>
    </ThemeProvider>
  );
}
