import { component$, useVisibleTask$ } from '@builder.io/qwik';
import { useNavigate } from '@builder.io/qwik-city';

export default component$(() => {
    const nav = useNavigate();

    useVisibleTask$(() => {
        // fetch("https://api.spotify.com/v1/me", {
        //     method: "GET", headers: { Authorization: `Bearer ${localStorage.getItem('access_token')}` }
        // }).then(data => {
        //     return data.json();
        // }).then(profileData => {
        //     profileStore.profileData = profileData;
        //     console.log('ProfileData', profileData);
        // });

    });

    return (
        <div>
            <button onClick$={() => nav('/profile') }>
                Profil abrufen
            </button>
            <button onClick$={() => nav('/savedTracks') }>
                Lieblingslieder sortieren
            </button>
        </div>
    );

});

