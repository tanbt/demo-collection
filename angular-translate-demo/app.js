var translationsEn = {
    HEADLINE: 'What an awesome module!',
    PARAGRAPH: 'Srsly!',
    NAMESPACE: {
        PARAGRAPH: 'And it comes with awesome features!'
    }
};
var translationsVi = {
    HEADLINE: 'Thật tuyệt vời!',
    PARAGRAPH: 'Tất nhiên!',
    NAMESPACE: {
        PARAGRAPH: 'Cùng với tính năng tuyệt vời!'
    }
};


var app = angular.module('myApp', ['pascalprecht.translate']);

app.config(['$translateProvider', function ($translateProvider) {
    // add translation table
    $translateProvider
        .translations('en', translationsEn)
        .translations('vi', translationsVi)
        .preferredLanguage('vi');
}]);

app.controller('Ctrl', ['$scope', '$translate', function ($scope, $translate) {
    $translate(['HEADLINE', 'PARAGRAPH', 'NAMESPACE.PARAGRAPH']).then(function (translations) {
        $scope.headline = translations.HEADLINE;
        $scope.paragraph = translations.PARAGRAPH;
        $scope.namespaced_paragraph = translations['NAMESPACE.PARAGRAPH'];
      }, function (translationIds) {
        $scope.headline = translationIds.headline;
        $scope.paragraph = translationIds.paragraph;
        $scope.namespaced_paragraph = translationIds.namespaced_paragraph;
      });
}]);