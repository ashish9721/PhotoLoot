import {combineReducers} from 'redux';

const Tempdata = [{txt1: 'check', txt2: '', price: ''}];
const HomeTempdata = [];
const imageTempData = [
  {
    key:
      'https://tse2.mm.bing.net/th?id=OIP.EaCbJ6gidUcJ-Y7-PL6pbgHaE7&pid=Api',
  },
  {
    key:
      'https://tse1.mm.bing.net/th?id=OIP.F94kObaQAj5_i-loJgy_NQHaEu&pid=Api',
  },
  {
    key:
      'https://tse2.mm.bing.net/th?id=OIP.HBOdUCW7Qnpu77ylkmwcfAHaE8&pid=Api',
  },
  {
    key:
      'https://tse4.mm.bing.net/th?id=OIP.CbyIWDBcGHE41N4YH_IzDwHaEK&pid=Api',
  },
  {
    key:
      'https://tse1.mm.bing.net/th?id=OIP.mylUadRXNCi9zV7EEG2EsgHaFS&pid=Api',
  },
  {
    key:
      'https://tse4.mm.bing.net/th?id=OIP.Mnd4Nm__snwOzmUZyfcpBAHaE7&pid=Api',
  },
  {
    key:
      'https://tse3.mm.bing.net/th?id=OIP.sF271bD2SVjZdvHheJA6UwHaE8&pid=Api',
  },
  {
    key:
      'https://tse2.mm.bing.net/th?id=OIP.RCJ6Ho2tgNMJEaN2RF0J0AHaFS&pid=Api',
  },
  {
    key:
      'https://tse2.mm.bing.net/th?id=OIP.LCi3JXWSe-Unf0txDApq6AHaE8&pid=Api',
  },
  {
    key:
      'https://tse4.mm.bing.net/th?id=OIP.SHFUg2-YrNAgYnTz02X46AHaE8&pid=Api',
  },
  {
    key:
      'https://tse4.mm.bing.net/th?id=OIP.JnS3k0tYgP-SY3UH4YCN8gHaE8&pid=Api',
  },
  {
    key:
      'https://tse2.mm.bing.net/th?id=OIP.fgnIxNiJC2rVIPkvuTanNgHaE8&pid=Api',
  },
  {
    key:
      'https://tse2.mm.bing.net/th?id=OIP.1oQqNCw9oImacI9XkZZkSwHaE5&pid=Api',
  },
  {
    key:
      'https://tse3.mm.bing.net/th?id=OIP.QPa7s2MPTsNa0EcMfalLnwHaE8&pid=Api',
  },
  {
    key:
      'https://tse3.mm.bing.net/th?id=OIP.a82X8S29EVka-0FI7kfKHgHaE8&pid=Api',
  },
  {
    key:
      'https://tse3.mm.bing.net/th?id=OIP.dnJEgXJxL6_9KLTeXa8kCAHaKX&pid=Api',
  },
  {
    key:
      'https://tse1.mm.bing.net/th?id=OIP.p4iR-KIAoNOD7qTbmPYllAHaE8&pid=Api',
  },
  {
    key:
      'https://tse2.mm.bing.net/th?id=OIP.27HLoo_s3Imjps800afiyQHaEP&pid=Api',
  },
  {
    key:
      'https://tse4.mm.bing.net/th?id=OIP.1A5YJxQQIxktTcoGJ4hBAAHaE8&pid=Api',
  },
  {
    key:
      'https://tse4.mm.bing.net/th?id=OIP.GuOkJLurElGRXXcV_vdqggHaFj&pid=Api',
  },
  {
    key:
      'https://tse4.mm.bing.net/th?id=OIP.RjLNfXXrQKGLYwleJdL1HQHaFj&pid=Api',
  },
];
export const cardReducer = (state = Tempdata, action) => {
  switch (action.type) {
    case 'cardReducer':
      return {...state, ...action.payload};

    default:
      return state;
  }
};
export const homeReducer = (state = HomeTempdata, action) => {
  switch (action.type) {
    case 'homeReducer':
      return {...state, ...action.payload};
    default:
      return state;
  }
};
export const galleryReducer = (
  state = {imageTempData: imageTempData},
  action,
) => {
  switch (action.type) {
    case 'galleryReducer':
      return {...state, ...action.payload};
    default:
      return state;
  }
};
export const reducer = combineReducers({
  cardReducer: cardReducer,
  homeReducer: homeReducer,
  galleryReducer: galleryReducer,
});
