<template>
    <div>
        <footer class="d-flex p-2
    ">
            <div class="row">
                <div class="col-4 border-left">
                    <LogoComp/>
                    <hr>
                    <h5>Follow Us</h5>
                    <div class="social-container">
                        
                    </div>
                </div>
                <div class="col-4">
                    <h3><i class="bi bi-geo-alt-fill">Address</i></h3>
                    <Address>
                        10721 Dubu Crescent, Browns Farm, Phillipi, Cape Town, Western Cape, 7750
                    </Address>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-primary" type="submit"><i class="bi bi-search"></i></button>
                    </form>
                </div>
                <div class="col-4">
                    <div class="container-fluid">
    
                    </div>
                </div>
                <hr>
                <div class="text-center p-3">
                    <p>&COPY; SoleXpress 2023</p>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
import LogoComp from './LogoComp.vue';
export default {
    components: {
    LogoComp
}
}
</script>

<style scoped>

.social-container {
    display: flex;
    justify-content: center;
}

footer {
    background-color:rgb(0, 0, 0);
    color: white;
    position: relative;
    align-content: center;
    justify-content: center;
}

.bi {
    height: 100px !important;
    width: 100px !important;
}

.col-4 {
    padding: 2rem;
    text-align: center;
}


.container-fluid {
    margin-top: 10px;
}
</style>