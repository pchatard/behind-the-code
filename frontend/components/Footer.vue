<template>
    <footer class="footer">
        <div class="social-links">
            <a href="/" target="_blank" rel="noopener noreferrer">
                <img src="~assets/profile.jpg" alt="" />
            </a>
            <a
                href="https://www.github.com/pchatard"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src="~assets/github.png" alt="GitHub logo" />
            </a>
            <a href="/" target="_blank" rel="noopener noreferrer">
                <img src="~assets/linkedin.png" alt="LinkedIn logo" />
            </a>
            <a
                href="https://twitter.com/pierre_codes"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src="~assets/twitter.png" alt="Twitter logo" />
            </a>
        </div>
        <p class="copyright">Behind The Code © {{ year }}</p>
        <p>
            Tous droits réservés. Créé par
            <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                class="author"
            >
                Pierre Chatard
            </a>
        </p>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            year: new Date().getFullYear(),
        };
    },
};
</script>
