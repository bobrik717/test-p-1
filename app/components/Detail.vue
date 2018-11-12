<template>
    <Page>
        <ActionBar :title="$route.path">
            <NavigationButton text="Back!" android.systemIcon="ic_menu_back" @tap="$router.back()"></NavigationButton>
        </ActionBar>
        <StackLayout>
            <Button text="To Home" @tap="$router.push('/home')"></Button>
            <ListView for="user in users" >
                <v-template>
                    <Label :text="user.email"></Label>
                    <Label :text="user.password"></Label>
                </v-template>
            </ListView>
        </StackLayout>
    </Page>
</template>

<script>
    import * as http from "http";

    export default {
        name: "Detail",
        data() {
            return {
                users: [],
            };
        },
        methods: {
            getUsers() {
                http.getJSON('http://93.77.105.26:8080/')
                    .then(res => {
                        this.users = res;
                        console.log(this.users);
                    });
            }
        },
        mounted() {
            this.getUsers();
        }
    }
</script>

<style scoped>

</style>