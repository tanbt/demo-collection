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
        .preferredLanguage(window.location.href.substr(window.location.href.length-2))
        .fallbackLanguage('en');
}]);

app.controller('Ctrl', ['$translate', '$scope', function ($translate, $scope) {
    $translate(['HEADLINE', 'PARAGRAPH', 'NAMESPACE.PARAGRAPH']).then(function (translations) {
        $scope.headline = translations.HEADLINE;
        $scope.paragraph = translations.PARAGRAPH;
        $scope.namespaced_paragraph = translations['NAMESPACE.PARAGRAPH'];
      }, function (translationIds) {
        $scope.headline = translationIds.headline;
        $scope.paragraph = translationIds.paragraph;
        $scope.namespaced_paragraph = translationIds.namespaced_paragraph;
      });

    $scope.changeLanguage = function (langKey) {
        $translate.use(langKey);
    };
}]);