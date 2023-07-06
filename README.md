# Maddy's Birthday Website!
To celebrate Maddy's 26th birthday I decided to create a website where friends and family can write birthday messages, upload pictures and submit memories for Maddy. On her birthday, the site will unlock and show Maddy everything that's been submitted.

## Features
This is my first website I've actually deployed, so I went with some popular solutions for building and styling the frontend, as well as hosting the backend database. There's probably "better" tools to get the job done, but I found these pretty straightforward to work with.

### [React](https://react.dev/)
I used ReactJS to build and organize the frontend of the website. I can't imagine anyone actually being able to build a complex and functional website with Vanilla JavaScript. Overall React wasn't hard to pick up, but some concepts seemed overly complicated like the useEffect and useRef hooks.

### [Tailwind](https://tailwindcss.com/)
In a previous project I used Bootstrap for my CSS styling, but didn't like the lack of customization and control I had over individual components. I also didn't want to use plain CSS because I still struggle to remember all the property names and settings. Tailwind was a perfect blend of customization while hiding the ugly raw CSS implementations.

Despite cluttering up my HTML, I found it pretty easy to design the website the way I wanted it to look for both PC and mobile without too much effort.

### [Fly.io](https://fly.io/)
I actually found this website from the PocketBase docs on deployment (below) and ended up using it to host the frontend. I have a very simple Express server to host the static React site and deployed that to a small machine. This service is nice because of the free tier with a backup machine incase the primary goes down.

### [PocketBase](https://pocketbase.io/)
Since I really wanted to focus on the frontend for this website and had a time constraint, I used PocketBase for my backend. This is an out-of-the-box open source database. It's really nice because it comes bundled in a single executable and is designed to be self hosted. I was inspired to use PocketBase after watching [this Fireship video](https://www.youtube.com/watch?v=gUYBFDPZ5qk).

In other projects I've used backends like Django to manage my database, user authentication, and create a REST API. Luckily PocketBase does all of that for me and also has a great admin dashboard where I can see database records and access logs.

### [Linode](https://www.linode.com/)
Same as the video I found PocketBase in, I also used Linode for the backend hosting. I needed this separate from the frontend hosting due to the storage requirements (The free tier of Fly.io only comes with 3GB storage) and I was still able to host on Linode for free thanks for the $60 credit I got for signing up. 

### [DuckDNS](https://www.duckdns.org/)
A free DNS service I used to point to my Linode hosting the backend.
