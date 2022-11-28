import myTrot from "lodash.throttle";
import myTrotHomeWork from "lodash.throttle";
const ourForm = document.querySelector('.feedback-form');
const ourInput = document.querySelector('.feedback-form input');
const ourMessage = document.querySelector('.feedback-form textarea');
checkLocalStorage();
ourForm.addEventListener('input', myTrotHomeWork(giveValueinLocalS),500);
ourForm.addEventListener('submit', cleanForm);
function giveValueinLocalS(e) {
        const {
        email,
        message
       } = e.currentTarget.elements;
    const ourData = {
        [email.name]: email.value,
        [message.name]: message.value
    }
   
    const parsValue = JSON.stringify(ourData);
   
    localStorage.setItem("feedback-form-state", parsValue);

}
function checkLocalStorage() {
    const dataForlocalS = localStorage.getItem("feedback-form-state");
    if (dataForlocalS) {
        const checkedData = JSON.parse(dataForlocalS);
        ourInput.value = checkedData.email;
        ourMessage.value = checkedData.message;
        }
}
function cleanForm(el) {
    el.preventDefault();
       const {
        email,
        message
       } = el.currentTarget.elements;
    const ourData = {
        [email.name]: email.value,
        [message.name]: message.value
    }
    
    if (email.value && message.value) {
        console.log(ourData);
         el.currentTarget.reset();
        localStorage.removeItem("feedback-form-state");
        return 
    } alert("You do not fill all fields");
    
   
}
