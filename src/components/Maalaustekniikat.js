/**
 * Maalit ja työkalut -sivun näkymä
*/

const Maalaustekniikat = () => (
    <div class="container-fluid px-0">
        <div class="row Maalit_ja_tyokalut_sisalto">
            <div class="col-3">
                <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <a 
                        class="nav-link nav-link-color active" 
                        id="v-pills-home-tab" 
                        data-toggle="pill" 
                        href="#v-pills-aloitus" 
                        role="tab" 
                        aria-controls="v-pills-aloitus" 
                        aria-selected="true">
                        Esittely
                    </a>
                    <a 
                        class="nav-link nav-link-color" 
                        id="v-pills-profile-tab" 
                        data-toggle="pill" 
                        href="#v-pills-profile" 
                        role="tab" 
                        aria-controls="v-pills-profile" 
                        	aria-selected="false">
                        Undercoating
                    </a>
                    <a 
                        class="nav-link nav-link-color" 
                        id="v-pills-messages-tab"
                        data-toggle="pill" 
                        href="#v-pills-messages" 
                        role="tab" 
                        aria-controls="v-pills-messages" 
                        aria-selected="false">
                        Basecoating
                    </a>
                    <a 
                        class="nav-link nav-link-color" 
                        id="v-pills-settings-tab" 
                        data-toggle="pill" 
                        href="#v-pills-settings" 
                        role="tab" 
                        aria-controls="v-pills-settings"
                        aria-selected="false">
                        Layering
                    </a>
                </div>
            </div>
            <div class="col-9">
                <div class="col-12">
                    <div class="tab-content" id="v-pills-tabContent">
                        <div class="tab-pane fade show active" id="v-pills-aloitus" role="tabpanel" aria-labelledby="v-pills-home-tab">
                            <h1>Maalaustekniikat</h1>
                            <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            </p>
                        </div>
                        <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                            <h1>Undercoating</h1>
                            <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            </p>
                        </div>
                        <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                            <h1>Basecoating</h1>
                            <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            </p>
                        </div>
                        <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                            <h1>Layering</h1>
                            <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div >
)

export default Maalaustekniikat;