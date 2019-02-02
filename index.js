/* global hexo */

'use strict';

hexo.config.volume_generator = Object.assign({
  per_page: typeof hexo.config.per_page === 'undefined' ? 10 : hexo.config.per_page
}, hexo.config.volume_generator);

hexo.extend.generator.register('volume', require('./lib/generator'));
