import { Button, Code, Stack, Text, Box } from '@chakra-ui/react';
import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Container } from '../components/Container';
import { Page } from '../components/Page';
import { PageHeader } from '../components/PageHeader';
import { seo } from '../components/Seo';

export const Head = seo({ title: 'Home' });

export default function IndexPage() {
  return (
    <Page>
      <Container p={6}>
        <Stack spacing={8} shouldWrapChildren>
          <PageHeader
            title="Your Storytelling Companion"
            subtitle="Tellaprompt helps you create the best possible version of your story. Our AI-powered tool interviews you, listens attentively, and adapts in real-time like a true professional. And the magic doesn't stop there - with automated editing and publishing, you'll be able to produce polished content faster than ever before."
          />

          <Stack spacing={2} shouldWrapChildren>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe2Z8JtNQi85UyuL0N0ouMr05BbxPh5THpHMGRi8U7D6wBaEg/viewform?embedded=true" width="100%" height="900" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
          </Stack>

          <Stack>
            <Text align='center' fontSize='md'>We secured these socials but are too busy on the MVP to post:</Text>
          </Stack>

          <Stack>
              <Button
              as="a"
              href="https://www.facebook.com/tellaprompt"
              rightIcon={<HiArrowNarrowRight fontSize="1.25rem" />}
              variant="link"
              colorScheme="blue"
            >
              Facebook
            </Button>

              <Button
              as="a"
              href="https://www.instagram.com/tellaprompt/"
              rightIcon={<HiArrowNarrowRight fontSize="1.25rem" />}
              variant="link"
              colorScheme="blue"
            >
              Instagram
            </Button>

              <Button
              as="a"
              href="https://www.reddit.com/user/tellaprompt"
              rightIcon={<HiArrowNarrowRight fontSize="1.25rem" />}
              variant="link"
              colorScheme="blue"
            >
              Reddit
            </Button>

              <Button
              as="a"
              href="https://www.tiktok.com/@tellaprompt"
              rightIcon={<HiArrowNarrowRight fontSize="1.25rem" />}
              variant="link"
              colorScheme="blue"
            >
              TikTok
            </Button>

              <Button
              as="a"
              href="https://twitter.com/Tellaprompt"
              rightIcon={<HiArrowNarrowRight fontSize="1.25rem" />}
              variant="link"
              colorScheme="blue"
            >
              Twitter
            </Button>

              <Button
              as="a"
              href="https://www.youtube.com/@Tellaprompt"
              rightIcon={<HiArrowNarrowRight fontSize="1.25rem" />}
              variant="link"
              colorScheme="blue"
            >
              YouTube
            </Button>
          </Stack>

        </Stack>
      </Container>
    </Page>
  );
}
