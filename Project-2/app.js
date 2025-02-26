const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.use(express.static('public'));

let tasks = [
  { id: 1, name: 'Complete the project', status: 'Ongoing', deadline: '2024-10-10T12:00' },
  { id: 2, name: 'Submit homework', status: 'Pending', deadline: '2024-10-11T15:00' }
];


app.get('/', (req, res) => {
  return res.render('index', { tasks });
});



app.post('/add', (req, res) => {
  const newTask = {
    id: tasks.length + 1,
    name: req.body.name,
    status: req.body.status,
    deadline: req.body.deadline
  };
  tasks.push(newTask);
  return res.redirect('/');
});


app.post('/edit', (req, res) => {
  const taskId = parseInt(req.body.id);
  tasks = tasks.map(task => {
    if (task.id === taskId) {
      task.name = req.body.name;
      task.status = req.body.status;
      task.deadline = req.body.deadline;
    }
    return task;
  });
  return res.redirect('/');
});


app.post('/delete', (req, res) => {
  const taskId = parseInt(req.body.id);
  tasks = tasks.filter(task => task.id !== taskId);
  return res.redirect('/');
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});