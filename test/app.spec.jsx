import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
// import List from '../app/components/List/List';
import axios from 'axios';
import httpAdapter from 'axios/lib/adapters/http';
import ListItem from '../app/components/ListItem/ListItem';
import App from '../app/app';


const nock = require('nock');

describe('Test App Component', () => {
  const response = [{
    id: 11,
    name: 'daming',
    age: 23,
    title: 'Mr',
  }, {
    id: 22,
    name: 'xiaohong',
    age: 22,
    title: 'Ms',
  }];
  beforeEach(() => {
    const host = 'http://localhost';
    axios.defaults.host = host;
    axios.defaults.adapter = httpAdapter;
    nock(host)
      .get('/api/user')
      .reply(200, response);
  });

  //   it('Test App Component', () => {
  //     const appWrapper = mount(<App />);
  //     const itemWappers = appWrapper.find(ListItem);
  //     expect(itemWappers.at(0).find('span').first().text()).to.equal('xiaoming');
  //   });

  const appWrapper = mount(<App />);
  it('Test Load button', (done) => {
    // axios.get('/api/user')
    //   .then((res) => {
    //     console.log(res);
    //   }).catch(() => {
    //     console.log('error');
    //   });
    appWrapper.find('.test').simulate('click');
    // appWrapper.instance().loadItemFromServer();
    // const itemWappers = appWrapper.find(ListItem);
    // expect(itemWappers.at(0).find('span').first().text()).to.equal('daming');
    // setImmediate(() => {
    //   const itemWappers = appWrapper.find(ListItem);
    //   expect(itemWappers.at(0).find('span').first().text()).to.equal('daming');

    //   done();
    // });
    setTimeout(() => {
      done();
    }, 50);
  });

  it('Check new name', () => {
    appWrapper.update();
    const itemWappers = appWrapper.find(ListItem);
    console.log(itemWappers.at(0).text());
    expect(itemWappers.at(0).find('span').first().text()).to.equal('daming');
  });
});
