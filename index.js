function league_di(cptname,cptlogo){
    return `
        
        <h3>
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
            <div style="width: 150px;height: 5px;background-color: red;border-radius: .25rem;">
                <span style="display:block;width: 92%;height: 5px;background-color: green;border-radius: .25rem;">
                    <span style="display:block;width: 43%;height: 5px;background-color: blue;border-radius: .25rem;"></span>
                </span>
            </div>
            </td>
            <td style="width:30%;">${away_name} <img src="${away_logo}" style="height:20px;" alt=""></td>
            </div>
                
                
                
                
        </tr>`

}

window.addEventListener('load', () => {

    fetch('https://lopronostic-api.herokuapp.com/test').
    then(res => res.json()).
    then(json => {
        json.league.forEach((l)=> {
            document.getElementById("leagues").innerHTML += league_di(l.name, l.emblem)
        });
        json.matches.forEach((match) => {
            document.getElementById(match.competition.name).innerHTML += hello(match.date,match.competition.name,match.competition.logo,match.homeTeam.name,match.homeTeam.logo,match.awayTeam.name,match.awayTeam.logo)
        })

    })

})