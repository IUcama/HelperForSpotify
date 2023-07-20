import { component$, useStore, useVisibleTask$ } from '@builder.io/qwik';
// import styles from './login.module.css';

export default component$(() => {

    const profileStore = useStore({ 
        profileData: { 
            country: '',
            display_name: '',
            images: [],
            id: '',
            email: '',
            uri: '',
        } 
    });

    useVisibleTask$(() => {
        fetch("https://api.spotify.com/v1/me", {
            method: "GET", headers: { Authorization: `Bearer ${localStorage.getItem('access_token')}` }
        }).then(data => {
            return data.json();
        }).then(profileData => {
            profileStore.profileData = profileData;
            console.log('ProfileData', profileData);
        });

    });

    return (
        <div>
            <h1>Display your Spotify profile data</h1>

            <section id="profile">
            <h2>Logged in as <span id="displayName">{ profileStore.profileData.display_name }</span></h2>
            {/* <span id="avatar"><img width={200} height={200} src={ profileStore.profileData.images[0].url }></img></span> */}
            <ul>
                <li>User ID: <span id="id">{ profileStore.profileData.id }</span></li>
                <li>Email: <span id="email">{ profileStore.profileData.email }</span></li>
                <li>Spotify URI: <a id="uri" href={ profileStore.profileData.uri }>{ profileStore.profileData.uri }</a></li>
            </ul>
            </section>
        </div>
    );

});

