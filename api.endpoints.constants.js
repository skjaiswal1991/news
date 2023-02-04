let NEWS_SERVER = ''
let ROOT_SERVER = ''
if (true) {
  NEWS_SERVER = 'http://3.21.248.174:3020/'
  ROOT_SERVER = 'http://3.21.248.174:3000/'

} else {
  NEWS_SERVER = 'http://localhost:3020/'
  ROOT_SERVER = 'http://localhost:3000/'
}



export default {

  HOME: ROOT_SERVER,
  NO_IMAGE: '/no_image.png',
  DIR_IMAGE_PATH: "/dirimage/",
  DIR_CAT_IMAGE_PATH: "/public/uploads/category/",
  BASE_URL_NEWS: NEWS_SERVER,

  GET_POST_END_POINT: '/posts',
  GET_AUDIOR_END_POUNT: '/playaudio'
};
