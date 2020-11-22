const toggleModal = () => {
    document.querySelector('.modal1')
            .classList.toggle('modal--hidden1');

}

document.querySelector('#show-modal-1')
        .addEventListener('click', toggleModal);


document.querySelector('#modal__close-bar1')
        .addEventListener('click', toggleModal);

        
const toggleModal2 = () => {
        document.querySelector('.modal2')
                .classList.toggle('modal--hidden2');  
        }
        
document.querySelector('#show-modal-2')
        .addEventListener('click', toggleModal2);


document.querySelector('#modal__close-bar2')
        .addEventListener('click', toggleModal2);
        
            

// function toggleModal() {

// }
// document.querySelector('')