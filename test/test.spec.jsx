// import React from 'react';
// import { expect } from 'chai';
// import { shallow } from 'enzyme';
// import List from '../app/components/List/List';
// import ListItem from '../app/components/ListItem/ListItem';

// describe('Test using enzyme', () => {
//   const items = [{
//     id: 1,
//     name: 'liqiang',
//     age: 25,
//     title: 'Mr',
//   }, {
//     id: 2,
//     name: 'zhangwei',
//     age: 33,
//     title: 'Ms',
//   }, {
//     id: 3,
//     name: 'liubao',
//     age: 22,
//     title: 'Mr',
//   }];
//   it('Test List Component', () => {
//     const list = shallow(<List items={items} delete={() => {}} />);
//     expect(list.find(ListItem).length).to.equal(items.length);
//   });

//   it('Test ListItem Component', () => {
//     const item = {
//       id: 1,
//       name: 'liqiang',
//       age: 25,
//       title: 'Mr',
//     };

//     const listItemWrapper = shallow(<ListItem {...item} onClick={() => {}} />);

//     // console.log(listItemWrapper.children().last()));
//     expect(listItemWrapper.find('span').at(0).text()).to.equal(item.name);
//     expect(listItemWrapper.find('span').at(1).text()).to.equal(item.age.toString());
//     expect(listItemWrapper.find('span').at(2).text()).to.equal(item.title);

//     expect(listItemWrapper.children().last().is('button')).to.equal(true);
//   });
// });
