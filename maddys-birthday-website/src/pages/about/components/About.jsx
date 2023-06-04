import { Link } from 'react-router-dom'
import AboutFooter from './AboutFooter'

const About = () => {
  return (
    <div className="w-full h-full sm:max-w-xl sm:h-fit sm:outline outline-1 flex flex-col px-4 pt-4 bg-blue-400 sm:rounded-lg">
      <h1 className="font-bold text-2xl pb-2">About</h1>
      <p className="mb-2">
        For Maddy's birthday this year, I wanted to apply my incredibly inept
        web development skills to make a website that Maddy's friends and family
        can upload birthday messages and fun memories to, then share them with
        Maddy on her birthday!
      </p>
      <p className="font-semibold mb-1">How does it work?</p>
      <p className="mb-1">
        - First, create an account. I don't use your information for anything
        malicous, pinky promise.
      </p>
      <p className="mb-1">
        - Next, go to the{' '}
        <Link className="italic hover:underline" to="/contribute">
          Contribute
        </Link>{' '}
        page. Here you can upload messages, pictures or videos that only Maddy
        will see on her birthday
      </p>
      <p className="mb-3">
        - On Maddy's birthday, she'll log into the website and have a scrolling
        page of everything you and others have submitted! :)
      </p>
      <p className="font-bold mb-2">Happy birthday Maddy!</p>
      <p>
        If you want to see the website's source code,{' '}
        <a
          className="font-semibold hover:underline"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/noahingwersen/Maddys-Birthday-Website-Frontend"
        >
          click here.
        </a>
      </p>
      <AboutFooter />
    </div>
  )
}
export default About
