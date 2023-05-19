import UrlParser from '../../routes/url-parser';
import RestoSource from '../../data/resto-source';
import { createRestoDetailTemplate, createLikeButtonTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
        <div id="resto" class="resto"></div>
        <div id="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurants = await RestoSource.detailResto(url.id);
    const restosContainer = document.querySelector('#resto');
    restosContainer.innerHTML = createRestoDetailTemplate(restaurants);
    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurants: {
        id: restaurants.id,
        name: restaurants.name,
        description: restaurants.description,
        pictureId: restaurants.pictureId,
        city: restaurants.city,
        rating: restaurants.rating,
      },
    });
  },
};

export default Detail;
