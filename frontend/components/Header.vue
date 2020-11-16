<template>
    <header class="header">
        <div class="header__container">
            <a href="/" class="header__logo">
                <img src="@/assets/btc-inline-logo.png" alt="Blog logo" />
            </a>
            <nav class="header__navbar">
                <form>
                    <input id="search" type="search" name="search" />
                    <button type="submit">Search</button>
                </form>
                <ul>
                    <li><a href="/category/1">Code</a></li>
                    <li><a href="/category/2">Life</a></li>
                    <li><a href="/category/3">Career</a></li>
                </ul>
            </nav>
        </div>
    </header>
</template>
