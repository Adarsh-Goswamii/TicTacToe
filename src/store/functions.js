function startTimer(setTime) {
    return setInterval(()=> setTime(prev=> prev-1) , 1000);
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function delayBy10(timer, setTimer) {
    console.log("Function called");
    clearInterval(timer);
    console.log("timer cleared");
    await delay(10000); 
    return setTimer(startTimer()); 
}