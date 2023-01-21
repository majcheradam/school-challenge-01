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
            <Image src="/OpenAI_LL.png" alt="logo" width="120" height="30" />
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

      <footer></footer>
    </>
  )
}
