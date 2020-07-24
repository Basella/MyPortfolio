const express = require('express');
const path = require('path');
const app = express();

// app.use('/js', express.static(__dirname + '/js'));
// app.use('/dist', express.static(__dirname + '/../dist'));
// app.use('/css', express.static(__dirname + '/css'));
// app.use('/partials', express.static(__dirname + '/partials'));
// app.use(express.static(__dirname + '/src/app'));
// app.use(express.static(__dirname + '/src/app/app.component.html'));

// app.all('/*', (req, res, next) => {
//     // Just send the index.html for other files to support HTML5Mode
//     res.sendFile('app.component.html', { root: __dirname + '/src/app/' });
//     // res.sendFile(path.join(ROOTDIR, 'dist/My-Research-Portfolio/index.html'));
// });

// app.use(express.static(__dirname +  '/dist/My-Research-Portfolio'));
app.use(express.static('dist'));
// app.use('/docs', express.static('./src/app/undergrad-docs/undergrad-docs.component.html'));


// app.use('/docs', (req, res) => {
//   // app.use(express.static(path.join(ROOTDIR, 'src/app/undergrad-docs/undergrad-docs.component.html')));
//   res.sendFile(path.join(ROOTDIR, 'src/app/undergrad-docs/undergrad-docs.component.html'));
//   res.render(path.join(ROOTDIR, 'src/app/undergrad-docs/undergrad-docs.component.html'));
//   // res.sendFile(path.join(ROOTDIR, 'src/app/undergrad-docs/undergrad-docs.component.html'));
// });
// app.use('/publications', (req, res) => {
//   app.use(express.static(path.join(ROOTDIR, 'src/app/publications/publications.component.html')));
//   // res.sendFile(path.join(ROOTDIR, 'src/app/undergrad-docs/undergrad-docs.component.html'));
// });
// app.use('/resume', (req, res) => {
//   app.use(express.static(path.join(ROOTDIR, 'src/app/curriculum-vitae/curriculum-vitae.component.html')));
//   // res.sendFile(path.join(ROOTDIR, 'src/app/undergrad-docs/undergrad-docs.component.html'));
// });


// app.use('/publications', (req, res) => {
//   res.sendFile(path.join(ROOTDIR, 'src/app/publications/publications.component.html'));
// });
// app.use('/resume', (req, res) => {
//   res.sendFile(path.join(ROOTDIR, 'src/app/curriculum-vitae/curriculum-vitae.component.html'));
// });


// app.use(express.static(path.join(ROOTDIR, '/src/app/app.component.html')));
// app.use(express.static('./src/index.html'));

app.get('/*', (req, res) => {
  res.sendFile('index.html');
  // res.sendFile(path.join(__dirname + '/dist/my-research-portfolio/index.html'));
  // res.sendFile(path.join(ROOTDIR, 'src/app/mainpage/mainpage.component.html'));
  // res.sendFile('app.component.html', { root: 'src/app/'});
});

// app.listen(process.env.PORT || 3000);
app.listen(process.env.PORT || 3000, () => {
  console.log(`Listening on port ${process.env.PORT || 3000}`);
});
