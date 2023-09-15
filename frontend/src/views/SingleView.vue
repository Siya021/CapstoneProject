<template>
    <div>
        <div class="row" style="align-items: center; justify-content: center; padding: 24px" v-if="product">
            <div class="col-md-5" style="border: 1px red solid">
                <img :src="product.productUrl" class="single-view">
            </div>
            <div id="details" class="col-md-5" style="background-color: red; color:white; height: 590px; padding: 7px ">
                <h4 style="font-weight: 700;font-size: 60px;">{{ product.prodName }}</h4>
                <p style="font-weight: 700; font-size: 40px; background-color: white; color: red">{{ product.brand }}</p>
                <h2>R{{ product.price }}.00</h2>
                <label for="checkout"><small>Pay Now:</small></label> <a href="/checkout"><svg
                        xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor"
                        class="bi bi-credit-card" viewBox="0 0 16 16">
                        <path
                            d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z" />
                        <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z" />
                    </svg></a>
                <!--sizes-->
                <div class="container-fluid">
                    <p>Choose Your Size:</p>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1"
                            value="option1">
                        <label class="form-check-label" for="inlineRadio1">1</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"
                            value="option2">
                        <label class="form-check-label" for="inlineRadio2">2</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"
                            value="option2">
                        <label class="form-check-label" for="inlineRadio2">3</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"
                            value="option2">
                        <label class="form-check-label" for="inlineRadio2">4</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"
                            value="option2">
                        <label class="form-check-label" for="inlineRadio2">5</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"
                            value="option2">
                        <label class="form-check-label" for="inlineRadio2">6</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"
                            value="option2">
                        <label class="form-check-label" for="inlineRadio2">7</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"
                            value="option2">
                        <label class="form-check-label" for="inlineRadio2">8</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"
                            value="option2">
                        <label class="form-check-label" for="inlineRadio2">9</label>
                    </div>
                </div>
                <!--sizes-->
                <div class="d-grid gap-2" style="margin-bottom: 10px;">
                    <button class="btn" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="26"
                            height="26" fill="red" class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                            <path
                                d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
                        </svg></button>
                </div>
                <div class="t_c-details">
                    <p style="font-size: 8px;">Terms and Conditions for Solexpress
                        1. Introduction
                        1.1. These Terms and Conditions (hereinafter referred to as "T&Cs") govern the use of Solexpress's
                        services and products (hereinafter referred to as the "Service").
                        1.2. By accessing or using the Service, you agree to comply with and be bound by these T&Cs.

                        2. Definitions
                        2.1. "Solexpress" refers to our company, [Your Company Name], with its registered office at [Your
                        Address].
                        2.2. "User" refers to any person or entity using the Service.
                        2.3. "Content" refers to any information, text, images, or other materials provided through the
                        Service.

                        3. Use of the Service
                        3.1. Users must be at least 18 years of age or have the legal capacity to enter into agreements.
                        3.2. Users are responsible for maintaining the confidentiality of their account credentials.
                        3.3. Users agree not to use the Service for any unlawful purposes or in violation of these T&Cs.

                        4. Payment and Pricing
                        4.1. Payment for services or products provided by Solexpress shall be made in accordance with the
                        pricing and payment terms specified by Solexpress.
                        4.2. All prices are subject to change at Solexpress's discretion.

                        5. Privacy Policy
                        5.1. Users' personal information will be handled in accordance with Solexpress's Privacy Policy.

                        6. Content Ownership
                        6.1. All Content provided through the Service remains the property of Solexpress or its content
                        providers.

                        7. Limitation of Liability
                        7.1. Solexpress shall not be liable for any direct, indirect, incidental, or consequential damages
                        arising out of the use of the Service.
                        7.2. Users agree to indemnify and hold Solexpress harmless from any claims or liabilities arising
                        from their use of the Service.

                        8. Termination
                        8.1. Solexpress reserves the right to terminate or suspend a user's access to the Service for
                        violations of these T&Cs or any other reason.

                        9. Changes to Terms and Conditions
                        9.1. Solexpress reserves the right to modify or update these T&Cs at any time. Users will be
                        notified of any changes.

                        10. Governing Law and Jurisdiction
                        10.1. These T&Cs shall be governed by and construed in accordance with the laws of [Your
                        Jurisdiction].
                        10.2. Any disputes arising out of or related to these T&Cs shall be subject to the exclusive
                        jurisdiction of the courts in [Your Jurisdiction].

                        11. Contact Information
                        11.1. For any questions or concerns regarding these T&Cs, please contact us at [Your Contact
                        Information].

                        These Terms and Conditions for Solexpress were last updated on [Date of Last Update].
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        product() {
            return this.$store.state.Product;
        },
    },
    mounted() {
        this.$store.dispatch("fetchProduct", this.$route.params.prodID);
    },
}
</script>

<style scoped>
.d-grid {
    margin-top: 40px;
}

.bi {
    color: white;
}
.btn{
    background-color: black;
}

.btn:hover {
    background-color: white;
    color: black;
    border: white;
}

.container-fluid {
    border: solid rgb(0, 0, 0) 4px;
}

.form-check #details {
    padding: 10px;
    margin-top: 30px;
}

h2 {
    font-family: monospace;
    font-weight: bold;
    background-color: black;
    color: white;
}

.single-view {
    width: 100%;
    height: 590px;
}</style>