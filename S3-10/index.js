function positions(firstPlace, secondPlace, lastPlace){
    if (firstPlace == "Rafael" || firstPlace == "rafael"){
        firstPlace = `1° - Colocado ${firstPlace}. `
        secondPlace = `2° - Colocado ${secondPlace}. `
        lastPlace = `3° - Colocado ${lastPlace}. `
    } else if (secondPlace == "Rafael" || secondPlace == "rafael") {
        firstPlace = `1° - Colocado ${secondPlace}. `
        secondPlace = `2° - Colocado ${firstPlace}. `
        lastPlace = `3° - Colocado ${lastPlace}. `
    } else if (lastPlace == "Rafael" || lastPlace == "rafael"){
        firstPlace = `1° - Colocado ${firstPlace}. `
        secondPlace = `2° - Colocado ${lastPlace}. `
        lastPlace = `3° - Colocado ${secondPlace}. `
    }

     console.log (firstPlace+secondPlace+lastPlace)

}

//testes
positions("Rafael","Manoel", "Daniel")
positions("Manoel","Rafael", "Daniel")
positions("Daniel","Manoel", "Rafael")
positions("daniel","rafael","manoel")