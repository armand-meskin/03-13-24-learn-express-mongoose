let BookInstance = require('../models/bookinstance');
let Book = require('../models/book');
const bookinstance = require('../models/bookinstance');


exports.show_all_books_status = function(res) {
  
  bookinstance.find({'status': {$eq: 'Available'}})
  .populate('book')
  .exec()
  .then(list_bookinstances => {
    res.send(list_bookinstances.map(function(bookInstance) {
      return bookInstance.book.title +  " : " + bookInstance.status;
    }));
  })
  .catch(err => res.send('Status not found'));
}