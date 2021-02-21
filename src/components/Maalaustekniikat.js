/**
 * Maalit ja työkalut -sivun näkymä
*/

const Maalaustekniikat = () => (
    <div class="container-fluid">
        <div class="row Maalaustekniikat-sisalto">
            <div class="col-xs-12 col-sm-6 col-md-3 col-lg-2">
                <div class="nav flex-column nav-pills-maalaustekniikat" id="pills-tab" role="tablist" aria-orientation="vertical">
                    <a 
                        class="nav-link nav-link-maalaustekniikat-color active" 
                        id="pills-home-tab" 
                        data-toggle="pill" 
                        href="#aloitus" 
                        role="tab" 
                        aria-controls="pills-aloitus" 
                        aria-selected="true">
                        Maalaustekniikoista
                    </a>
                    <a 
                        class="nav-link nav-link-maalaustekniikat-color" 
                        id="pills-undercoating-tab" 
                        data-toggle="pill" 
                        href="#undercoating" 
                        role="tab" 
                        aria-controls="pills-undercoating" 
                        aria-selected="false">
                        Undercoating
                    </a>
                    <a 
                        class="nav-link nav-link-maalaustekniikat-color" 
                        id="pills-basecoating-tab"
                        data-toggle="pill" 
                        href="#basecoating" 
                        role="tab" 
                        aria-controls="pills-basecoating" 
                        aria-selected="false">
                        Basecoating
                    </a>
                    <a 
                        class="nav-link nav-link-maalaustekniikat-color" 
                        id="pills-layering-tab" 
                        data-toggle="pill" 
                        href="#layering" 
                        role="tab" 
                        aria-controls="pills-layering"
                        aria-selected="false">
                        Layering
                    </a>
                    <a 
                        class="nav-link nav-link-maalaustekniikat-color" 
                        id="pills-wetBlending-tab" 
                        data-toggle="pill" 
                        href="#wetBlending" 
                        role="tab" 
                        aria-controls="pills-wetBlending"
                        aria-selected="false">
                        Wet Blending
                    </a>
                    <a 
                        class="nav-link nav-link-maalaustekniikat-color" 
                        id="pills-drybrushing-tab" 
                        data-toggle="pill" 
                        href="#drybrushing" 
                        role="tab" 
                        aria-controls="pills-drybrushing"
                        aria-selected="false">
                        Drybrushing
                    </a>
                    <a 
                        class="nav-link nav-link-maalaustekniikat-color" 
                        id="pills-shading-tab" 
                        data-toggle="pill" 
                        href="#shading" 
                        role="tab" 
                        aria-controls="pills-shading"
                        aria-selected="false">
                        Shading
                    </a>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-9 col-lg-10">
                <div class="col-12">
                    <div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="aloitus" role="tabpanel" aria-labelledby="pills-home-tab">
                            <h1>Maalaustekniikat</h1>
                            <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            </p>
                        </div>
                        <div class="tab-pane fade" id="undercoating" role="tabpanel" aria-labelledby="pills-undercoating-tab">
                            <h1>Undercoating</h1>
                            <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            </p>
                        </div>
                        <div class="tab-pane fade" id="basecoating" role="tabpanel" aria-labelledby="pills-basecoating-tab">
                            <h1>Basecoating</h1>
                            <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            </p>
                        </div>
                        <div class="tab-pane fade" id="layering" role="tabpanel" aria-labelledby="pills-layering-tab">
                            <h1>Layering</h1>
                            <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            </p>
                        </div>
                        <div class="tab-pane fade" id="wetBlending" role="tabpanel" aria-labelledby="pills-wetBlending-tab">
                            <h1>Wet Blending</h1>
                            <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            </p>
                        </div>
                        <div class="tab-pane fade" id="drybrushing" role="tabpanel" aria-labelledby="pills-drybrushing-tab">
                            <h1>Drybrushing</h1>
                            <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            </p>
                        </div>
                        <div class="tab-pane fade" id="shading" role="tabpanel" aria-labelledby="pills-shading-tab">
                            <h1>Shading</h1>
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