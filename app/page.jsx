import Image from 'next/image'

export default function Home() {
  return (
    <>
      <video autoplay muted loop className="video">
        <source src="Laptop.mp4" type="video/mp4" />
      </video>

      <header>
        <div className="up">
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
      </header>

      <main></main>

      <footer></footer>
    </>
  )
}
