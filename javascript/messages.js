
// page element where rows will be inserted 
const messageRows = document.getElementById('messageRows');

// Get JSON array of messages
// Async call
  async function getMessages() {
    try {
      const messages = await getMessagesAsync();
      displayMessages(messages);
      //console.log(messages);
  
    } // catch and log any errors
    catch (err) {
      console.log(err);
    }
  }

async function displayMessages(messages) {

  // clear existing rows - otherwise items will be repeated
  messageRows.innerHTML = '';

  // Use the Array map method to iterate through the array of message documents
  // Each message will be formated as HTML table rows and added to the array
  // see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
  // Finally the output array is inserted as the content into the <tbody id="productRows"> element.
  const tableRows = messages.map(msg => {
    return `<tr>
          <td>${msg.id}</td>
          <td>${msg.data().type}</td>
          <td>${msg.data().level}</td>
          <td>${msg.data().timestamp}</td>
          <td>${msg.data().source}</td>
          <td>${msg.data().computer}</td>
          <td>${msg.data().user}</td>
          <td>${msg.data().description}</td>
      </tr>`;
  });

  messageRows.innerHTML = tableRows.join('');
}


// Update page with AJAX call ever 5000ms
function doPoll(){
  getMessages();
  setTimeout(doPoll,5000);
}


// Load data
getMessages();
doPoll();