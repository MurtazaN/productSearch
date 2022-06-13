document.querySelector('button').addEventListener('click', makeReq)

async function makeReq(){

  const _id = document.querySelector('input').value;
  const res = await fetch(`/api/${_id}`)
  const data = await res.json()

  console.log(data)
  document.querySelector('#bookIsbn').textContent = data.isbn
//   document.querySelector("#bookTitle").textContent = data.title
//   document.querySelector("#bookIsbn13").textContent = data.isbn13
//   document.querySelector("#bookIsbn").textContent = data.isbn
//   document.querySelector("#bookImage").textContent = data.image
//   document.querySelector("#book_id").textContent = data._id
//   document.querySelector("#bookLink").textContent = data.link
//   document.querySelector("#bookCustomer_rating").textContent = data.customer_rating
}