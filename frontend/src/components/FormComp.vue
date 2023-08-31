<template>
        <div class="container-fluid">
            <h2>Contact Page</h2>
            <form class="contact-box" action="https://formspree.io/f/xrgwzvyn" method="post">
                <div class="row">
                    <div class="col">
                        <input type="text" class="form-control" placeholder="First name" minlength="3" maxlength="20" required
                            oninvalid="this.setCustomValidity('Please Enter Your Name')" oninput="this.setCustomValidity('')"
                            aria-label="First name">
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Last name" minlength="3" maxlength="20" required
                            oninvalid="this.setCustomValidity('Please Enter Your Name')" oninput="this.setCustomValidity('')"
                            aria-label="Last name">
                    </div>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button class="btn btn-outline-success" type="submit">Submit</button>
            </form>
        </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>