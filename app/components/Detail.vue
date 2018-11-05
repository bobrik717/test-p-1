<template>
    <Page>
        <ActionBar :title="$route.path">
            <NavigationButton text="Back!" android.systemIcon="ic_menu_back" @tap="$router.back()" />
        </ActionBar>
        <StackLayout>
            <Button text="To Details" @tap="$router.push('/login')"></Button>
        </StackLayout>
    </Page>
</template>

<script>
    export default {
        name: "Detail"
    }
</script>

<style scoped>

</style>