import React from 'react';
import ReactDOM from 'react-dom';
import SignUp from './SignUp'
const Modal = ({ isShowing, hide }) => isShowing ? ReactDOM.createPortal(

  <>
    <div className="modal-overlay" />
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modal">
        <div className="modal-header">
          <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <SignUp />
      </div>
    </div>
  </>, document.body

) : null;
export default Modal;







// <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
// <div class="modal-dialog">
//     <div class="modal-content">
//         <div class="modal-header">
//             <h5 class="modal-title" id="exampleModalLabel">New message</h5>
//             <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//         </div>
//         <div class="modal-body">
//             <form>
//                 <div class="mb-3">
//                     <label for="recipient-name" class="col-form-label">Recipient:</label>
//                     <input type="text" class="form-control" id="recipient-name" />
//                 </div>
//                 <div class="mb-3">
//                     <label for="message-text" class="col-form-label">Message:</label>
//                     <textarea class="form-control" id="message-text"></textarea>
//                 </div>
//             </form>
//         </div>
//         <div class="modal-footer">
//             <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//             <button type="button" class="btn btn-primary">Send message</button>
//         </div>
//     </div>
// </div>
// </div>