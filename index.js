function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
  return $("input").val().toString()
}

function addNewElementAsLi() {
  $('ul.employee-list').append(`<li>${retrieveEmployeeInformation()}</li>`)
}

function addNewLiOnClick() {
  $('input').on('click', addNewElementAsLi())
}
