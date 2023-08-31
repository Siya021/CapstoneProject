<template>
    <div>
        <footer class="d-flex p-2
    ">
            <div class="row">
                <div class="col-4 border-left">
                    <h1>SNEAKER<span>SYNC</span></h1>
                    <p>Step In Sync, Stride In Style</p>
                    <hr>
                    <h5>Follow Us</h5>
                    <div class="social-container">
                        <ul class="nav justify-content-end">
                            <li class="nav-item">
                                <a class="nav-link active" href=""><i class="bi bi-facebook"></i></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href=""><i class="bi bi-twitter"></i></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"><i class="bi bi-instagram"></i></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"><i class="bi bi-envelope-at"></i></a>
                            </li>
                        </ul>
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
                        <MapComp />
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
export default {

}
</script>

<style scoped>
i{
    color:white;
    font-size: large;

}

.social-container {
    display: flex;
    justify-content: center;
}

footer {
    background-color:blue;
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