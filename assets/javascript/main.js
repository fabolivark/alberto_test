var AlbertoApi = {};
AlbertoApi.apiUrl = "https://koombea-dummy-api.herokuapp.com/people/";


AlbertoApi._request = function(){
  var url;
  url  = this.apiUrl;
  fetch(url)  
  .then(
    function(response) {  
      if (response.status !== 200) {  
        console.log(  
        response.status);  
        return;  
      }
      response.json().then(function(data) {
        var contacts = data.people;
        var listContainer =  document.getElementById("listContainer")
        listContainer.innerHTML = contacts.map(function (contact) {
          return '<li class="contact-list__item"><div class="contact-list__image"><img src="'+ contact.avatar_url +'" alt=""></div><div class="contact-list__info"><span class="contact-list__name">'+ contact.first_name + ' ' + contact.last_name +'</span><span class="contact-list__age">('+ contact.birthdate +') - </span><span class="contact-list__phone">'+ contact.phone +'</span></div></li>'
        }).join('');
     });  
    }  
  )  
  .catch(function(err) {  
    console.log('Fetch Error :-S', err);  
  });
}


AlbertoApi._request();