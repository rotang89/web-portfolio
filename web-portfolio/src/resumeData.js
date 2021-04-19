export const resumeData = {
  "main": {
    "name":"Johnny Tang",
    "occupation":"software engineer",
    "description":"Welcome to my website",
    "image":"profile_pic.jpg",
    "bio":"Ever since I was young, I was always passionate about thinking of cool products and building them. It was definitely no accident when I started my career as a mechanical engineer working in the automotive industry. I recently transitioned to be a software engineer after seeing how quickly the tech industry was moving and I didn't want to miss out in being a part of it. Additionally, I realized how much I genuinely like coding. I enjoy finding unique solutions to solve modern problems and as a software engineer, I'm grateful of the idea of being a forever student while continuously growing my skills every day.",
    "contactmessage":"Use the form below and shoot me an email if you'd like to contact me!",
    "email": "email.john.e@gmail.com",
    "phone": "(734) 709-3675",
    "address":{
      "city":"Fremont",
      "state":"CA",
      "zip": "94536"
    },
    "social":[
      {
        "name":"facebook",
        "url":"https://www.facebook.com/sn0rlax",
        "className":"fa fa-facebook"
      },
      {
        "name":"instagram",
        "url":"https://www.instagram.com/rotang89/",
        "className":"fa fa-instagram"
      },
      {
        "name":"linkedin",
        "url":"https://www.linkedin.com/in/jonathan-tang-/",
        "className":"fa fa-linkedin"
      },
      {
        "name":"github",
        "url":"https://github.com/rotang89",
        "className":"fa fa-github"
      },
      {
        "name":"email",
        "url":"mailto:email.john.e@gmail.com?subject=From%20Johnny's%20portfolio%20page",
        "className":"fa fa-envelope"
      }
    ]
  },
  "resume":{
    "skillmessage":"Here you can create a short write-up of your skills to show off to employers",
    "education":[
      {
        "school":"Hack Reactor",
        "degree":"Software Engineering Immersive Program",
        "graduated":"2020",
        "description":"I attended Hack Reactor because of it's reputation as one of the top-rated coding bootcamps respected by many companies in the tech industry. Here I learned many of the most widely-used technologies and frameworks and ultimately gained the skills to develop production grade, highly-scalable full-stack web applications ",
        "logo":"hack_reactor.png"
      },
      {
        "school":"University of Michigan",
        "degree":"Mechanical Engineering",
        "graduated":"2013",
        "description":"I completed my Bachelors in Mechanical Engineering at the Univeristy of Michigan. My duration here as an undergrad student greatly prepped me with all the tecnical skills and work ethic that allowed me to achieve my success in my mechanical engineering career",
        "logo":"michigan.jpg"
      }
    ],
    "work":[
      {
        "company":"Nissan",
        "title":"Mechanical Engineer - Value Engineering",
        "years":"2017 - 2019",
        "description":"Managed engineering optimization projects for some of Nissan's top selling vehicles, through identifying, validating, and driving cost reduction engineering changes from concept to adoption.",
        "logo":"Nissan.png"
      },
      {
        "company":"Optimal Inc",
        "title":"Mechanical Engineer - CAE",
        "years":"2013 - 2017",
        "description":"I was responsible for performing full vehicle reverse engineering and conducting computer-aided analysis to develop the entire product engineering process, from design to testing and planning phase of manufacturing.",
        "logo":"optimal.jpg"
      }
    ]
  },
  "portfolio":{
    "projects": [
      {
        "title":"Immies Jellies",
        "category":"E-commerce website for local small business selling edible coconut jelly art. Full-stack web application designed for both desktop and mobile browsers. Uses firebase authenticaion for user sign-in and stripe API for checkout feature",
        "image":"ImmiesJellies.png",
        "url":"https://github.com/rotang89/Immies-Jellies",
        "tech": ["Node.js", "React", "Redux", "Firebase", "PostgreSQL", "Webpack"]
      },
      {
        "title":"Whats For Dinner",
        "category":"Fun modern way to disocover local restaurants. Full-stack web application built with React and PostgreSQL. Utilizes unique suggestion algorithm to determine nearby restaurants that most closely fits a users taste. Uses Google Maps and Yelp API.",
        "image":"WhatsForDinner.gif",
        "url":"https://github.com/rotang89/Lookun",
        "tech": ["Node.js", "React", "PostgreSQL", "GraphQL", "Webpack", "Heroku"]
      },
      {
        "title":"TKOut",
        "category":"Review and make reservations at your favorite restaurants. Bookings feature was built using React and MongoDB. Single page web application designed on a service-oriented architecture. Docker used to containerize individual features and deployed on a proxy server using AWS. Testing handled with Jest-Enzyme",
        "image":"TKOut.gif",
        "url":"https://github.com/TKOut-HRSF130/bookings-service",
        "tech": ["Node.js", "React", "MongoDB", "AWS", "Webpack", "Docker", "Redux"]
      },
      {
        "title":"MunchM",
        "category":"System design project for lodging web application that contained 50 million business records stored in a PostgreSQL database. Horizontally scaled application over multiple EC2 server instances using Nginx as a load balancer. Achieved performance of 1000 requests per second while maintaining a 0.25% error rate. Benchmarked performance using Loader.io, Apache Benchmark and New Relic",
        "image":"MunchM.png",
        "url":"https://github.com/munchm/people-also-viewed",
        "tech": ["Node.js", "React", "PostgreSQL", "AWS", "Webpack", "Nginx"],
      },
      {
        "title":"Minteger",
        "category":"Web application to keep track of your personal finances. This was my first full-stack web application which I built the front-end and back-end codebase and integrated data stored in a MySQL database",
        "image":"minteger.png",
        "url":"",
        "tech": ["Node.js", "React", "MySQL", "Webpack"]
      },
      {
        "title":"Personal Webpage",
        "category":"Website you are currently viewing to showcase my experience and personal portfolio. This is a front-end web application with responsive web design. Deployed on a serverless backend using Netlify",
        "image":"portfolio.gif",
        "url":"https://github.com/rotang89/web-portfolio",
        "tech": ["React", "Bootstrap", "Netlify", "Webpack"]
      }
    ]
  },
  "skills": [
    {
      "name": "Node.js",
      "image": "nodejslogo.png"
    },
    {
      "name": "React",
      "image": "react.svg"
    },
    {
      "name": "Redux",
      "image": "redux.png"
    },
    {
      "name": "PostgreSQL",
      "image": "postgresqllogo.png"
    },
    {
      "name": "MongoDB",
      "image": "Mongo.png"
    },
    {
      "name": "MySQL",
      "image": "mysql.png"
    },
    {
      "name": "GraphQL",
      "image": "graphql.png"
    },
    {
      "name": "Webpack",
      "image": "Webpack.png"
    },
    {
      "name": "Docker",
      "image": "Docker.png"
    },
    {
      "name": "Heroku",
      "image": "heroku.png"
    },
    {
      "name": "AWS",
      "image": "aws-logo.png"
    },
    {
      "name": "Netlify",
      "image": "netlify.png"
    },
    {
      "name": "PHP",
      "image": "PHP.png"
    },
    {
      "name": "Kubernetes",
      "image": "kubernetes.png"
    },
    {
      "name": "Firebase",
      "image": "firebase.png"
    },
    {
      "name": "Bootstrap",
      "image": "bootstrap.png"
    },
    {
      "name": "Nginx",
      "image": "nginx.png"
    }
  ]
}
