export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '5f7b5dc7d56539183903ec01',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-etit4q89',
                  apiId: 'c9276cb3-36d2-436e-9d88-011dd31b9f92'
                },
                {
                  buildHookId: '5f7b5dc7ae4c381ab6da4f53',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-op6ysxct',
                  apiId: 'fc205a1e-5d40-43d2-acc2-cacfecbfe39f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rijadhusic/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-op6ysxct.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
