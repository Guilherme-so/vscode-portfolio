import Image from "next/image";
import GitHubCalendar from "react-github-calendar";
import {
  Container,
  Contributions,
  ImageWrapper,
  Profile,
} from "@/styles/github";
import Head from "@/components/helper/head";

function Github() {
  return (
    <>
      <Head title="Github" />

      <Container>
        <a
          href="https://github.com/Guilherme-so"
          target="_blank"
          rel="noopener"
        >
          <Profile>
            <ImageWrapper>
              <Image
                src="https://github.com/Guilherme-so.png"
                alt="profile"
                layout="fill"
                objectFit="cover"
              />
            </ImageWrapper>
            <h3>Guilherme Silva</h3>
          </Profile>
        </a>
        <div>
          {" "}
          <center className="streakStats">
            <picture>
              <source
                srcSet="https://github-readme-streak-stats.herokuapp.com/?user=Guilherme-so&theme=react&hide_border=false"
                media="(prefers-color-scheme: dark)"
              />
              <source
                srcSet="https://github-readme-streak-stats.herokuapp.com/?user=Guilherme-so&theme=react&hide_border=false"
                media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)"
              />
              <img src="https://github-readme-stats.vercel.app/api?username=Guilherme-so&show_icons=true" />
            </picture>
          </center>
          <center className="mostUsedLanguages">
            <picture>
              <source
                srcSet="https://github-readme-stats.vercel.app/api/top-langs/?username=Guilherme-so&theme=react&hide_border=false&include_all_commits=false&count_private=false&layout=compact"
                media="(prefers-color-scheme: dark)"
              />
              <source
                srcSet="https://github-readme-stats.vercel.app/api/top-langs/?username=Guilherme-so&theme=react&hide_border=false&include_all_commits=false&count_private=false&layout=compact"
                media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)"
              />
              <img src="https://github-readme-stats.vercel.app/api?username=anuraghazra&show_icons=true" />
            </picture>
          </center>
        </div>
        <div>
          <center className="calendar">
            <h3>My Github Calendar</h3>
          </center>
        </div>
        <br />
        <center>
          <Contributions>
            <GitHubCalendar
              colorScheme="dark"
              username="Guilherme-so"
              blockMargin={3}
            />
          </Contributions>
        </center>
      </Container>
    </>
  );
}

export default Github;
