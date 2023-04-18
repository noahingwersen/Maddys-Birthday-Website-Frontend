import AboutFooter from './AboutFooter'

const About = () => {
  return (
    <div className="max-w-xl h-fit min-w-[450px] min-h-[200px] flex flex-col px-4 pt-4 outline bg-slate-400 rounded-lg">
      <h1 className="font-bold text-2xl pb-2">About</h1>
      <p className="mb-2">
        This website is the result of nearly 100 hours of painful struggle to
        learn and apply web development. The frontend is built with ReactJS, the
        backend is powered by PocketBase and I used Tailwind for the CSS
        styling. <p className="font-bold">Happy birthday Maddy!</p>
      </p>
      <p>
        If you want to see the source code,{' '}
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
