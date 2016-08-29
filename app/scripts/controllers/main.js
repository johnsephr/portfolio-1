'use strict';

/**
 * @ngdoc function
 * @name portfolioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the portfolioApp
 */
angular.module('portfolioApp')
    .controller('MainCtrl', function ($scope, $timeout) {

        $scope.ready = false;

        $timeout(function () {
            $scope.ready = true;
        }, 1);

        $scope.works = [{
            title: 'Atlas Dashboard',
            roles: ['sole front end dev', 'ui design', 'user flows'],
            description: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
            techs: [{
                    icon: 'ion-social-sass',
                    name: 'Sass'
            }, {
                    icon: 'ion-social-html5-outline',
                    name: 'Html5'
            }, {
                    icon: 'ion-ios-pie-outline',
                    name: 'eCharts 3'
            },
                {
                    icon: 'ion-ionic',
                    name: 'Css3'
            },
                {
                    icon: 'ion-social-css3-outline',
                    name: 'Css3'
            }, {
                    icon: 'ion-social-javascript-outline',
                    name: 'Javascript'
            }, {
                    icon: 'ion-social-github-outline',
                    name: 'GitHub'
            }],
            show: false,
            web_path: 'images/atlas-dash.png',
            mobile_path: '',
            video_path: '',
            buttons: [{
                name: 'View Demo',
                link: ''
            }, {
                name: 'View Site',
                link: ''
            }]
        }, {
            title: 'atlas app',
            roles: ['sole mobile dev', 'code refactor'],
            description: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
            techs: [{
                    icon: 'ion-social-sass',
                    name: 'Sass'
            }, {
                    icon: 'ion-social-html5-outline',
                    name: 'Html5'
            }, {
                    icon: 'ion-ios-pie-outline',
                    name: 'eCharts 3'
            },
                {
                    icon: 'ion-ionic',
                    name: 'Css3'
            },
                {
                    icon: 'ion-social-css3-outline',
                    name: 'Css3'
            }, {
                    icon: 'ion-social-javascript-outline',
                    name: 'Javascript'
            }, {
                    icon: 'ion-social-github-outline',
                    name: 'GitHub'
            }],
            show: false,
            app_left: 'images/atlas-app-left.png',
            app_center: 'images/atlas-app-center.png',
            app_right: 'images/atlas-app-right.png',
            buttons: [{
                name: 'View Demo',
                link: ''
            }, {
                name: 'Get App',
                link: ''
            }]
        }, {
            title: 'Atlas Web',
            roles: ['sole front end dev', 'ui design'],
            description: 'The product website ',
            techs: [{
                    icon: 'ion-social-sass',
                    name: 'Sass'
            }, {
                    icon: 'ion-social-html5-outline',
                    name: 'Html5'
            }, {
                    icon: 'ion-ios-pie-outline',
                    name: 'eCharts 3'
            },
                {
                    icon: 'ion-ionic',
                    name: 'Css3'
            },
                {
                    icon: 'ion-social-css3-outline',
                    name: 'Css3'
            }, {
                    icon: 'ion-social-javascript-outline',
                    name: 'Javascript'
            }, {
                    icon: 'ion-social-github-outline',
                    name: 'GitHub'
            }],
            web_path: 'images/atlas-web.png',
            mobile_path: 'images/atlas-mobile.png',
            show: false,
            video_path: '',
            buttons: [{
                name: 'View Site',
                link: ''
            }]
        }, {
            title: 'gotchosen social exchange',
            roles: ['senior front end dev'],
            description: 'The Social Exchange is a social network, based on maintaining the privacy of their users. Their reach extends internationally to over one million registered users.',
            techs: [{
                    icon: 'ion-social-sass',
                    name: 'Sass'
            }, {
                    icon: 'ion-social-html5-outline',
                    name: 'Html5'
            }, {
                    icon: 'ion-ios-pie-outline',
                    name: 'eCharts 3'
            },
                {
                    icon: 'ion-ionic',
                    name: 'Css3'
            },
                {
                    icon: 'ion-social-css3-outline',
                    name: 'Css3'
            }, {
                    icon: 'ion-social-javascript-outline',
                    name: 'Javascript'
            }, {
                    icon: 'ion-social-github-outline',
                    name: 'GitHub'
            }],
            show: false,
            web_path: 'images/gotchosen.png',
            mobile_path: 'images/gotchosen-mobile.png',
            video_path: '',
            buttons: [{
                name: 'View Site',
                link: ''
            }, {
                name: 'Get App',
                link: ''
            }, ]
        }, {
            title: 'Kiosk for Rickys Beauty Co',
            roles: ['front end dev', 'api'],
            description: 'A beauty product kiosk located at Rickys Beauty Supply in NYC.',
            techs: [{
                    icon: 'ion-social-sass',
                    name: 'Sass'
            }, {
                    icon: 'ion-social-html5-outline',
                    name: 'Html5'
            }, {
                    icon: 'ion-ios-pie-outline',
                    name: 'eCharts 3'
            },
                {
                    icon: 'ion-ionic',
                    name: 'Css3'
            },
                {
                    icon: 'ion-social-css3-outline',
                    name: 'Css3'
            }, {
                    icon: 'ion-social-javascript-outline',
                    name: 'Javascript'
            }, {
                    icon: 'ion-social-github-outline',
                    name: 'GitHub'
            }],
            web_path: 'images/rickys.png',
            show: false,
            video_path: '',
            buttons: [{
                name: 'View Site',
                link: ''
            }]
        }, {
            title: 'Northrop Grumman',
            roles: ['front end dev', 'systems engineering', 'project management'],
            description: 'Northrop Grumman is the second largest Defense Contractors in the world. I worked at Northrop for nearly three years within systems engineering and software development. Primarily working in R&D and as a development lead.',
            techs: [{
                    icon: 'ion-social-sass',
                    name: 'Sass'
            }, {
                    icon: 'ion-social-html5-outline',
                    name: 'Html5'
            }, {
                    icon: 'ion-ios-pie-outline',
                    name: 'eCharts 3'
            },
                {
                    icon: 'ion-ionic',
                    name: 'Css3'
            },
                {
                    icon: 'ion-social-css3-outline',
                    name: 'Css3'
            }, {
                    icon: 'ion-social-javascript-outline',
                    name: 'Javascript'
            }, {
                    icon: 'ion-social-github-outline',
                    name: 'GitHub'
            }],
            web_path: 'images/ng.png',
            show: false,
            video_path: '',
            buttons: [{
                name: 'View Site',
                link: ''
            }]
        }];

        $scope.projects = [{
            title: 'MixinAid',
            roles: ['front end dev', 'concept', 'api'],
            description: 'MixinAid is a crowd-sourced Mixin Library that allows you to share and collect sass mixins. Future plans involve a download of all your saved mixins into a single sass file for import into every project you launch.',
            techs: [{
                    icon: 'ion-social-sass',
                    name: 'Sass'
            }, {
                    icon: 'ion-social-html5-outline',
                    name: 'Html5'
            }, {
                    icon: 'ion-ios-pie-outline',
                    name: 'eCharts 3'
            },
                {
                    icon: 'ion-ionic',
                    name: 'Css3'
            },
                {
                    icon: 'ion-social-css3-outline',
                    name: 'Css3'
            }, {
                    icon: 'ion-social-javascript-outline',
                    name: 'Javascript'
            }, {
                    icon: 'ion-social-github-outline',
                    name: 'GitHub'
            }],
            show: false,
            web_path: 'images/mixin-web.png',
            mobile_path: 'images/mixin-mobile.png',
            video_path: '',
            buttons: [{
                name: 'View Site',
                link: ''
            }]
        }, {
            title: 'Web to Mobile',
            roles: ['front end dev', 'concept', 'ui design'],
            description: 'Demonstrates that web apps can feel native within a mobile browser. The app listens for specific mobile media queries, within which it fills the entire screen, providing a more native mobile experience',
            techs: [{
                    icon: 'ion-social-sass',
                    name: 'Sass'
            }, {
                    icon: 'ion-social-html5-outline',
                    name: 'Html5'
            }, {
                    icon: 'ion-ios-pie-outline',
                    name: 'eCharts 3'
            },
                {
                    icon: 'ion-ionic',
                    name: 'Css3'
            },
                {
                    icon: 'ion-social-css3-outline',
                    name: 'Css3'
            }, {
                    icon: 'ion-social-javascript-outline',
                    name: 'Javascript'
            }, {
                    icon: 'ion-social-github-outline',
                    name: 'GitHub'
            }],
            show: false,
            web_path: 'images/calc-web.png',
            mobile_path: 'images/calc-mobile.png',
            buttons: [{
                name: 'View Demo',
                link: ''
            }]
        }, {
            title: 'Vanilla Javascript Game',
            roles: ['front end dev', 'concept', 'ui design'],
            description: 'A fun game built in vanilla javascript. The objective is to click on the ghosts, and their prototypical children that spawn from them, while avoiding them using ASWD controls. The game fundamentally uses recursion and prototypical inheritance to clone smaller sized ghosts, moving in different directions.',
            techs: [{
                    icon: 'ion-social-sass',
                    name: 'Sass'
            }, {
                    icon: 'ion-social-html5-outline',
                    name: 'Html5'
            }, {
                    icon: 'ion-ios-pie-outline',
                    name: 'eCharts 3'
            },
                {
                    icon: 'ion-ionic',
                    name: 'Css3'
            },
                {
                    icon: 'ion-social-css3-outline',
                    name: 'Css3'
            }, {
                    icon: 'ion-social-javascript-outline',
                    name: 'Javascript'
            }, {
                    icon: 'ion-social-github-outline',
                    name: 'GitHub'
            }],
            web_path: 'images/mario-web.png',
            mobile_path: '',
            show: false,
            video_path: '',
            buttons: [{
                name: 'View Site',
                link: ''
            }]
        }];



    });
