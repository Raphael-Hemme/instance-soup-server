const express = require('express');

/* const formatted = data.infos.map((el) => {
  return {
    id: el.fields.id,
    author: el.fields.author,
    title: el.fields.title,
    abstract: el.fields.abstract,
    date: el.fields.creationDate,
    level: el.fields.level,
    image: el.fields.image.fields.file.url,
    video: el.fields.video,
    info: el.fields.info
  };
}); */

const mockData = [{
    id: 1,
    author: 'Ben Paget',
    title: 'My Electric Sheep',
    abstract: 'This is just random stuff to show an abstract',
    date: '2020-07-23',
    level: 2,
    image: 'https://irights.info/wp-content/uploads/2016/05/notsure-490x368.jpg',
    video: 'kfghlsdkfhjsdlh', 
    info: 'lalalalalalalalalalalalalalalalalalalallala',
    topics: ['chilli', 'chillo', 'hamsterkaese', 'self-improvement']
},
{
  id: 2,
  author: 'Btx Pups',
  title: 'TableTennis',
  abstract: 'This is just random stuff to show an abstract',
  date: '2020-07-23',
  level: 2,
  image: 'https://irights.info/wp-content/uploads/2016/05/notsure-490x368.jpg',
  video: 'kfghlsdkfhjsdlh', 
  info: 'lalalalalalalalalalalalalalalalalalalallala',
  topics: ['chilli', 'chillo', 'hamsterkaese', 'self-improvement']
},
{
  id: 3,
  author: 'John Doe',
  title: 'Jimmies Knopfsammlung [leider not PC]',
  abstract: 'This is just random stuff to show an abstract',
  date: '2020-07-23',
  level: 2,
  image: 'https://irights.info/wp-content/uploads/2016/05/notsure-490x368.jpg',
  video: 'kfghlsdkfhjsdlh', 
  info: 'lalalalalalalalalalalalalalalalalalalallala',
  topics: ['chilli', 'chillo', 'hamsterkaese', 'self-improvement']
}];

module.exports = mockData 