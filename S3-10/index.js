function positions (firstPlace, secondPlace, lastPlace){

    let arr = [firstPlace, secondPlace, lastPlace]
    
    if (arr.indexOf("Daniel") == 2 || arr.indexOf("daniel") == 2){
        arr = [firstPlace, lastPlace, secondPlace]
    } else if (arr.indexOf("Daniel") == 1 || arr.indexOf("daniel") == 1){
        arr = [secondPlace, firstPlace, lastPlace]
    }

    for (let i=0; i<arr.length; i++){
        console.log(`${i+1}° - Colocado ${arr[i]}`)
    }
}
//testes
positions("Rafael","Manoel", "Daniel")
positions("Manoel","Rafael", "Daniel")
positions("Daniel","Manoel", "Rafael")
positions("rafael","daniel","manoel")