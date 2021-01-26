fetch(
  // Explain each parameter in comments below.\
  // per page = results per page (10)
  // state = Indicates the state of the issues to return. (open, closed or all)
  // sort = What to sort results by.
  // direction = ascending or descending order (how to return sorted results)
  'https://api.github.com/repos/nodejs/node/issues?per_page=10&state=open&sort=created&direction=desc'
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
// Parameter explanation.
