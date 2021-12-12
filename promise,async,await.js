// function getData(uId) {
//     setTimeout(() => {
//     console.log("Fetched the data!");
//     return "skc@gmail.com";
//     }, 4000);
//     }
    
//     console.log("start");
//     var email = getData("skc");
//     console.log("Email id of the user id is: " + email);
//     console.log("end");

    const getData=(uId)=>{
        return new Promise((resolve,reject)=>{
            setTimeout(() => {
                    console.log("Fetched the data!");
                   resolve( "skc@gmail.com");
                }, 4000);
        });
    };
    const callMe= async ()=>{
        console.log("start");
         let email=await getData("skc");
         console.log("Email id of the user id is: " + email);
        console.log("end");
    }
    callMe();