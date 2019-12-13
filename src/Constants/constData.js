

const Tempdata = [{txt1: 'check', txt2: '', price: ''}];
const HomeTempdata = [];
const imageTempData = [
  {
    key:
      'https://tse2.mm.bing.net/th?id=OIP.EaCbJ6gidUcJ-Y7-PL6pbgHaE7&pid=Api',
    votes: '52k Votes',
    name: 'Samual Mathers',
    desc: 'Roads less traveled, places less visited, memories less reminisced.',
    tags: '#travel #mountains #HIKING',
  },
  {
    key:
      'https://tse1.mm.bing.net/th?id=OIP.F94kObaQAj5_i-loJgy_NQHaEu&pid=Api',
    votes: '52k Votes',
    name: 'Samual Mathers',
    desc: 'Roads less traveled, places less visited, memories less reminisced.',
    tags: '#travel #mountains #HIKING',
  },
  {
    key:
      'https://tse2.mm.bing.net/th?id=OIP.HBOdUCW7Qnpu77ylkmwcfAHaE8&pid=Api',
    votes: '52k Votes',
    name: 'Samual Mathers',
    desc: 'Roads less traveled, places less visited, memories less reminisced.',
    tags: '#travel #mountains #HIKING',
  },
  {
    key:
      'https://tse4.mm.bing.net/th?id=OIP.CbyIWDBcGHE41N4YH_IzDwHaEK&pid=Api',
    votes: '52k Votes',
    name: 'Samual Mathers',
    desc: 'Roads less traveled, places less visited, memories less reminisced.',
    tags: '#travel #mountains #HIKING',
  },
  {
    key:
      'https://tse1.mm.bing.net/th?id=OIP.mylUadRXNCi9zV7EEG2EsgHaFS&pid=Api',
    votes: '52k Votes',
    name: 'Samual Mathers',
    desc: 'Roads less traveled, places less visited, memories less reminisced.',
    tags: '#travel #mountains #HIKING',
  },
  {
    key:
      'https://tse4.mm.bing.net/th?id=OIP.Mnd4Nm__snwOzmUZyfcpBAHaE7&pid=Api',
    votes: '52k Votes',
    name: 'Samual Mathers',
    desc: 'Roads less traveled, places less visited, memories less reminisced.',
    tags: '#travel #mountains #HIKING',
  },
  {
    key:
      'https://tse3.mm.bing.net/th?id=OIP.sF271bD2SVjZdvHheJA6UwHaE8&pid=Api',
    votes: '52k Votes',
    name: 'Samual Mathers',
    desc: 'Roads less traveled, places less visited, memories less reminisced.',
    tags: '#travel #mountains #HIKING',
  },
  {
    key:
      'https://tse2.mm.bing.net/th?id=OIP.RCJ6Ho2tgNMJEaN2RF0J0AHaFS&pid=Api',
    votes: '52k Votes',
    name: 'Samual Mathers',
    desc: 'Roads less traveled, places less visited, memories less reminisced.',
    tags: '#travel #mountains #HIKING',
  },
  {
    key:
      'https://tse2.mm.bing.net/th?id=OIP.LCi3JXWSe-Unf0txDApq6AHaE8&pid=Api',
    votes: '52k Votes',
    name: 'Samual Mathers',
    desc: 'Roads less traveled, places less visited, memories less reminisced.',
    tags: '#travel #mountains #HIKING',
  },
  {
    key:
      'https://tse4.mm.bing.net/th?id=OIP.SHFUg2-YrNAgYnTz02X46AHaE8&pid=Api',
    votes: '52k Votes',
    name: 'Samual Mathers',
    desc: 'Roads less traveled, places less visited, memories less reminisced.',
    tags: '#travel #mountains #HIKING',
  },
  {
    key:
      'https://tse4.mm.bing.net/th?id=OIP.JnS3k0tYgP-SY3UH4YCN8gHaE8&pid=Api',
    votes: '52k Votes',
    name: 'Samual Mathers',
    desc: 'Roads less traveled, places less visited, memories less reminisced.',
    tags: '#travel #mountains #HIKING',
  },
  {
    key:
      'https://tse2.mm.bing.net/th?id=OIP.fgnIxNiJC2rVIPkvuTanNgHaE8&pid=Api',
    votes: '52k Votes',
    name: 'Samual Mathers',
    desc: 'Roads less traveled, places less visited, memories less reminisced.',
    tags: '#travel #mountains #HIKING',
  },
  {
    key:
      'https://tse2.mm.bing.net/th?id=OIP.1oQqNCw9oImacI9XkZZkSwHaE5&pid=Api',
    votes: '52k Votes',
    name: 'Samual Mathers',
    desc: 'Roads less traveled, places less visited, memories less reminisced.',
    tags: '#travel #mountains #HIKING',
  },
  {
    key:
      'https://tse3.mm.bing.net/th?id=OIP.QPa7s2MPTsNa0EcMfalLnwHaE8&pid=Api',
    votes: '52k Votes',
    name: 'Samual Mathers',
    desc: 'Roads less traveled, places less visited, memories less reminisced.',
    tags: '#travel #mountains #HIKING',
  },
  {
    key:
      'https://tse3.mm.bing.net/th?id=OIP.a82X8S29EVka-0FI7kfKHgHaE8&pid=Api',
    votes: '52k Votes',
    name: 'Samual Mathers',
    desc: 'Roads less traveled, places less visited, memories less reminisced.',
    tags: '#travel #mountains #HIKING',
  },
  {
    key:
      'https://tse3.mm.bing.net/th?id=OIP.dnJEgXJxL6_9KLTeXa8kCAHaKX&pid=Api',
    votes: '52k Votes',
    name: 'Samual Mathers',
    desc: 'Roads less traveled, places less visited, memories less reminisced.',
    tags: '#travel #mountains #HIKING',
  },
  {
    key:
      'https://tse1.mm.bing.net/th?id=OIP.p4iR-KIAoNOD7qTbmPYllAHaE8&pid=Api',
    votes: '52k Votes',
    name: 'Samual Mathers',
    desc: 'Roads less traveled, places less visited, memories less reminisced.',
    tags: '#travel #mountains #HIKING',
  },
  {
    key:
      'https://tse2.mm.bing.net/th?id=OIP.27HLoo_s3Imjps800afiyQHaEP&pid=Api',
    votes: '52k Votes',
    name: 'Samual Mathers',
    desc: 'Roads less traveled, places less visited, memories less reminisced.',
    tags: '#travel #mountains #HIKING',
  },
  {
    key:
      'https://tse4.mm.bing.net/th?id=OIP.1A5YJxQQIxktTcoGJ4hBAAHaE8&pid=Api',
    votes: '52k Votes',
    name: 'Samual Mathers',
    desc: 'Roads less traveled, places less visited, memories less reminisced.',
    tags: '#travel #mountains #HIKING',
  },
  {
    key:
      'https://tse4.mm.bing.net/th?id=OIP.GuOkJLurElGRXXcV_vdqggHaFj&pid=Api',
    votes: '52k Votes',
    name: 'Samual Mathers',
    desc: 'Roads less traveled, places less visited, memories less reminisced.',
    tags: '#travel #mountains #HIKING',
  },
  {
    key:
      'https://tse4.mm.bing.net/th?id=OIP.RjLNfXXrQKGLYwleJdL1HQHaFj&pid=Api',
    votes: '52k Votes',
    name: 'Samual Mathers',
    desc: 'Roads less traveled, places less visited, memories less reminisced.',
    tags: '#travel #mountains #HIKING',
  },
];
const faqData = [
  {
    que: 'When does a new challenge start and how can I know?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi quis commodo odio aenean sed adipiscing diam donec. ',
  },
  {
    que:
      'How will I know I have won the challenge and how will I get the prize money?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi quis commodo odio aenean sed adipiscing diam donec. ',
  },
  {
    que:
      'How do I upload a picture in any challenge and what are the basic rules of submissions?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi quis commodo odio aenean sed adipiscing diam donec. ',
  },
  {
    que:
      'Lorem ipsum dolor sit amet, consectetur piscing elit, sed do eiusmod tempor?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi quis commodo odio aenean sed adipiscing diam donec. ',
  },
  {
    que:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt molli?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi quis commodo odio aenean sed adipiscing diam donec. ',
  },
];
const signUpData = [{name: '', userName: '', email: '', password: ''}];

export {imageTempData,HomeTempdata,Tempdata,faqData,signUpData}