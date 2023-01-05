loader = document.getElementById("loader")
function displayLoading() {
    loader.classList.add("display");
    // to stop loading after some time
    setTimeout(() => {
        loader.classList.remove("display");
    }, 5000);
}

function hideLoading() {
    loader.classList.remove("display");
}

function league_di(cptname,cptlogo){
    return `
        
        <h3 class="league_name">
            <img src="${cptlogo}" style="height:50px;" alt="">
            ${cptname}
        </h3>
        <table id="table_1672735737955" class="table table-striped table-sm">
            <tbody id="${cptname}">
                
            </tbody>
        </table>
    `
}
function hello(date,cptname,cptlogo,home_name,home_logo,away_name,away_logo) {
    var d = new Date(date);
    const weekday = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];
    // console.log(d.getUTCHours());
    return `
        <tr>
            <td style="width:10%;">${weekday[d.getUTCDay()]+ " "+d.getDate()+"/"+(d.getUTCMonth()+1)+"/"+d.getUTCFullYear()}</td>
            <td style="width: 10%;">${d.getHours()+":"+d.getUTCMinutes()}</td>
            <div>
            <td style="width:30%;"><img src="${home_logo}" style="height:20px;" alt=""> ${home_name}</td>
            <td>
            
            <div class="percentages" style="background-color: red; position:relative">
            
                <span class="percentage percentage_home" style="left: 0;">43%</span>
                <span class="percentage percentage_draw" style="left: 43%;">49%</span>
                <span class="percentage percentage_away" style="right: 0;">8%</span>
            </div>
            <div class="bar_100">
                <span class="bar_draw" style="width: 92%;">
                    <span class="bar_home" style="width: 43%;"></span>
                </span>
            </div>
            </td>
            <td style="width:30%;">${away_name} <img src="${away_logo}" style="height:20px;" alt=""></td>
            </div>
                
                
                
                
        </tr>`

}

window.addEventListener('load', () => {
    displayLoading()
    fetch('https://lopronostic-api.herokuapp.com/test').
    then(res => {
        loader.classList.remove('display');
        return res.json()
    }).
    then(json => {
        json.league.forEach((l)=> {
            document.getElementById("leagues").innerHTML += league_di(l.name, l.emblem)
        });
        json.matches.forEach((match) => {
            document.getElementById(match.competition.name).innerHTML += hello(match.date,match.competition.name,match.competition.logo,match.homeTeam.name,match.homeTeam.logo,match.awayTeam.name,match.awayTeam.logo)
        })

    })

})