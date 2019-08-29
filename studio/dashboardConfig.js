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
                  buildHookId: '5d686292dbdf1f648104f944',
                  title: 'Sanity Studio',
                  name: 'erinjerri-portfolio-sgr-studio',
                  apiId: '4057dba8-2f7b-472f-9bb1-1a1c38325a10'
                },
                {
                  buildHookId: '5d6862920809829a2cd46243',
                  title: 'Portfolio Website',
                  name: 'erinjerri-portfolio-sgr',
                  apiId: '21a977bc-983e-4e03-b83a-53f17990fc5a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/erinjerri/erinjerri-portfolio-sgr',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://erinjerri-portfolio-sgr.netlify.com',
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
