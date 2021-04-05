import _ from 'lodash'

const users = [
  { 'user': 'barney',  'active': true },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': false }
];
const index1 = _.find(users, function(o,i) { return i === 1; });
console.log(index1)