import Image from 'next/image'

export default function Home() {
  return (
    <>
      <video autoplay muted loop className="video">
        <source src="Laptop.mp4" type="video/mp4" />
      </video>

      <header>
        <div className="header-up">
          <p>
            <a href="https://chat.openai.com">
              Introducing ChatGPT research release
            </a>
          </p>
          <p>
            <a href="https://chat.openai.com">
              <span>Try</span>
            </a>
            <Image src="/Arrow_U.png" alt="" width="10" height="10" />
          </p>
          <p>
            <a href="https://openai.com/blog/chatgpt">
              <span>Learn more</span>
            </a>
            <Image src="/Arrow_L.png" alt="" width="10" height="10" />
          </p>
        </div>
        <div className="header-down">
          <a href="https://openai.com">
            <Image
              src="/OpenAI_LL.png"
              alt="logo"
              width="120"
              height="30"
              className="logo"
            />
          </a>
          <div className="between"></div>
          <nav>
            <div className="nav-bar">
              <p>
                <a href="https://openai.com/api/">API</a>
              </p>
              <p>
                <a href="https://openai.com/research/">RESEARCH</a>
              </p>
              <p>
                <a href="https://openai.com/blog/">BLOG</a>
              </p>
              <p>
                <a href="https://openai.com/about/">ABOUT</a>
              </p>
            </div>
          </nav>
        </div>
      </header>

      <main>
        <div className="conteiner">
          <div className="content">
            <h1>Join us in shaping the future of technology.</h1>
            <div className="buttons">
              <button className="button">
                <Image src="/Arrow_BL.png" alt="" width="10" height="10" />
                WATCH VIDEO
              </button>
              <p>
                <a href="https://openai.com/careers/">VIEW CAREERS</a>
                <Image src="/Arrow_L.png" alt="" width="20" height="10" />
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <div className="foother">
          <div className="foother-cointeiner">
            <Image src="/OpenAI_LL.png" alt="logo" width="120" height="30" />
            <div className="flex-box">
              <div className="item">
                <ul>
                  <p>FEATURED</p>
                  <li>
                    <a href="https://openai.com/blog/chatgpt/">ChatGPT</a>
                  </li>
                  <li>
                    <a href="https://openai.com/dall-e-2/">DALL·E 2</a>
                  </li>
                  <li>
                    <a href="https://openai.com/blog/whisper/">Whisper</a>
                  </li>
                  <li>
                    <a href="https://openai.com/alignment/">Alignment</a>
                  </li>
                  <li>
                    <a href="https://openai.fund">Startup Fund</a>
                  </li>
                </ul>
              </div>
              <div className="item">
                <ul>
                  <p>API</p>
                  <li>
                    <a href="https://openai.com/api/">Overview</a>
                  </li>
                  <li>
                    <a href="https://openai.com/api/pricing/">Pricing</a>
                  </li>
                  <li>
                    <a href="https://beta.openai.com/examples/">Examples</a>
                  </li>
                  <li>
                    <a href="https://beta.openai.com/docs/">Docs</a>
                  </li>
                  <li>
                    <a href="https://openai.com/api/policies/service-terms/">
                      Terms & Policies
                    </a>
                  </li>
                  <li>
                    <a href="https://status.openai.com">Status</a>
                  </li>
                  <li>
                    <a href="https://beta.openai.com/login/">Log in</a>
                  </li>
                </ul>
              </div>
              <div className="item">
                <ul>
                  <p>BLOG</p>
                  <li>
                    <a href="https://openai.com/blog/">Index</a>
                  </li>
                  <li>
                    <a href="https://openai.com/blog/tags/research/">
                      Research
                    </a>
                  </li>
                  <li>
                    <a href="https://openai.com/blog/tags/announcements/">
                      Announcements
                    </a>
                  </li>
                  <li>
                    <a href="https://openai.com/blog/tags/events/">Events</a>
                  </li>
                  <li>
                    <a href="https://openai.com/blog/tags/milestones/">
                      Milestones
                    </a>
                  </li>
                </ul>
              </div>
              <div className="item">
                <ul>
                  <p>INFORMATION</p>
                  <li>
                    <a href="https://openai.com/about/">About Us</a>
                  </li>
                  <li>
                    <a href="https://openai.com/charter/">Our Charter</a>
                  </li>
                  <li>
                    <a href="https://openai.com/research/">Our Research</a>
                  </li>
                  <li>
                    <a href="https://openai.com/publications/">Publications</a>
                  </li>
                  <li>
                    <a href="https://openai.com/newsroom/">Newsroom</a>
                  </li>
                  <li>
                    <a href="https://openai.com/careers/">Careers</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="end">
            <p>
              <a href="https://openai.com">OpenAI © 2015-2023</a>
            </p>
            <p>
              <a href="https://openai.com/privacy/">Privacy Policy</a>
            </p>
            <p>
              <a href="https://openai.com/terms/">Terms of Use</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
