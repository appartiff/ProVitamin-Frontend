<template>
    <div>
        <header class="color-background--dark-shade">
            <div id="navbar">
                <section class="header-section">
                    <div class="content--center">
                        <div class="flex-container main-nav desktop--max-width width-full">
                            <div class="logo-container">logo</div>
                            <div class="search-container">
                                <SearchInput></SearchInput>
                            </div>
                            <div class="nav-right-container">
                                <nav>
                                    <NavigationLogin></NavigationLogin>
                                    <Basket></Basket>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div class="content--center">
                        <div class="flex-container sub-nav desktop--max-width width-full">
                            <ul class="text--color--light-shades">
                                <li>
                                    <NavigationCell text="Produkter">
                                        <font-awesome-icon slot="icon" :icon="['fas', 'chevron-down']"/>
                                    </NavigationCell>
                                </li>
                                <li>
                                    <NavigationCell text="Merker">
                                    <font-awesome-icon slot="icon" :icon="['fas', 'chevron-down']"/>
                                </NavigationCell>
                                </li>
                                <NavigationCell text="Tilbud">
                                </NavigationCell>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </header>
        <nuxt/>
    </div>
</template>
<script>
    import SearchInput from '../components/navigation/SearchInput';
    import NavigationLogin from '../components/navigation/NavigationLogin';
    import Basket from '../components/navigation/Basket';
    import NavigationCell from '../components/buttons/NavigationCell';

    export default {
        components:
            {
                SearchInput,
                NavigationLogin,
                Basket,
                NavigationCell
            }
    }
</script>

<style>
    html {
        box-sizing: border-box;
    }

    *,
    *:before,
    *:after {
        box-sizing: border-box;
        margin: 0;
    }

    .main-nav {
        padding: 1em;
    }

    #navbar * {
        box-sizing: border-box;
    }

    .header-section {
        display: flex;
        flex-direction: column;
    }

    .width-full {
        width: 100%;
    }

    .content--horizontal-center {
        display: flex;
        justify-content: center;
    }

    .content--center {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .content--vertical-center {
        display: flex;
        align-items: center;
    }

    .sub-nav {
    }

    .flex-container {
        display: flex;
        color: #fff;
    }

    .search-container {
        flex-grow: 1;
        display: flex; /* establish flex container */
        flex-direction: column; /* make main axis vertical */
        justify-content: center; /* center items vertically, in this case */
        align-items: center; /* center items horizontally, in this case */
    }

    .logo-container {
        flex-grow: 1; /* default 0 */
    }

    .nav-right-container {
        flex-grow: 1;
    }

    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
    }

    li {
        float: left;
    }

    li a {

        display: block;
        color: white;
        text-align: center;
        padding: 16px;
        text-decoration: none;
    }

    nav {
        display: flex;
    }
</style>
