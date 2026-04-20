// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Publications and preprints in reverse chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Research and engineering projects across vision, interpretability, and applied ML.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "Selected GitHub repositories and profile activity.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Selected experience, publications, and links to a downloadable CV.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Teaching, bootcamps, and course material from past instruction.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "post-should-developers-care-about-interpretability",
        
          title: "Should Developers Care about Interpretability?",
        
        description: "Why mechanistic interpretability research matters beyond alignment — and what it means for people building with models today.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/should-developers-care-about-interpretability/";
          
        },
      },{id: "post-llm-powered-sorting-with-trueskill",
        
          title: "LLM-Powered Sorting with TrueSkill",
        
        description: "Using pairwise LLM comparisons and the TrueSkill ranking system to sort items that resist direct scoring.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/llm-powered-sorting-with-trueskill/";
          
        },
      },{id: "news-started-research-on-vision-saebench-cross-architecture-sae-evaluation-study-training-sparse-autoencoders-on-imagenet-across-dinov2-clip-siglip-mae-and-deit-vit-backbones-targeting-neurips-2026",
          title: 'Started research on Vision-SAEBench — cross-architecture SAE evaluation study training Sparse Autoencoders on...',
          description: "",
          section: "News",},{id: "news-featured-by-ai4-on-linkedin-as-a-confirmed-speaker-at-ai4-2025",
          title: 'Featured by Ai4 on LinkedIn as a confirmed speaker at Ai4 2025.',
          description: "",
          section: "News",},{id: "news-featured-by-imerit-on-linkedin-in-connection-with-the-upcoming-ai4-2025-conference",
          title: 'Featured by iMerit on LinkedIn in connection with the upcoming Ai4 2025 conference....',
          description: "",
          section: "News",},{id: "news-invited-as-speaker-at-ai4-2025-conference-at-mgm-grand-las-vegas-august-11-13-2025-north-america-s-premier-ai-industry-event-with-8-000-attendees-from-85-countries",
          title: 'Invited as speaker at Ai4 2025 conference at MGM Grand, Las Vegas (August...',
          description: "",
          section: "News",},{id: "projects-vision-saebench",
          title: 'Vision-SAEBench',
          description: "Cross-architecture Sparse Autoencoder evaluation across ViT backbones",
          section: "Projects",handler: () => {
              window.location.href = "/projects/visaebench/";
            },},{id: "teachings-foundations-of-data-science-bootcamp",
          title: 'Foundations of Data Science Bootcamp',
          description: "Practical introduction to Python, SQL, data wrangling, exploratory analysis, and basic machine learning concepts.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/rendercv/rendercv_output/Vijay_Gohil_CV.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%76%72%61%6A%67%6F%68%69%6C%31%33%30@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/vraj130", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/vijaygohil", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=hVRKZj4AAAAJ", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/vijayygohil", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://openreview.net/profile?id=~Vijayrajsinh_Gohil1", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
