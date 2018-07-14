var translationsEn = {
    HEADLINE: 'What an awesome module!',
    PARAGRAPH: 'Srsly!',
    NAMESPACE: {
        PARAGRAPH: 'And it comes with awesome features!'
    },
    BUTTON_LANG_EN: "English",
    BUTTON_LANG_VI: "Vietnamese"
};
var translationsVi = {
    HEADLINE: 'Thật tuyệt vời!',
    PARAGRAPH: 'Tất nhiên!',
    NAMESPACE: {
        PARAGRAPH: 'Cùng với tính năng tuyệt vời!'
    },
    BUTTON_LANG_EN: "Tiếng Anh",
    BUTTON_LANG_VI: "Tiếng Việt"
};


var app = angular.module('myApp', ['pascalprecht.translate']);

app.config(['$translateProvider', function ($translateProvider) {
    $translateProvider
        .translations('en', translationsEn)
        .translations('vi', translationsVi)
        .preferredLanguage('vi')
        .fallbackLanguage('en');
}]);

app.controller('Ctrl', ['$translate', '$scope', function ($translate, $scope) {
    $scope.changeLanguage = function (langKey) {
        $translate.use(langKey);
    };
}]);