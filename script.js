let user = document.querySelector('.user');

    function addSometext() {
        user.innerHTML = `<div class="modal-content rounded-4 shadow">
          <div class="modal-header border-bottom-0">
            <h1 class="modal-title fs-5">Modal title</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onclick="dltText()"></button>
          </div>
          <div class="modal-body py-0">
            <p>This is a modal sheet, a variation of the modal that docs itself to the bottom of the viewport like the newer share sheets in iOS.</p>
          </div>
          <div class="modal-footer flex-column align-items-stretch w-100 gap-2 pb-3 border-top-0">
            <button type="button" class="btn btn-lg btn-primary">Save changes</button>
            <button type="button" class="btn btn-lg btn-secondary" data-bs-dismiss="modal" onclick="dltText()">Close</button>
          </div>
        </div>`;
    }

    function dltText() {
        user.innerHTML = '';
    }

    document.getElementById('showModal').addEventListener('click', addSometext);
    document.getElementById('hideModal').addEventListener('click', dltText);