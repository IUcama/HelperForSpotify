import { component$ } from '@builder.io/qwik';
import { useNavigate } from '@builder.io/qwik-city';
// import styles from './login.module.css';

export default component$(() => {
    const nav = useNavigate();

    // if (!code) {
        return (
            <div>
                <button
                    onClick$={async() => {
                    // await nav('http://www.iucama.de:11181/login');
                    fetch('http://www.iucama.de:11181/authLink').then((response: Response) => {
                        response.json().then(async returnObj => {
                            const link = returnObj.link;
                            const verifier = returnObj.verifier;

                            if (link && verifier) {
                                localStorage.removeItem('access_token');
                                localStorage.setItem('verifier', verifier);
                                await nav(link);
                            }
                        });
                    });
                    }}
                >
                Login
                </button>
          </div>
        );
    // }

});
