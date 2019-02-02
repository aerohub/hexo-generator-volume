'use strict';

var pagination = require('hexo-pagination');

module.exports = function(locals) {
  var config = this.config;
  var perPage = config.volume_generator.per_page;
  var paginationDir = config.pagination_dir || 'page';

  return locals.volumes.reduce(function(result, volume) {
    if (!volume.length) return result;

    var posts = volume.posts.sort('-date');
    var data = pagination(volume.path, posts, {
      perPage: perPage,
      layout: ['volume', 'archive', 'index'],
      format: paginationDir + '/%d/',
      data: {
        volume: volume.name
      }
    });

    return result.concat(data);
  }, []);
};
