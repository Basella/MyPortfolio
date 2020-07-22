const express = require('express');
const path = require('path');
const ROOTDIR = path.join(__dirname);
const app = express();

app.use('/js', express.static(__dirname + '/js'));
app.use('/dist', express.static(__dirname + '/../dist'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/partials', express.static(__dirname + '/partials'));
app.use(express.static('./dist/My-Research-Portfolio'));

app.use('/*', (req, res, next) => {
    // Just send the index.html for other files to support HTML5Mode
    // res.sendFile('index.html', { root: __dirname + '/src/' });
    res.sendFile(path.join(ROOTDIR, 'dist/my-research-portfolio/index.html'));
});

// app.use(express.static('./dist/My-Research-Portfolio'));
// // app.use(express.static('./src/index.html'));

// app.use((req, res) => {
//   res.sendFile(path.join(ROOTDIR, 'dist/my-research-portfolio/index.html'));
//   // res.sendFile('app.component.html', { root: 'src/app/'});
// });

app.listen(8080);
console.log('Listening on port ' + 8080);
