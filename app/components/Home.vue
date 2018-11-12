<template>
    <Page>
        <ActionBar title="Home Page">
            <ActionItem @tap="onTapEdit"
                        v-show="!isEditing"
                        ios.systemIcon="2" ios.position="right"
                        android.systemIcon="ic_menu_edit"></ActionItem>
            <ActionItem @tap="onTapSave"
                        v-show="isEditing"
                        ios.systemIcon="3" ios.position="right"
                        android.systemIcon="ic_menu_save"></ActionItem>
            <ActionItem @tap="onTapCancel"
                        v-show="isEditing"
                        ios.systemIcon="1"
                        android.systemIcon="ic_menu_close_clear_cancel"></ActionItem>
            <ActionItem @tap="onTapDetails"
                        ios.systemIcon="4"
                        text="Details"></ActionItem>
        </ActionBar>
        <TextView text="Hello, you on <Home> page"></TextView>
    </Page>
</template>

<script>
    export default {
        name: "Home",
        data() {
            return {
                isEditing: false,
            };
        },
        methods: {
            onTapEdit() {},
            onTapSave() {},
            onTapCancel() {},
            onTapDetails() {
                this.$router.push('/detail');
            },
        }
    }
</script>

<style scoped>

</style>