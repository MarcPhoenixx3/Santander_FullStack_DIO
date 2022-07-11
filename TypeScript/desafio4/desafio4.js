var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var apiKey;
var requestToken;
var username;
var password;
var sessionId;
var userId;
var listasCriadas = new Map();
var selectedListId;
var loginButton = document.getElementById('login-button');
var searchButton = document.getElementById('search-button');
var createNewListButton = document.getElementById('create-list-button');
var listSelector = document.getElementById('list-selector');
var listFilmTable = document.querySelector('#list-container table');
var searchFilmTable = document.querySelector('#search-container table');
listSelector.addEventListener('change', function () {
    return __awaiter(this, void 0, void 0, function () {
        var listName;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    listName = this.value;
                    selectedListId = listasCriadas.get(listName);
                    return [4 /*yield*/, updateSelectedFilmInformation()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
});
loginButton.addEventListener('click', function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, criarRequestToken()];
            case 1:
                _a.sent();
                return [4 /*yield*/, logar()];
            case 2:
                _a.sent();
                return [4 /*yield*/, criarSessao()];
            case 3:
                _a.sent();
                return [4 /*yield*/, pegarInformacoesDaConta()];
            case 4:
                _a.sent();
                return [4 /*yield*/, preencherListasCriadas()];
            case 5:
                _a.sent();
                updateListSelector();
                return [2 /*return*/];
        }
    });
}); });
searchButton.addEventListener('click', function () { return __awaiter(_this, void 0, void 0, function () {
    var query, searchResponse, pagesNavigationWrapper;
    var _this = this;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                query = document.getElementById('search-text').value;
                return [4 /*yield*/, procurarFilme(query, 1)];
            case 1:
                searchResponse = _a.sent();
                return [4 /*yield*/, updateFilmSearchResults(searchResponse)];
            case 2:
                _a.sent();
                pagesNavigationWrapper = document.querySelector("#search-container .list-page-navigation");
                updatePagesNavigationContainer(pagesNavigationWrapper, searchResponse.total_pages, function (page) { return __awaiter(_this, void 0, void 0, function () {
                    var searchResponse;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, procurarFilme(query, page)];
                            case 1:
                                searchResponse = _a.sent();
                                return [4 /*yield*/, updateFilmSearchResults(searchResponse)];
                            case 2:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
        }
    });
}); });
createNewListButton.addEventListener('click', function () { return __awaiter(_this, void 0, void 0, function () {
    var newListName, newListDescription;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                newListName = document.getElementById('new-list-name').value;
                newListDescription = document.getElementById('new-list-description').value;
                return [4 /*yield*/, criarLista(newListName, newListDescription)];
            case 1:
                _a.sent();
                return [4 /*yield*/, preencherListasCriadas()];
            case 2:
                _a.sent();
                updateListSelector();
                return [2 /*return*/];
        }
    });
}); });
function preencherSenha() {
    password = document.getElementById('senha').value;
    validateLoginButton();
}
function preencherLogin() {
    username = document.getElementById('username').value;
    validateLoginButton();
}
function preencherApi() {
    apiKey = document.getElementById('api-key').value;
    validateLoginButton();
}
function validateLoginButton() {
    if (password && username && apiKey) {
        loginButton.disabled = false;
    }
    else {
        loginButton.disabled = true;
    }
}
function preencherListasCriadas() {
    return __awaiter(this, void 0, void 0, function () {
        var createdLists;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, pegarListasCriadas()];
                case 1:
                    createdLists = _a.sent();
                    listasCriadas.clear();
                    createdLists.results.forEach(function (item) {
                        listasCriadas.set(item.name, item.id);
                    });
                    return [2 /*return*/];
            }
        });
    });
}
function updateSelectedFilmInformation() {
    return __awaiter(this, void 0, void 0, function () {
        var informationOfSelectedList, filmList, selectecListDescription;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, pegarLista(selectedListId)];
                case 1:
                    informationOfSelectedList = _a.sent();
                    filmList = informationOfSelectedList.items;
                    updateFilmTable(listFilmTable, filmList, "-", function (filmInfo) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, removerFilmeDaLista(filmInfo.id, selectedListId)];
                                case 1:
                                    _a.sent();
                                    updateSelectedFilmInformation();
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    selectecListDescription = document.getElementById('selected-list-description');
                    selectecListDescription.innerHTML = informationOfSelectedList.description;
                    return [2 /*return*/];
            }
        });
    });
}
function updateFilmSearchResults(searchResponse) {
    return __awaiter(this, void 0, void 0, function () {
        var filmList;
        var _this = this;
        return __generator(this, function (_a) {
            filmList = searchResponse.results;
            updateFilmTable(searchFilmTable, filmList, "+", function (filmInfo) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, adicionarFilmeNaLista(filmInfo.id, selectedListId)];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, updateSelectedFilmInformation()];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
            return [2 /*return*/];
        });
    });
}
function updateListSelector() {
    listSelector.innerHTML = '';
    for (var _i = 0, _a = listasCriadas.keys(); _i < _a.length; _i++) {
        var listName = _a[_i];
        var selectorOption = document.createElement('option');
        selectorOption.value = listName;
        selectorOption.innerHTML = listName;
        listSelector.appendChild(selectorOption);
    }
    listSelector.dispatchEvent(new Event('change'));
}
function updateFilmTable(listView, listOfFilms, buttonLabel, buttonCallback) {
    listView.innerHTML = '';
    var _loop_1 = function (filmInfo) {
        var row = document.createElement('tr');
        var cellLabel = document.createElement('td');
        var cellButton = document.createElement('td');
        var button = document.createElement('button');
        cellLabel.innerHTML = filmInfo.original_title;
        cellButton.appendChild(button);
        button.addEventListener('click', function () {
            buttonCallback(filmInfo);
        });
        button.innerHTML = buttonLabel;
        row.appendChild(cellLabel);
        row.appendChild(cellButton);
        listView.appendChild(row);
    };
    for (var _i = 0, listOfFilms_1 = listOfFilms; _i < listOfFilms_1.length; _i++) {
        var filmInfo = listOfFilms_1[_i];
        _loop_1(filmInfo);
    }
}
function updatePagesNavigationContainer(container, numberOfPages, buttonCallback) {
    container.innerHTML = "";
    var pageIncreaseButton = document.createElement('button');
    var pageDecreaseButton = document.createElement('button');
    var pageNumber = document.createElement('span');
    pageIncreaseButton.innerHTML = ">";
    pageDecreaseButton.innerHTML = "<";
    pageNumber.innerHTML = "1/".concat(numberOfPages);
    container.appendChild(pageDecreaseButton);
    container.appendChild(pageNumber);
    container.appendChild(pageIncreaseButton);
    var actualPage = 1;
    pageIncreaseButton.addEventListener('click', function () {
        if (actualPage < numberOfPages) {
            actualPage++;
            pageNumber.innerHTML = "".concat(actualPage, "/").concat(numberOfPages);
            buttonCallback(actualPage);
        }
    });
    pageDecreaseButton.addEventListener('click', function () {
        if (actualPage > 1) {
            actualPage--;
            pageNumber.innerHTML = "".concat(actualPage, "/").concat(numberOfPages);
            buttonCallback(actualPage);
        }
    });
}
var HttpClient = /** @class */ (function () {
    function HttpClient() {
    }
    HttpClient.get = function (_a) {
        var url = _a.url, method = _a.method, _b = _a.body, body = _b === void 0 ? null : _b;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_c) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var request = new XMLHttpRequest();
                        request.open(method, url, true);
                        request.onload = function () {
                            if (request.status >= 200 && request.status < 300) {
                                resolve(JSON.parse(request.responseText));
                            }
                            else {
                                reject({
                                    status: request.status,
                                    statusText: request.statusText
                                });
                            }
                        };
                        request.onerror = function () {
                            reject({
                                status: request.status,
                                statusText: request.statusText
                            });
                        };
                        if (body) {
                            request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
                            body = JSON.stringify(body);
                        }
                        request.send(body);
                    })];
            });
        });
    };
    return HttpClient;
}());
function procurarFilme(query, page) {
    if (page === void 0) { page = 1; }
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    query = encodeURI(query);
                    return [4 /*yield*/, HttpClient.get({
                            url: "https://api.themoviedb.org/3/search/movie?api_key=".concat(apiKey, "&query=").concat(query, "&page=").concat(page),
                            method: "GET"
                        })];
                case 1:
                    result = _a.sent();
                    console.log("Film Search: ", result);
                    return [2 /*return*/, result];
            }
        });
    });
}
function pegarInformacoesFilme(filmeId) {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, HttpClient.get({
                        url: "https://api.themoviedb.org/3/movie/".concat(filmeId, "?api_key=").concat(apiKey, "&language=en-US"),
                        method: "GET"
                    })];
                case 1:
                    result = _a.sent();
                    console.log("Film information: ", result);
                    return [2 /*return*/, result];
            }
        });
    });
}
function criarRequestToken() {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, HttpClient.get({
                        url: "https://api.themoviedb.org/3/authentication/token/new?api_key=".concat(apiKey),
                        method: "GET"
                    })];
                case 1:
                    result = _a.sent();
                    console.log("Token: ", result);
                    requestToken = result.request_token;
                    return [2 /*return*/];
            }
        });
    });
}
function logar() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, HttpClient.get({
                        url: "https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=".concat(apiKey),
                        method: "POST",
                        body: {
                            username: "".concat(username),
                            password: "".concat(password),
                            request_token: "".concat(requestToken)
                        }
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function criarSessao() {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, HttpClient.get({
                        url: "https://api.themoviedb.org/3/authentication/session/new?api_key=".concat(apiKey, "&request_token=").concat(requestToken),
                        method: "GET"
                    })];
                case 1:
                    result = _a.sent();
                    console.log("Create session: ", result);
                    sessionId = result.session_id;
                    return [2 /*return*/];
            }
        });
    });
}
function criarLista(nomeDaLista, descricao) {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, HttpClient.get({
                        url: "https://api.themoviedb.org/3/list?api_key=".concat(apiKey, "&session_id=").concat(sessionId),
                        method: "POST",
                        body: {
                            name: nomeDaLista,
                            description: descricao,
                            language: "pt-br"
                        }
                    })];
                case 1:
                    result = _a.sent();
                    console.log("Create list: ", result);
                    return [2 /*return*/];
            }
        });
    });
}
function adicionarFilmeNaLista(filmeId, listaId) {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, HttpClient.get({
                        url: "https://api.themoviedb.org/3/list/".concat(listaId, "/add_item?api_key=").concat(apiKey, "&session_id=").concat(sessionId),
                        method: "POST",
                        body: {
                            media_id: filmeId
                        }
                    })];
                case 1:
                    result = _a.sent();
                    console.log("Add film to list: ", result);
                    return [2 /*return*/];
            }
        });
    });
}
function removerFilmeDaLista(filmeId, listaId) {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, HttpClient.get({
                        url: "https://api.themoviedb.org/3/list/".concat(listaId, "/remove_item?api_key=").concat(apiKey, "&session_id=").concat(sessionId),
                        method: "POST",
                        body: {
                            media_id: filmeId
                        }
                    })];
                case 1:
                    result = _a.sent();
                    console.log("Remove film from list:", result);
                    return [2 /*return*/];
            }
        });
    });
}
function pegarLista(listId) {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, HttpClient.get({
                        url: "https://api.themoviedb.org/3/list/".concat(listId, "?api_key=").concat(apiKey),
                        method: "GET"
                    })];
                case 1:
                    result = _a.sent();
                    console.log("Take list: ", result);
                    return [2 /*return*/, result];
            }
        });
    });
}
function pegarInformacoesDaConta() {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, HttpClient.get({
                        url: "https://api.themoviedb.org/3/account?api_key=".concat(apiKey, "&session_id=").concat(sessionId),
                        method: "GET"
                    })];
                case 1:
                    result = _a.sent();
                    console.log("Account information: ", result);
                    userId = result.id;
                    return [2 /*return*/];
            }
        });
    });
}
function pegarListasCriadas() {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, HttpClient.get({
                        url: "https://api.themoviedb.org/3/account/".concat(userId, "/lists?api_key=").concat(apiKey, "&session_id=").concat(sessionId),
                        method: "GET"
                    })];
                case 1:
                    result = _a.sent();
                    console.log("Created lists: ", result);
                    return [2 /*return*/, result];
            }
        });
    });
}
