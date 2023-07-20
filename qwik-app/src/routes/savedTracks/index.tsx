import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import SavedTracks from "~/components/spotify/savedTracks/savedTracks";

export default component$(() => {
    return (
      <>
        <div class="container container-flex">
            <p>Hello Helper for Spotify - SavedTracks</p>
            <SavedTracks />
        </div>
      </>
    );
  });
  
  export const head: DocumentHead = {
    title: 'Helper for Spotify',
    meta: [
      {
        name: 'Helper for Spotify',
        content: 'Helper for Spotify',
      },
    ],
  };