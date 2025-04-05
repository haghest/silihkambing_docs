
module.exports = {
    title: 'Silih-Silih Kambing', // appended to all page titles
    description: 'Dokumentasi Animasi Silih-Silih Kambing',
    lastUpdated: true,
    head: [['link', { rel: 'icon', href: '/favicon.gif' }]],
    cleanUrls: true,
    
    markdown: {
     
        image: {
            lazyLoading: true
        }
    },
    themeConfig: {
      editLink: {
        pattern: 'https://github.com/haghest/silihkambing_docs/edit/main/docs/:path',
           text: 'Edit this page on GitHub'
      },
        docFooter: {
            prev: 'Sebelumnya',
            next: 'Selanjutnya'
          },
        search: {
            provider: 'local'
          },
        sidebar: [
            {
              items: [
                { text: 'Introduction', link: '/' },
                { text: 'Google Drive', link: 'https://s.id/silihkambing' },
                { text: 'Storyboard', link: 'https://drive.google.com/file/d/1rPCir-aATRFcG5sabPFIV6Oczoj8GIhv/view?usp=drive_link' },
                { text: 'Script', link: 'https://drive.google.com/file/d/1HZIr5_J__nsxNjsNGXm7Lf87NPV3HsbN/view?usp=drive_link' },

              ]
            },
            {
                text: 'Animasi',
                items: [
                    { text: 'Add-ons dan Tools', link: '/animasi/addon' },
                  { text: 'Action Keys', link: '/animasi/action-keys' },
                  { text: 'Rigging Mulut', link: '/animasi/rigging-mulut' },
                  {text: 'Camera',collapsed: false, items: [ { text: 'Follow Path', link: '/animasi/camera/follow-path' },
                    { text: 'Switch Camera', link: '/animasi/camera/switch' }]},
                  { text: 'Panduan Render', link: '/animasi/render' }
                ]
              },
            {
                text: 'Karakter',
                items: [
                  { text: 'Anjing', link: '/karakter/anjing' },
                  { text: 'Kambing', link: '/karakter/kambing' },
                  { text: 'Environment', link: '/karakter/environment' }
                ]
              },
             
          ],
          socialLinks: [
            // You can add any icon from simple-icons (https://simpleicons.org/):
            { icon: 'youtube', link: 'https://youtube.com/@nuvantaraa' },
            { icon: 'github', link: 'https://github.com/haghest' },
          ]
          
    },
}

