<template>
    <Page>
        <FlexboxLayout class="page">
            <StackLayout class="form">
                <Image class="logo" src="~/assets/images/logo.png"></Image>
                <Label class="header" text="Login"></Label>
                <StackLayout class="input-field">
                    <TextField
                            ref="email"
                            class="input"
                            hint="Email"
                            keyboardType="email"
                            autocorrect="false"
                            autocapitalizationType="none"
                            v-model="user.email"
                            returnKeyType="next"
                            @returnPress="focusPassword">
                    </TextField>
                    <StackLayout class="hr-light"></StackLayout>
                </StackLayout>

                <StackLayout class="input-field">
                    <TextField
                            ref="passwordInput"
                            class="input"
                            hint="Password"
                            secure="true"
                            v-model="user.password"
                            returnKeyType="isLoggingIn ? 'done' : 'next'"
                            @returnPress="focusConfirmPassword">
                    </TextField>
                    <StackLayout class="hr-light"></StackLayout>
                </StackLayout>

                <StackLayout v-show="!isLoggingIn" class="input-field">
                    <TextField
                            ref="confirmPasswordInput"
                            class="input"
                            hint="Confirm password"
                            secure="true"
                            v-model="user.confirmPassword"
                            returnKeyType="done">
                    </TextField>
                    <StackLayout class="hr-light"></StackLayout>
                </StackLayout>

                <Button v-bind:text="isLoggingIn ? 'Log In' : 'Sign Up'" @tap="submit()"
                        class="btn btn-primary m-t-20"></Button>
                <Label v-if="isLoggingIn" text="Forgot your password?" class="login-label"
                       @tap="forgotPassword()"></Label>
            </StackLayout>

            <Label class="login-label sign-up-label" @tap="toggleForm">
                <FormattedString>
                    <Span v-bind:text="isLoggingIn ? 'Don’t have an account? ' : 'Back to Login'"></Span>
                    <Span v-bind:text="isLoggingIn ? 'Sign up' : ''" class="bold"></Span>
                </FormattedString>
            </Label>
        </FlexboxLayout>
    </Page>
</template>

<script>
    import {User} from "../user/user-model";
    import {alert, prompt} from "tns-core-modules/ui/dialogs";

    export default {
        name: "login",
        data() {
            return {
                isLoggingIn: true,
                user: new User(),

            };
        },
        methods: {
            toggleForm() {
                this.isLoggingIn = !this.isLoggingIn;
            },
            focusPassword() {
                this.$refs.passwordInput.nativeView.focus();
            },
            focusConfirmPassword() {
                if (!this.isLoggingIn) {
                    this.$refs.confirmPasswordInput.nativeView.focus();
                }
            },
            forgotPassword() {
                prompt({
                    title: "Forgot Password",
                    message: "Enter the email address you used to register for APP NAME to reset your password.",
                    inputType: "email",
                    defaultText: "",
                    okButtonText: "Ok",
                    cancelButtonText: "Cancel"
                }).then((data) => {
                    if (data.result) {
                        console.log('res');
                        //this.userService.resetPassword(data.text.trim())
                        //.then(() => {
                        //  this.alert("Your password was successfully reset. Please check your email for instructions on choosing a new password.");
                        //}).catch(() => {
                        //  this.alert("Unfortunately, an error occurred resetting your password.");
                        //});
                    }
                });
            },
            submit() {
                if (!this.user.email || !this.user.password) {
                    this.alert("Please provide both an email address and password.");
                    return;
                }

                if (this.isLoggingIn) {
                    this.login();
                } else {
                    this.register();
                }
            },
            login() {
                console.log('login');
                this.$store.commit('login');
                this.$router.push('/detail');
            },
            register() {
                console.log('register');
                this.$store.commit('login');
                this.$router.push('/detail');
            },
            alert(message) {
                return alert({
                    title: "APP NAME",
                    okButtonText: "OK",
                    message: message
                });
            }
        },
    }
</script>

<style scoped>
    .page {
        align-items: center;
        flex-direction: column;
    }

    .form {
        margin-left: 30;
        margin-right: 30;
        flex-grow: 2;
        vertical-align: middle;
    }

    .logo {
        margin-bottom: 12;
        height: 90;
        font-weight: bold;
    }

    .header {
        horizontal-align: center;
        font-size: 25;
        font-weight: 600;
        margin-bottom: 70;
        text-align: center;
        color: #D51A1A;
    }

    .input-field {
        margin-bottom: 25;
    }

    .input {
        font-size: 18;
        placeholder-color: #A8A8A8;
    }

    .btn-primary {
        height: 50;
        margin: 30 5 15 5;
        background-color: #D51A1A;
        border-radius: 5;
        font-size: 20;
        font-weight: 600;
    }

    .login-label {
        horizontal-align: center;
        color: #A8A8A8;
        font-size: 16;
    }

    .sign-up-label {
        margin-bottom: 20;
    }

    .bold {
        color: #000000;
    }
</style>