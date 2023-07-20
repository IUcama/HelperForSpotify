import { component$, useStore, useVisibleTask$ } from '@builder.io/qwik';
import { isBrowser } from '@builder.io/qwik/build';
import { useLocation, useNavigate } from '@builder.io/qwik-city';
// import styles from './login.module.css';
import { clientId } from './../../../../environment';

export default component$(() => {
    const location = useLocation();
    const nav = useNavigate();

    const store = useStore({ codeReceived: false, code: '' });

    useVisibleTask$(() => {
        const accessToken = localStorage.getItem('access_token');
        console.log("AT", accessToken);
        if(accessToken == null) {
            console.log("No AT");
            const urlParams = new URLSearchParams(location.url.searchParams);
            store.code = urlParams.get('code') ?? store.code;
            const codeVerifier = localStorage.getItem('verifier') ?? '';
        
            if (store.code && store.code !== '') {
                store.codeReceived = true;
            }

            const body = new URLSearchParams({
                grant_type: 'authorization_code',
                code: store.code,
                redirect_uri: 'http://www.iucama.de:11180/callback',
                client_id: clientId,
                code_verifier: codeVerifier
            });

            fetch('https://accounts.spotify.com/api/token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: body
                })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('HTTP status ' + response.status);
                    }
                    return response.json();
                })
                .then(data => {
                    if(isBrowser) {
                        localStorage.setItem('access_token', data.access_token);
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        } else {
            console.log("Access token avail. Will now redirect!!")
            // nav('/profile');
            nav('/overview');
        }
        
    });

    return (
        <div>
            <p>Bitte warten...</p>
        </div>
    );
});

