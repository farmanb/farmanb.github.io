// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "Research",
          description: "An overview of my research.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "Submitted papers and preprints",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "An overview of my teaching.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Curriculum Vitae",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-repositories",
          title: "Repositories",
          description: "Edit the `_data/repositories.yml` and change the `github_users` and `github_repos` lists to include your own GitHub profile and repositories.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "courses-017",
          title: '017',
          description: "",
          section: "Courses",handler: () => {
              window.location.href = "/courses/017.html";
            },},{id: "courses-019",
          title: '019',
          description: "",
          section: "Courses",handler: () => {
              window.location.href = "/courses/019.html";
            },},{id: "courses-1007",
          title: '1007',
          description: "",
          section: "Courses",handler: () => {
              window.location.href = "/courses/1007.html";
            },},{id: "courses-1011",
          title: '1011',
          description: "",
          section: "Courses",handler: () => {
              window.location.href = "/courses/1011.html";
            },},{id: "courses-1031",
          title: '1031',
          description: "",
          section: "Courses",handler: () => {
              window.location.href = "/courses/1031.html";
            },},{id: "courses-111",
          title: '111',
          description: "",
          section: "Courses",handler: () => {
              window.location.href = "/courses/111.html";
            },},{id: "courses-115",
          title: '115',
          description: "",
          section: "Courses",handler: () => {
              window.location.href = "/courses/115.html";
            },},{id: "courses-116",
          title: '116',
          description: "",
          section: "Courses",handler: () => {
              window.location.href = "/courses/116.html";
            },},{id: "courses-122",
          title: '122',
          description: "",
          section: "Courses",handler: () => {
              window.location.href = "/courses/122.html";
            },},{id: "courses-141",
          title: '141',
          description: "",
          section: "Courses",handler: () => {
              window.location.href = "/courses/141.html";
            },},{id: "courses-142",
          title: '142',
          description: "",
          section: "Courses",handler: () => {
              window.location.href = "/courses/142.html";
            },},{id: "courses-161",
          title: '161',
          description: "",
          section: "Courses",handler: () => {
              window.location.href = "/courses/161.html";
            },},{id: "courses-162",
          title: '162',
          description: "",
          section: "Courses",handler: () => {
              window.location.href = "/courses/162.html";
            },},{id: "courses-170",
          title: '170',
          description: "",
          section: "Courses",handler: () => {
              window.location.href = "/courses/170.html";
            },},{id: "courses-2002",
          title: '2002',
          description: "",
          section: "Courses",handler: () => {
              window.location.href = "/courses/2002.html";
            },},{id: "courses-2032",
          title: '2032',
          description: "",
          section: "Courses",handler: () => {
              window.location.href = "/courses/2032.html";
            },},{id: "courses-2040",
          title: '2040',
          description: "",
          section: "Courses",handler: () => {
              window.location.href = "/courses/2040.html";
            },},{id: "courses-243",
          title: '243',
          description: "",
          section: "Courses",handler: () => {
              window.location.href = "/courses/243.html";
            },},{id: "courses-272",
          title: '272',
          description: "",
          section: "Courses",handler: () => {
              window.location.href = "/courses/272.html";
            },},{id: "courses-3040",
          title: '3040',
          description: "",
          section: "Courses",handler: () => {
              window.location.href = "/courses/3040.html";
            },},{id: "courses-308",
          title: '308',
          description: "",
          section: "Courses",handler: () => {
              window.location.href = "/courses/308.html";
            },},{id: "courses-3080",
          title: '3080',
          description: "",
          section: "Courses",handler: () => {
              window.location.href = "/courses/3080.html";
            },},{id: "courses-3086",
          title: '3086',
          description: "",
          section: "Courses",handler: () => {
              window.location.href = "/courses/3086.html";
            },},{id: "courses-4007",
          title: '4007',
          description: "",
          section: "Courses",handler: () => {
              window.location.href = "/courses/4007.html";
            },},{id: "courses-4083",
          title: '4083',
          description: "",
          section: "Courses",handler: () => {
              window.location.href = "/courses/4083.html";
            },},{id: "courses-lean",
          title: 'Lean',
          description: "",
          section: "Courses",handler: () => {
              window.location.href = "/courses/lean.html";
            },},{id: "news-axiom-lab-proposal-awarded-full-funding-by-louisiana-board-of-regents",
          title: 'AXIOM Lab Proposal Awarded Full Funding by Louisiana Board of Regents',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/axiom/";
            },},{id: "news-construction-zone-compound",
          title: 'Construction Zone Compound',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/construction_zone_compound/";
            },},{id: "news-coes-education-award",
          title: 'COES Education Award',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/coes_education_award/";
            },},{id: "sections-017-a",
          title: '017 A',
          description: "",
          section: "Sections",handler: () => {
              window.location.href = "/sections/017-A.html";
            },},{id: "sections-017-g",
          title: '017 G',
          description: "",
          section: "Sections",handler: () => {
              window.location.href = "/sections/017-G.html";
            },},{id: "sections-017-z2",
          title: '017 Z2',
          description: "",
          section: "Sections",handler: () => {
              window.location.href = "/sections/017-Z2.html";
            },},{id: "sections-019-s",
          title: '019 S',
          description: "",
          section: "Sections",handler: () => {
              window.location.href = "/sections/019-S.html";
            },},{id: "sections-019-w",
          title: '019 W',
          description: "",
          section: "Sections",handler: () => {
              window.location.href = "/sections/019-W.html";
            },},{id: "sections-1007-45282-f23",
          title: '1007 45282 F23',
          description: "",
          section: "Sections",handler: () => {
              window.location.href = "/sections/1007-45282-F23.html";
            },},{id: "sections-1007-45282",
          title: '1007 45282',
          description: "",
          section: "Sections",handler: () => {
              window.location.href = "/sections/1007-45282.html";
            },},{id: "sections-1007-45288-f23",
          title: '1007 45288 F23',
          description: "",
          section: "Sections",handler: () => {
              window.location.href = "/sections/1007-45288-F23.html";
            },},{id: "sections-1007-45288",
          title: '1007 45288',
          description: "",
          section: "Sections",handler: () => {
              window.location.href = "/sections/1007-45288.html";
            },},{id: "sections-1007-64979",
          title: '1007 64979',
          description: "",
          section: "Sections",handler: () => {
              window.location.href = "/sections/1007-64979.html";
            },},{id: "sections-1011-42181",
          title: '1011 42181',
          description: "",
          section: "Sections",handler: () => {
              window.location.href = "/sections/1011-42181.html";
            },},{id: "sections-1011-43002",
          title: '1011 43002',
          description: "",
          section: "Sections",handler: () => {
              window.location.href = "/sections/1011-43002.html";
            },},{id: "sections-1011-43013",
          title: '1011 43013',
          description: "",
          section: "Sections",handler: () => {
              window.location.href = "/sections/1011-43013.html";
            },},{id: "sections-1011-62690",
          title: '1011 62690',
          description: "",
          section: "Sections",handler: () => {
              window.location.href = "/sections/1011-62690.html";
            },},{id: "sections-1011-62691",
          title: '1011 62691',
          description: "",
          section: "Sections",handler: () => {
              window.location.href = "/sections/1011-62691.html";
            },},{id: "sections-1011-63057",
          title: '1011 63057',
          description: "",
          section: "Sections",handler: () => {
              window.location.href = "/sections/1011-63057.html";
            },},{id: "sections-1011-63167",
          title: '1011 63167',
          description: "",
          section: "Sections",handler: () => {
              window.location.href = "/sections/1011-63167.html";
            },},{id: "sections-1018-40992",
          title: '1018 40992',
          description: "",
          section: "Sections",handler: () => {
              window.location.href = "/sections/1018-40992.html";
            },},{id: "sections-1018-40994",
          title: '1018 40994',
          description: "",
          section: "Sections",handler: () => {
              window.location.href = "/sections/1018-40994.html";
            },},{id: "sections-1018-60847",
          title: '1018 60847',
          description: "",
          section: "Sections",handler: () => {
              window.location.href = "/sections/1018-60847.html";
            },},{id: "sections-1018-62225",
          title: '1018 62225',
          description: "",
          section: "Sections",handler: () => {
              window.location.href = "/sections/1018-62225.html";
            },},{id: "sections-1031-63789",
          title: '1031 63789',
          description: "",
          section: "Sections",handler: () => {
              window.location.href = "/sections/1031-63789.html";
            },},{id: "sections-111-006-15",
          title: '111 006 15',
          description: "",
          section: "Sections",handler: () => {
              window.location.href = "/sections/111-006-15.html";
            },},{id: "sections-111-006-17",
          title: '111 006 17',
          description: "",
          section: "Sections",handler: () => {
              window.location.href = "/sections/111-006-17.html";
            },},{id: "sections-111-m13",
          title: '111 M13',
          description: "",
          section: "Sections",handler: () => {
              window.location.href = "/sections/111-M13.html";
            },},{id: "sections-115-011",
          title: '115 011',
          description: "",
          section: "Sections",handler: () => {
              window.location.href = "/sections/115-011.html";
            },},{id: "sections-116-e1b-13",
          title: '116 E1b 13',
          description: "",
          section: "Sections",handler: () => {
              window.location.href = "/sections/116-E1B-13.html";
            },},{id: "sections-116-e1b-15",
          title: '116 E1b 15',
          description: "",
          section: "Sections",handler: () => {
              window.location.href = "/sections/116-E1B-15.html";
            },},{id: "sections-116-e1b-16",
          title: '116 E1b 16',
          description: "",
          section: "Sections",handler: () => {
              window.location.href = "/sections/116-E1B-16.html";
            },},{id: "sections-116-e2b-13",
          title: '116 E2b 13',
          description: "",
          section: "Sections",handler: () => {
              window.location.href = "/sections/116-E2B-13.html";
            },},{id: "sections-116-e2b-15",
          title: '116 E2b 15',
          description: "",
          section: "Sections",handler: () => {
              window.location.href = "/sections/116-E2B-15.html";
            },},{id: "sections-116-e2b-16",
          title: '116 E2b 16',
          description: "",
          section: "Sections",handler: () => {
              window.location.href = "/sections/116-E2B-16.html";
            },},{id: "sections-122-e01",
          title: '122 E01',
          description: "",
          section: "Sections",handler: () => {
              window.location.href = "/sections/122-E01.html";
            },},{id: "sections-141-007",
          title: '141 007',
          description: "",
          section: "Sections",handler: () => {
              window.location.href = "/sections/141-007.html";
            },},{id: "sections-141-008",
          title: '141 008',
          description: "",
          section: "Sections",handler: () => {
              window.location.href = "/sections/141-008.html";
            },},{id: "sections-142-004",
          title: '142 004',
          description: "",
          section: "Sections",handler: () => {
              window.location.href = "/sections/142-004.html";
            },},{id: "sections-142-009",
          title: '142 009',
          description: "",
          section: "Sections",handler: () => {
              window.location.href = "/sections/142-009.html";
            },},{id: "sections-142-010",
          title: '142 010',
          description: "",
          section: "Sections",handler: () => {
              window.location.href = "/sections/142-010.html";
            },},{id: "sections-142-020",
          title: '142 020',
          description: "",
          section: "Sections",handler: () => {
              window.location.href = "/sections/142-020.html";
            },},{id: "sections-161-f01",
          title: '161 F01',
          description: "",
          section: "Sections",handler: () => {
              window.location.href = "/sections/161-F01.html";
            },},{id: "sections-161-f04-19",
          title: '161 F04 19',
          description: "",
          section: "Sections",handler: () => {
              window.location.href = "/sections/161-F04-19.html";
            },},{id: "sections-161-f04",
          title: '161 F04',
          description: "",
          section: "Sections",handler: () => {
              window.location.href = "/sections/161-F04.html";
            },},{id: "sections-161-s01-s20",
          title: '161 S01 S20',
          description: "",
          section: "Sections",handler: () => {
              window.location.href = "/sections/161-S01-S20.html";
            },},{id: "sections-161-s02-s20",
          title: '161 S02 S20',
          description: "",
          section: "Sections",handler: () => {
              window.location.href = "/sections/161-S02-S20.html";
            },},{id: "sections-162-f01",
          title: '162 F01',
          description: "",
          section: "Sections",handler: () => {
              window.location.href = "/sections/162-F01.html";
            },},{id: "sections-162-f03",
          title: '162 F03',
          description: "",
          section: "Sections",handler: () => {
              window.location.href = "/sections/162-F03.html";
            },},{id: "sections-162-s06",
          title: '162 S06',
          description: "",
          section: "Sections",handler: () => {
              window.location.href = "/sections/162-S06.html";
            },},{id: "sections-162-s07",
          title: '162 S07',
          description: "",
          section: "Sections",handler: () => {
              window.location.href = "/sections/162-S07.html";
            },},{id: "sections-170-002",
          title: '170 002',
          description: "",
          section: "Sections",handler: () => {
              window.location.href = "/sections/170-002.html";
            },},{id: "sections-170-007",
          title: '170 007',
          description: "",
          section: "Sections",handler: () => {
              window.location.href = "/sections/170-007.html";
            },},{id: "sections-2002-41001",
          title: '2002 41001',
          description: "",
          section: "Sections",handler: () => {
              window.location.href = "/sections/2002-41001.html";
            },},{id: "sections-2002-64042-21",
          title: '2002 64042 21',
          description: "",
          section: "Sections",handler: () => {
              window.location.href = "/sections/2002-64042-21.html";
            },},{id: "sections-2002-64042-23",
          title: '2002 64042 23',
          description: "",
          section: "Sections",handler: () => {
              window.location.href = "/sections/2002-64042-23.html";
            },},{id: "sections-2032-44879",
          title: '2032 44879',
          description: "",
          section: "Sections",handler: () => {
              window.location.href = "/sections/2032-44879.html";
            },},{id: "sections-2040-65041",
          title: '2040 65041',
          description: "",
          section: "Sections",handler: () => {
              window.location.href = "/sections/2040-65041.html";
            },},{id: "sections-243-f24",
          title: '243 F24',
          description: "",
          section: "Sections",handler: () => {
              window.location.href = "/sections/243-F24.html";
            },},{id: "sections-272",
          title: '272',
          description: "",
          section: "Sections",handler: () => {
              window.location.href = "/sections/272.html";
            },},{id: "sections-3040-64086",
          title: '3040 64086',
          description: "",
          section: "Sections",handler: () => {
              window.location.href = "/sections/3040-64086.html";
            },},{id: "sections-308-w25",
          title: '308 W25',
          description: "",
          section: "Sections",handler: () => {
              window.location.href = "/sections/308-W25.html";
            },},{id: "sections-3080-44174",
          title: '3080 44174',
          description: "",
          section: "Sections",handler: () => {
              window.location.href = "/sections/3080-44174.html";
            },},{id: "sections-3080-64863",
          title: '3080 64863',
          description: "",
          section: "Sections",handler: () => {
              window.location.href = "/sections/3080-64863.html";
            },},{id: "sections-3086-44367",
          title: '3086 44367',
          description: "",
          section: "Sections",handler: () => {
              window.location.href = "/sections/3086-44367.html";
            },},{id: "sections-3086-63395",
          title: '3086 63395',
          description: "",
          section: "Sections",handler: () => {
              window.location.href = "/sections/3086-63395.html";
            },},{id: "sections-4007-44692",
          title: '4007 44692',
          description: "",
          section: "Sections",handler: () => {
              window.location.href = "/sections/4007-44692.html";
            },},{id: "sections-4083-f25",
          title: '4083 F25',
          description: "",
          section: "Sections",handler: () => {
              window.location.href = "/sections/4083-F25.html";
            },},{id: "sections-spal",
          title: 'Spal',
          description: "",
          section: "Sections",handler: () => {
              window.location.href = "/sections/SPAL.html";
            },},{id: "sections-lean-graduate",
          title: 'Lean Graduate',
          description: "",
          section: "Sections",handler: () => {
              window.location.href = "/sections/lean-graduate.html";
            },},{id: "sections-lean",
          title: 'Lean',
          description: "",
          section: "Sections",handler: () => {
              window.location.href = "/sections/lean.html";
            },},{id: "standards-calculus-i-standards",
          title: 'Calculus I Standards',
          description: "",
          section: "Standards",handler: () => {
              window.location.href = "/standards/calcI.html";
            },},{id: "standards-calculus-ii-standards",
          title: 'Calculus II Standards',
          description: "",
          section: "Standards",handler: () => {
              window.location.href = "/standards/calcII.html";
            },},{id: "standards-calculus-iii-standards",
          title: 'Calculus III Standards',
          description: "",
          section: "Standards",handler: () => {
              window.location.href = "/standards/calcIII.html";
            },},{id: "standards-college-algebra-standards",
          title: 'College Algebra Standards',
          description: "",
          section: "Standards",handler: () => {
              window.location.href = "/standards/college_algebra.html";
            },},{id: "standards-applied-linear-algebra-standards",
          title: 'Applied Linear Algebra Standards',
          description: "",
          section: "Standards",handler: () => {
              window.location.href = "/standards/linear.html";
            },},{
        id: 'social-arxiv',
        title: 'arXiv',
        section: 'Socials',
        handler: () => {
          window.open("https://arxiv.org/a/farman_b_1# your arXiv author ID.html", "_blank");
        },
      },{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/CV-BFarman.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%62%66%61%72%6D%61%6E@%6C%61%74%65%63%68.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/farmanb", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/blake-farman", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-3624-837X", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=ySXYuuQAAAAJ", "_blank");
        },
      },{
        id: 'social-scopus',
        title: 'Scopus',
        section: 'Socials',
        handler: () => {
          window.open("https://www.scopus.com/authid/detail.uri?authorId=57219629783", "_blank");
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
