const base_url = "https://api.football-data.org/v2/";
const auth_token = "36621d2494bf4f0e8aaa5550913c02e8";

const status = response => {
    if (response.status !== 200) {
        console.log(`Error: ${response.status}`);
        return Promise.reject(new Error(response.statusText));
    } else {
        return Promise.resolve(response);
    }
}

const json = response => {
    return response.json();
}

const error = error => {
    console.log(`Error: ${error}`);
}

const getStandings = () => {
    if ("caches" in window) {
        caches.match(`${base_url}competitions/2021/standings`)
            .then(response => {
                if (response) {
                    response.json()
                        .then(data => {
                            let standingsHTML = "";
                            let standings = data.standings[0];
                            standingsHTML += `
                            <h4 class="center-align">${data.competition.name}</h4>
                            <table class="responsive-table centered highlight">
                                <thead>
                                    <tr>
                                        <th>Position</th>
                                        <th>Logo</th>
                                        <th>Name</th>
                                        <th>Played Games</th>
                                        <th>Won</th>
                                        <th>Draw</th>
                                        <th>Lost</th>
                                        <th>Points</th>
                                        <th>Detail</th>
                                    </tr>
                                </thead>
                        
                                <tbody>`;

                            standings.table.forEach(data => {
                                standingsHTML += `
                                <tr>
                                    <td>${data.position}</td>
                                    <td><img src="${data.team.crestUrl}" class="responsive-img" alt="logo" style="max-height: 20px"></td>
                                    <td>${data.team.name}</td>
                                    <td>${data.playedGames}</td>
                                    <td>${data.won}</td>
                                    <td>${data.draw}</td>
                                    <td>${data.lost}</td>
                                    <td>${data.points}</td>
                                    <td><a href="./standings.html?id=${data.team.id}"><i class="material-icons">search</i></a></td>
                                </tr>`;
                            });

                            standingsHTML += `
                                </tbody>
                            </table>`;

                            document.getElementById("standings").innerHTML = standingsHTML;
                        })
                }
            })
    }

    return fetch(`${base_url}competitions/2021/standings`, {
        headers: {
            "X-Auth-Token": auth_token
        }
    })
        .then(status)
        .then(json)
        .then(data => {
            let standingsHTML = "";
            let standings = data.standings[0];
            standingsHTML += `
            <h4 class="center-align">${data.competition.name}</h4>
            <table class="responsive-table centered highlight">
                <thead>
                    <tr>
                        <th>Position</th>
                        <th>Logo</th>
                        <th>Name</th>
                        <th>Played Games</th>
                        <th>Won</th>
                        <th>Draw</th>
                        <th>Lost</th>
                        <th>Points</th>
                        <th>Detail</th>
                    </tr>
                </thead>
        
                <tbody>`;

            standings.table.forEach(data => {
                standingsHTML += `
                <tr>
                    <td>${data.position}</td>
                    <td><img src="${data.team.crestUrl}" class="responsive-img" alt="logo" style="max-height: 20px"></td>
                    <td>${data.team.name}</td>
                    <td>${data.playedGames}</td>
                    <td>${data.won}</td>
                    <td>${data.draw}</td>
                    <td>${data.lost}</td>
                    <td>${data.points}</td>
                    <td><a href="./standings.html?id=${data.team.id}"><i class="material-icons">search</i></a></td>
                </tr>`;
            });

            standingsHTML += `
                </tbody>
            </table>`;

            document.getElementById("standings").innerHTML = standingsHTML;
        })
        .catch(error)
}

const getStandingById = () => {
    return new Promise((resolve, reject) => {
        const urlParams = new URLSearchParams(window.location.search);
        const idParam = urlParams.get("id");

        if ("caches" in window) {
            caches.match(`${base_url}teams/${idParam}`)
                .then(response => {
                    if (response) {
                        response.json()
                            .then(data => {
                                let standingHTML = "";

                                standingHTML += `
                                <div class="card">
                                    <div class="card-image">
                                        <img src="${data.crestUrl}" class="responsive-img" alt="Thubmnail" style="max-height: 200px;">
                                    </div>
                                    <div class="card-content">
                                        <span class="card-title">${data.name}</span>
                                        <table>
                                            <tr>
                                                <th>Official Website</th>
                                                <td><a href="${data.website}" target="blank">${data.website}</a></td>
                                            </tr>
                                            <tr>
                                                <th>Address</th>
                                                <td>${data.address}</td>
                                            </tr>
                                            <tr>
                                                <th>Email</th>
                                                <td>${data.email}</td>
                                            </tr>
                                            <tr>
                                                <th>Phone</th>
                                                <td>${data.phone}</td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>`;

                                document.getElementById("body-content").innerHTML = standingHTML;
                                resolve(data);
                            })
                    }
                })
        }

        return fetch(`${base_url}teams/${idParam}`, {
            headers: {
                "X-Auth-Token": auth_token
            }
        })
            .then(status)
            .then(json)
            .then(data => {
                let standingHTML = "";

                standingHTML += `
                <div class="card">
                    <div class="card-image">
                        <img src="${data.crestUrl}" class="responsive-img" alt="Thubmnail" style="max-height: 200px;">
                    </div>
                    <div class="card-content">
                        <span class="card-title">${data.name}</span>
                        <table>
                            <tr>
                                <th>Official Website</th>
                                <td><a href="${data.website}" target="blank">${data.website}</a></td>
                            </tr>
                            <tr>
                                <th>Address</th>
                                <td>${data.address}</td>
                            </tr>
                            <tr>
                                <th>Email</th>
                                <td>${data.email}</td>
                            </tr>
                            <tr>
                                <th>Phone</th>
                                <td>${data.phone}</td>
                            </tr>
                        </table>
                    </div>
                </div>`;

                document.getElementById("body-content").innerHTML = standingHTML;
                resolve(data);
            })
            .catch(error)
    })
}