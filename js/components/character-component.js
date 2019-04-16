angular
    .module('RickAndMorty')
    .component('character', {
        template: `
        <li class="char-list__item" ng-style="{'background-image':'url({{$ctrl.char.image}})'}">
            <div class="char-list__genre">
                <img ng-src="img/female-icon.svg" alt="{{$ctrl.char.gender}}" ng-show="{{$ctrl.char.gender === 'Female'}}">
                <img ng-src="img/male-icon.svg" alt="{{$ctrl.char.gender}}" ng-show="{{$ctrl.char.gender === 'Male'}}">
            </div>

            <div class="char-list__data">
                <p class="char-list__data__name">{{$ctrl.char.name}}</p>
                <p class="char-list__data__race">{{$ctrl.char.species}}</p>
                <p class="char-list__data__type">{{$ctrl.char.type}}</p>
                <p class="char-list__data__origin">
                    <img src="img/origin-icon.svg" alt="Origin">
                    {{$ctrl.char.origin.name}}
                </p>
            </div>
        </li>
        `,
        bindings: {
            char: '='
        },
        controller: function CharacterController() {
        }
    });