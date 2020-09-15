// const willGetYouDog = new Promise((resolve, reject)=>{
//     // reject();
//     // resolve();
//     const rand = Math.random()*10;
//     if(rand < 8){
//         resolve();
//     }else{
//         reject();
//     }
// }).then(()=>{
//     console.log("we got a dog");
// }).catch(()=>{
//     console.log("No dog ");
// })



// const willGetYouDog = new Promise((resolve, reject)=>{
//     // reject();
//     // resolve();

//     setTimeout(()=>{
//         const rand = Math.random()*10;
//         if(rand < 8){
//             resolve();
//         }else{
//             reject();
//         }

//     }, 5000)
// }).then(()=>{
//     console.log("we got a dog");
// }).catch(()=>{
//     console.log("No dog ");
// })


// It's kind of simulating making a request and having to wait for that request to come back.
// It's eventually resolved or rejected.We're just hard coding a five second delay for no reason.
// But imagine that something has to happen over those five seconds.
// Like we're animating something and we want to wait until the animation finishes which will return to
// that was the original impetus for promises in this section.

// We were doing a whole bunch of nested callbacks and it was hideous when we were moving that button across

// the screen.

// So another thing that we frequently do is return a promise from a function instead of just making one

// promise like we have here we could instead just get rid of my variable define a function we'll call

// this const make dog promise equals some function.

// And this function will return a promise this exact promise.



// const MakeDogPromise = ()=>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             const rand = Math.random()*10;
//             if(rand < 5){
//                 resolve();
//             }else{
//                 reject();
//             }
//         }, 5000);
//     });
// };
// MakeDogPromise()
// .then(()=>{
//     console.log("we got a dog");
// })
// .catch(()=>{
//     console.log("No dog ");
// });
//

// 8. ResolvingRejecting w Values
// The next thing to know about promises is that when you reject or resolve a promise you can reject or
// resolve it with a value and you'll have access to that value in your callback that you pass into then or catch.
// Which is really really useful because most of the time we're not just waiting on some resolve or reject
// it happens arbitrarily like a random resolve or reject.
// We want to know why was something rejected for example in the case of a HDP request.
// Why did this fail and if it didn't fail if it was resolved.
// What is the data that we got back.
// That's the point of making a request at least most of the time is you're trying to get some information.

const fakeRequest =(url)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const pages = {
                '/users':[
                    { id:1, username: 'bilbo' },
                    { id:5, username: 'esmeralda' },
                ],
                '/about': 'This is the about page!'
            };
            const data = pages[url];
            if(data){
                resolve({ status: 200, data });
            }
            else{
                reject({ status: 404 });
            }
        },3000);
    });
};

fakeRequest('/unoo')
.then((res)=>{
    console.log("response status", res.status);
    console.log('response data', res.data);
    console.log('Request worked');
})
.catch((res)=>{
    console.log('response status', res.status);
    console.log('Request Failed');
})


