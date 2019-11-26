const express = require('express');
const bodyParser = require('body-parser');//解析,用req.body获取post参数
const moment = require('moment');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

let users = [{
  id: 1,
  date: '2016-05-02',
  name: '王小虎1',
  address: '上海市普陀区金沙江路 1518 弄',
}, {
  id: 2,
  date: '2016-05-04',
  name: '王小虎2',
  address: '上海市普陀区金沙江路 1517 弄',
}, {
  id: 3,
  date: '2016-05-01',
  name: '王小虎3',
  address: '上海市普陀区金沙江路 1519 弄',
}, {
  id: 4,
  date: '2016-05-03',
  name: '王小虎4',
  address: '上海市普陀区金沙江路 1516 弄',
},
  {
    id: 5,
    date: '2016-05-03',
    name: '王小虎5',
    address: '上海市普陀区金沙江路 1516 弄',
  },
  {
    id: 6,
    date: '2016-05-03',
    name: '王小虎6',
    address: '上海市普陀区金沙江路 1516 弄',
  }];


app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1');
  if (req.method === "OPTIONS") res.send(200);/*让options请求快速返回*/
  else next();
});

app.get('/', (req, res) => res.send('Hello World!'));


app.post('/data', (req, res) => {
  console.log(req);
  let params = req.body
  let curPage = params.curPage;
  let pageSize = params.pageSize;
  console.log(params);
  let curData = users.slice((curPage - 1) * pageSize, curPage * pageSize);
  let responseObj = {
    total: users.length,
    tableData: curData
  }
  res.send(responseObj)
});

app.post('/delete', (req, res) => {
  let user = req.body;
  console.log(user.id);
  for (let i = 0; i < users.length; i++) {
    if (users[i].id === user.id) {
      users.splice(i, 1);
      console.log(users);
      break;
    }
  }
});

app.post('/add', (req, res) => {
  let user = req.body;
  let id = users.length === 0 ? 0 : users[users.length - 1].id + 1;
  let date = moment().format('YYYY-MM-DD');
  users.push({
    id: id,
    name: user.name,
    address: user.address,
    date: date,
  });
});


app.post('/edit', (req, res) => {
  let user = req.body;
  for (let i = 0; i < users.length; i++) {
    if (users[i].id === user.id) {
      users[i].name = user.name;
      users[i].address = user.address;
      break;
    }
  }
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
