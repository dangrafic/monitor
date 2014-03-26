'use strict';

angular.module('monitorApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
