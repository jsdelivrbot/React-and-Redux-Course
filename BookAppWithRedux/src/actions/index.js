export function selectBook(book) {
  // selectBook is an ActionCreater, it needs to return an actions,
  // an object with a type property
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}
