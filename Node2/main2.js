fs.writeFile(filename, 'I love Node', function (error) {
  if (error) {
    console.error(error.message);
    return;
  }
  console.log('File Save: ', filename);
});