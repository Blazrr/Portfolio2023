const tailwind = {
    img: "https://www.drupal.org/files/project-images/screenshot_361.png",
    link: "https://tailwindcss.com/",
  };
  const chakraUI = {
    img: "https://pbs.twimg.com/profile_images/1244925541448286208/rzylUjaf_400x400.jpg",
    link: "https://chakra-ui.com/",
  };
  const NextJs = {
    img: "https://www.rlogical.com/wp-content/uploads/2021/08/Rlogical-Blog-Images-thumbnail.png",
    link: "https://nextjs.org/",
  };
  const ThreeJs = {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuEjZfn_CZ8ph3FaedJyIif2T0nzJ3dxG7b24uOt-ojsGiMKF6DF_itLRZUSuZPKF7DR8&usqp=CAU",
    link: "https://threejs.org/",
  };
  const Typescript = {
    img: "https://pbs.twimg.com/profile_images/1290672565690695681/0G4bie6b_400x400.jpg",
    link: "https://www.typescriptlang.org/",
  };
  const React = {
    img: "https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK_400x400.png",
    link: "https://reactjs.org/",
  };
  const ReactRouter = {
    img: "https://reactrouter.com/twitterimage.jpg",
    link: "https://reactrouter.com/en/main",
  };
  const Redux = {
    img: "https://infiniteblogs.blob.core.windows.net/medias/f486812a-1c7f-4802-ab9d-4c709f0f1bb7_0.png",
    link: "https://redux.js.org/",
  };
  
  const VueJS = {
    img: "https://avatars.githubusercontent.com/u/6128107?s=280&v=4",
    link: "https://vuejs.org/",
  };
  const Supabase = {
    img: "https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/299/square_480/supabase-logo-icon_1.png",
    link: "https://supabase.com/",
  };
  
  const Stripe = {
    img: "https://play-lh.googleusercontent.com/2PS6w7uBztfuMys5fgodNkTwTOE6bLVB2cJYbu5GHlARAK36FzO5bUfMDP9cEJk__cE",
    link: "https://stripe.com/",
  };
  
  export const projects = [
    {
      project: "Netflim",
      about:
        "Started this project to learn more about Backend with supabase, This project is still in Build but can be shown if requested",
      img: "/Netflim.png",
      techno: [React, Redux, ReactRouter, Supabase],
      source: "https://netflims.vercel.app/",
      link: "https://github.com/Blazrr/Netflims",
    },
    {
      project: "Audiophile",
      about:
        "Started this project to learn more about databases (with supabase) page routing with DynamicRoutes and Global States in a ReactApp",
      img: "/Audiophile.png",
      techno: [React, tailwind, Typescript, ReactRouter, Redux, Supabase, Stripe],
      source: "https://github.com/Blazrr/audiophile",
      link: "https://audiophile-pied.vercel.app/",
    },
    // {
    //   project: "AnimeTheque",
    //   about:
    //     "This project is about a library for Animes. I've done this project to test my API skills and discover new Libraries like ChakraUI and TailwindCSS",
    //   img: "/AnimeLooker.png",
    //   techno: [React, tailwind, chakraUI],
    //   source: "https://github.com/Blazrr/chakraproject",
    //   link: "https://loquacious-swan-968bf3.netlify.app/",
    // },
  
    {
      project: "Netflix Front Part",
      about:
        "This project is the Front part of Netflix. This was my first project using Typescript and NextJS. Note that this site is still in Build",
      img: "/netflix.png",
      techno: [NextJs, Typescript, tailwind],
      source: "https://github.com/Blazrr/Netflix",
      link: "https://netflix-front-beta.vercel.app/",
    },
    // {
    //   project: "Overwatch site",
    //   about: "Started this project in order to learn more about Animation and 3D",
    //   img: "/ow.png",
    //   techno: [NextJs, Typescript, tailwind, ThreeJs],
    //   source: "https://github.com/Blazrr/overwatch",
    //   link: "https://overwatch-opaxgbkd3-blazrr.vercel.app/",
    // },
    {
      project: "SneakersVue",
      about:
        "Started this project to Discover VueJS and make myself a little documentation in order to be able to understand the FrameWork",
      img: "/SneakersVue.png",
      techno: [VueJS, tailwind],
      source: "https://github.com/Blazrr/SneakersVue",
      link: "https://statuesque-biscuit-39816c.netlify.app/",
    },
  ];