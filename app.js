fetch('data.json')
  .then(function (response) {
              return response.json()
            })
            .then(function (data) {
                appendData(data)
            })
            .catch(function (err) {
                console.log('error: ' + err)
            });

        function appendData(data) {
            var mainContainer = document.getElementsByClassName("data")
            var columnHeight = document.getElementsByClassName('column-size')
            for (var i = 0; i < data.length; i++) {
              for (var i = 0; i < mainContainer.length; i++) {
                for (var i = 0; i < columnHeight.length; i++) {
                mainContainer[i].innerHTML = '$' + data[i].amount
                columnHeight[i].style.height = data[i].amount + '%'
                }
              }
            }
        }
