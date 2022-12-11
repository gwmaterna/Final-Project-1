// const GAMES_ENDPOINT = 'https://apimocha.com/yourfavoritegame/games';
const GAMES_ENDPOINT = 'https://635046bb3e9fa1244e43053a.mockapi.io/games_API/games';

class ProjectsApi { 
    get = async () => {
        try {
            const resp = await fetch(GAMES_ENDPOINT);
            const data = await resp.json();
            return data;
        }  catch (e) {
            console.log('There/s an issue with json resp', e);
        }
    }

    put = async (games) => {
        try {
        const resp = await fetch(`${GAMES_ENDPOINT}/${games.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(games)
        });
        return await resp.json();
    }   catch(e) {
        console.log('There/s an issue with update post', e);
        }
    } 

    delete = async (games) => {
        try {
            const resp = await fetch(`${GAMES_ENDPOINT}/${games.id}`, {
                method: 'DELETE'
            });
            return await resp.json();
        } catch (e) {
            console.log('There/s an issue with delete post', e);
        }
    };
}

export const projectsApi = new ProjectsApi();