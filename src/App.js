import {leagueService} from "./services/leagueService";

const App = () => {
    leagueService.getAll().then(({data})=> console.log(data))
    return (
        <div>
            App
        </div>
    );
};

export {App};