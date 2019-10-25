export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5db2f570ea7dddf2f2d86cb3',
                  title: 'Sanity Studio',
                  name: 'gatsby-portfolio-studio-w79w6pqo',
                  apiId: 'd779899c-4487-473c-9970-5b3bed1287cb'
                },
                {
                  buildHookId: '5db2f57033632b104ab48a8c',
                  title: 'Portfolio Website',
                  name: 'gatsby-portfolio-web-v92qa9pg',
                  apiId: '694433a6-1f59-4a9f-9292-9f5d07a49677'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/imanaspaul/gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://gatsby-portfolio-web-v92qa9pg.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
