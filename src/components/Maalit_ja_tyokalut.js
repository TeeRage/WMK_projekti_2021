/**
 * Maalit ja työkalut -sivun näkymä
*/

const Maalit_ja_tyokalut = () => (
    <div class="container-fluid">
        <div class="row Maalit_ja_tyokalut_sisalto">
            <div class="col-xs-12 col-sm-6 col-md-3 col-lg-2">
                
                <ul class="nav list-group flex-column" id="mjt-tab" role="tablist" aria-orientation="vertical">
                <li class="nav-pills-mjt">
                    <a class="navbar-brand navbar-brand-mjt active" href="#item-0" id="mjt-pills-aloitus-tab" data-toggle="tab" role="tab" aria-controls="item-0" aria-selected="true">Maalit ja työkalut</a>
                    
                    <a class="nav-link" href="#item-1-0" id="mjt-pills-1.0-tab" data-toggle="tab" role="tab" aria-controls="item-1-0" aria-selected="false">Maalit</a>
                    <li class="nav flex-column nav-pills-mjt-alivalikko">
                        <a class="nav-link ml-3 my-1" href="#item-1-1" id="mjt-pills-1.1-tab" data-toggle="tab" role="tab" aria-controls="item-1-1" aria-selected="false">Akryylimaalit</a>
                        <a class="nav-link ml-3 my-1" href="#item-1-2" id="mjt-pills-1.2-tab" data-toggle="tab" role="tab" aria-controls="item-1-2" aria-selected="false">Washit</a>
                        <a class="nav-link ml-3 my-1" href="#item-1-3" id="mjt-pills-1.3-tab" data-toggle="tab" role="tab" aria-controls="item-1-3" aria-selected="false">Kontrastimaalit</a>
                        <a class="nav-link ml-3 my-1" href="#item-1-4" id="mjt-pills-1.4-tab" data-toggle="tab" role="tab" aria-controls="item-1-4" aria-selected="false">Maalisetit</a>
                    </li>

                    <a class="nav-link" href="#item-2-0" id="mjt-pills-2.0-tab" data-toggle="tab" role="tab" aria-controls="item-2-0" aria-selected="false">Työkalut</a>
                    <div class="nav flex-column nav-pills-mjt-alivalikko">
                        <a class="nav-link ml-3 my-1" href="#item-2-1" id="mjt-pills-2.1-tab" data-toggle="tab" role="tab" aria-controls="item-2-1" aria-selected="false">Siveltimet</a>
                        <a class="nav-link ml-3 my-1" href="#item-2-2" id="mjt-pills-2.2-tab" data-toggle="tab" role="tab" aria-controls="item-2-2" aria-selected="false">Paletit</a>
                        <a class="nav-link ml-3 my-1" href="#item-2-3" id="mjt-pills-2.3-tab" data-toggle="tab" role="tab" aria-controls="item-2-3" aria-selected="false">Pidikkeet</a>
                        <a class="nav-link ml-3 my-1" href="#item-2-4" id="mjt-pills-2.4-tab" data-toggle="tab" role="tab" aria-controls="item-2-4" aria-selected="false">Viilat, pihdit, veitset</a>
                    </div>
                    </li>
                </ul>
            </div>

            <div class="col-xs-12 col-sm-6 col-md-9 col-lg-10">
                <div class="col-12">
                    <div class="tab-content" id="mjt-tabContent">
                        <div class="tab-pane fade show active" id="item-0" role="tabpanel" aria-labelledby="mjt-pills-aloitus-tab">
                            
                            <h1>Tälle sivulle asiaa maaleista ja työkaluista</h1>
                            <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            </p>

                        </div>
                        <div class="tab-pane fade" id="item-1-0" role="tabpanel" aria-labelledby="mjt-pills-1.0-tab">
                            <h1>Maalit</h1>
                            <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            </p>
                        </div>
                        <div class="tab-pane fade" id="item-1-1" role="tabpanel" aria-labelledby="mjt-pills-1.1-tab">
                            <h1>Akryylimaalit</h1>
                            <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            </p>
                        </div>
                        <div class="tab-pane fade" id="item-1-2" role="tabpanel" aria-labelledby="mjt-pills-1.2-tab">
                            <h1>Washit</h1>
                            <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            </p>
                        </div>
                        <div class="tab-pane fade" id="item-1-3" role="tabpanel" aria-labelledby="mjt-pills-1.3-tab">
                            <h1>Kontrastimaalit</h1>
                            <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            </p>
                        </div>
                        <div class="tab-pane fade" id="item-1-4" role="tabpanel" aria-labelledby="mjt-pills-1.4-tab">
                            <h1>Maalisetit</h1>
                            <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            </p>
                        </div>
                        <div class="tab-pane fade" id="item-2-0" role="tabpanel" aria-labelledby="mjt-pills-2.0-tab">
                            <h1>Työkalut</h1>
                            <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            </p>
                        </div>
                        <div class="tab-pane fade" id="item-2-1" role="tabpanel" aria-labelledby="mjt-pills-2.1-tab">
                            <h1>Siveltimet</h1>
                            <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            </p>
                        </div>
                        <div class="tab-pane fade" id="item-2-2" role="tabpanel" aria-labelledby="mjt-pills-2.2-tab">
                            <h1>Paletit</h1>
                            <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            </p>
                        </div>
                        <div class="tab-pane fade" id="item-2-3" role="tabpanel" aria-labelledby="mjt-pills-2.3-tab">
                            <h1>Pidikkeet</h1>
                            <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            </p>
                        </div>
                        <div class="tab-pane fade" id="item-2-4" role="tabpanel" aria-labelledby="mjt-pills-2.4-tab">
                            <h1>Viilat, pihdit, veitset</h1>
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

export default Maalit_ja_tyokalut;