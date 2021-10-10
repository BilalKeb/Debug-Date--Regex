function whatDayIsToday () {
    var date = new Date ()
    var dayNumber= date.getDay()
    var days = ["Dimanche","Lundi","Mardi", "Mercredi","Jeudi","Venredi ", "Samedi"]
    console.log ("Aujourd'hui  Nous sommes " + days[dayNumber])
    
    
    
}
whatDayIsToday();

// Exercice2

function whatMonthIsIt () {
    var mois = new Date()
    var numberMonth= mois.getMonth()
    console.log(numberMonth);
    
    var month = ["Janvier","Fevrier","Mars", "Avril","Mai", "Juin", "Juillet", "Aout","Septembre","Octobre","Novembre","Decembre", ]
                                            console.log("Nous sommes au mois de "+month[numberMonth])


}
whatMonthIsIt()

// Exercice 3 
function formatDate () {
 var years=new Date()
 var month =new Date()
 var days =new Date()

 var numberYears =years.getFullYear()
 var numberMonth= month.getMonth()
 var numberdays = days.getDay()
 
 var days = ["Dimanche","Lundi","Mardi", "Mercredi","Jeudi","Venredi ", "Samedi"]
 var month = ["Janvier","Fevrier","Mars", "Avril","Mai", "Juin", "Juillet", "Aout","Septembre","Octobre","Novembre","Decembre", ]
 var years = ["2020","2021"]
console.log (numberYears[years]+numberMonth[month]+numberdays[days])
}



formatDate()







// Exercice-4:

function calculateAge(str) {
    var birthday = new Date(str)
    var yearBirthday = birthday.getFullYear()
    var today = new Date()
    var todayYear = today.getFullYear()
    var age = todayYear - yearBirthday
    var monthBirthday = birthday.getMonth()
    var todayMonth = today.getMonth()
    if (monthBirthday > todayMonth) {
        console.log(age - 1)
    } else {
        console.log(age)
    }
}
calculateAge("1994/08/06")
console.log("")













