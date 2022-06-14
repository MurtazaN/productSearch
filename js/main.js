document.querySelector('button').addEventListener('click', makeReq)

async function makeReq(){

  const _id = document.querySelector('input').value;
  const res = await fetch(`/api/${_id}`)
  const data = await res.json()

  console.log(data);
  document.querySelector('#bookTitle').textContent = "Title: " + data.title
  document.querySelector('#bookIsbn13').textContent = "ISBN13: " + data.isbn13
  document.querySelector('#bookIsbn').textContent = "ISBN: " + data.isbn
  document.querySelector('#bookImage').src = data.image
  document.querySelector('#bookId').textContent = "Book ID: " + data.id
  document.querySelector('#bookLink').href = data.link
  document.querySelector('#bookLink').innerText = "Book link"
  document.querySelector('#bookCustomer_rating').textContent = "Customer Rating: " + data.customer_rating
}