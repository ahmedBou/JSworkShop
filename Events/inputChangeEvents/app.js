const form = document.querySelector('#signup-form');
const creditCard= document.querySelector('#cc');
const check= document.querySelector('#check');
const vegie= document.querySelector('#veggie');
const formData = {};

for(let input of [creditCard, check, vegie]){
    input.addEventListener('input', ({target})=>{
        // console.log(e.target.name);
        // console.log(e.target.checked);
        console.log(target);
        const {type, name, value, checked} = target;
        formData[name] = type === 'checkbox' ? checked : value; 
        console.log(formData);
        // if(e.target.check){
        //     formData[e.target.name] = e.target.checked;
        // }else{
        // formData[e.target.name] = e.target.value;

        // }


    });
}



// we have input and change to different events. If I just switch this over to be a change event it will still work pretty much the same
// way we've got selected veggie asparagus.This is updating but here this won't update until I lose focus so I just clicked away or if I hit
// enter or just typing in the input doesn't trigger that event but focusing or losing focus which is called blurring the input or hitting 
// enter will change it.Otherwise these two are the same.You can't really incrementally change the checkbox or the select it's just yes or no.
// But with a text input there is a difference between the change event and the input event that we had earlier.
// So input will just always update whenever this updates or whenever the input itself has any new characters in there it triggers the event.

// for(let input of [creditCard, check, vegie]){
//     input.addEventListener('change', ({target})=>{
//         // console.log(e.target.name);
//         // console.log(e.target.checked);
//         console.log(target);
//         const {type, name, value, checked} = target;
//         formData[name] = type === 'checkbox' ? checked : value; 
//         console.log(formData);
//         // if(e.target.check){
//         //     formData[e.target.name] = e.target.checked;
//         // }else{
//         // formData[e.target.name] = e.target.value;

//         // }


//     });
// }




// creditCard.addEventListener('input', function(e){
//     console.log(e);
//     formData['cc'] = e.target.value;
//     console.log(formData);
// })

// vegie.addEventListener('input', function(e){
//     console.log(e);
//     formData['vegie'] = e.target.value;
//     console.log(formData);
// })
// check.addEventListener('input', function(e){
//     console.log(e);
//     formData['check'] = e.target.checked;
//     console.log(formData);
// })
// there's a better way of writing this.This is three separate event listeners which is fine.We need to attach an event listener to each one.
// What is not great is that we're hard coding these in it, would be nice if we could have one event listeners where I could
// say something like you know in the event listener and in the callback where I could figure out which
// input we were working with Take That input get its value and then just store that in the form data dynamically
// which we can do. And here is the simplest way of doing that I'll comment these out. so we will add a name to each input
