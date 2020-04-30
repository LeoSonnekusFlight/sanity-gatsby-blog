export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5eaa48b87dbc39488b33aacf',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-2qn3o8a3',
                  apiId: '2714b105-1b20-4db9-8e14-b88806f4a142'
                },
                {
                  buildHookId: '5eaa48b8bf43eacbcd4f018e',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-t3mw78b1',
                  apiId: '6e7844b9-241c-4af6-83d5-353d7a4991a3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/LeoSonnekusFlight/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-t3mw78b1.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
