const fakeRequest = (url)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const pages = {
                '/users':[
                    {id:1, username: 'bilbo'},
                    {id:5, username: 'esmeralda'}
                ],
                
                '/users/1':[
                    {
                        id:1,
                        username: 'bilbo',
                        upvote: 360,
                        city:'Lisbon',
                        topPostId:454321
                    }
                ],
                '/users/5':[{
                    id: 5,
                    username: 'esmeralda',
                    upvote: 571,
                    city: 'Honululu'
                }],
                '/posts/454321': [{
                    id: 454321,
                    title: "ladies and gentleman , may i introduce you my pet pig, Hamelet"
                }],
                '/about': 'this is the about page!'                
            };
            const data = pages[url];
            if(data){
                resolve({status:200, data});
            }
            else{
                reject({status:404});
            }
        },2000)
    })
}
// fakeRequest('/users')
// .then((res)=>{
//     const resId = res.data[0].id;
//     fakeRequest(`/users/${resId}`)
//     .then((res)=>{
//         const postId = res.data[0].topPostId;
//         // console.log(res.data[0].topPostId);
//         fakeRequest(`/posts/${postId}`).then((res)=>{
//             console.log(res);
//         })
//     })

// })

// .catch((err)=>{
//     console.log('Oh No', err);
//     console.log('Request Failed');
// })

fakeRequest('/users')
.then((res)=>{
    console.log(res);
    const resId = res.data[0].id;
    return fakeRequest(`/users/${resId}`)
})

.then((res) => {
    console.log(res);
    const postId = res.data[0].topPostId;
    return fakeRequest(`/posts/${postId}`);
})
.then((res)=>{
    console.log(res);
})

.catch((err)=>{
    console.log('Oh No', err);
    console.log('Request Failed');
});


// fakeRequest('/users')
// 	.then((res) => {
// 		console.log(res);
// 		const id = res.data[0].id;
// 		return fakeRequest(`/users/${id}`);
// 	})
// 	.then((res) => {
// 		console.log(res);
// 		const postId = res.data.topPostId;
// 		return fakeRequest(`/posts/${postId}`);
// 	})
// 	.then((res) => {
// 		console.log(res);
// 	})
// 	.catch((err) => {
// 		console.log('OH NO!', err);
// 	});